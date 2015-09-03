import React from 'react'
import _ from 'lodash'
import Radium from 'radium'
import http from 'superagent'
import store from '../stores'

import Loader from './Loader'
import Table from './Table'
import Queue from './Queue'

@Radium
class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })

    let params = _(location.search.slice(1).split('&'))
      .map((item) => item.split('='))
      .object()
      .value()

    http
      .get(`https://fsurvey.firebaseio.com/configs/${params.name}.json`)
      .end((err, res) => {
        let surveys = Object
          .keys(res.body)
          .map((k) => res.body[k])

        let { queue, table } = surveys.reverse()[0]
        store.dispatch({
          type: 'SET',
          queue,
          table,
          index: Number(params.index) || 0
        })
      })
  }

  render () {
    const { queue, table, index } = this.state
    let urlParams = _(location.search.slice(1).split('&'))
      .map((item) => item.split('='))
      .object()
      .value()

    return (
      <div style={[styles.main]}>
        <div>
        {
          urlParams.dev && !this.state.hideDevBar &&
          <div style={[styles.row]}>
            <div style={[styles.dev]} key="table">
              <Table
                data={table}
                set={(newTable) => {
                  store.dispatch({
                    type: 'SET_TABLE',
                    table: newTable
                  })
                }} 
              />
            </div>
            <div style={[styles.dev]} key="queue">
              <Queue
                data={queue}
                index={index}
                set={(queue) => {
                  store.dispatch({
                    type: 'SET_QUEUE',
                    queue
                  })
                }}
                onSwitch={(i) => {
                  store.dispatch({
                    type: 'SET_INDEX',
                    index: i
                  })
                }}
              />
            </div>
          </div>
        }
        </div>
        <div>
        {
          urlParams.dev &&
          <div style={[styles.row]}>
            <input
              type="checkbox"
              value={1}
              onChange={() => this.setState({hideDevBar:!this.state.hideDevBar})}
            />
          </div>
        }
        </div>
        <div style={[styles.container]} key="container">
          <div style={[styles.center]}>
            {
              queue &&
              <Loader
                params={queue[index]}
                table={table}
                index={index}
                push={(table) => {
                  store.dispatch({
                    type: 'PUSH',
                    index: Number(index) + 1,
                    table
                  })
                }}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  main: {
    position: 'absolute',
    width: '100%',
    minWidth: 640,
    minHeight: '100%',
    left: 0,
    top: 0,
    backgroundColor: '#ffe',
    fontFamily: 'Helvetica',
    fontSize: '1.5em',
    color: '#333',
    boxSizing: 'border-box'
  },
  row: {
    display: 'flex',
    backgroundColor: '#000'
  },
  dev: {
    flex: 1,
    position: 'relative',
    boxSizing: 'border-box',
    margin: 5,
    padding: 5,
    backgroundColor: '#000',
    height: 200,
    overflowX: 'hidden',
    overflowY: 'scroll'
  },
  container: {
    position: 'relative',
    minHeight: '100%',
    width: '100%'
  },
  center: {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    '@media (min-width:1000px)': {
      width: 1000
    },
    '@media (max-width:600px)': {
      width: 600
    }
  }
}

export default Container