import React from 'react'
import Radium from 'radium'
import _ from 'lodash'
import http from 'superagent'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import styles from './styles'
import store from '../store'

import Preview from '../../configurator/Preview'
import Parameters from '../../configurator/Parameters'
import Doc from '../../docs/Doc'

import modulesList from '../../modules/list.json'

@DragDropContext(HTML5Backend)
@Radium
class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillMount () {
    const params = _(location.search.slice(1).split('&'))
      .map((item) => item.split('='))
      .object()
      .value()

    if (params.type) {
      store.dispatch({
        type: 'CHANGE_MODULE_TYPE',
        into: params.type
      })
    } else {
      store.dispatch({
        type: 'CHANGE_MODULE_TYPE',
        into: modulesList[0]
      })
    }
  }

  componentWillUpdate (props, state) {
    const { module } = state
    if (module.type) {
      history.pushState(null, null, `?type=${module.type}`)
    }
  }

  render () {
    const {
      module
    } = this.state

    const previewProps = {
      module,
      table: []
    }

    const paramProps = {
      module,
      store
    }

    return (
      <div style={[styles.main]}>
        <select
          defaultValue={module.type}
          onChange={e => {
            store.dispatch({
              type: 'CHANGE_MODULE_TYPE',
              into: e.target.value
            })
          }}
        >
        {
          modulesList.map((m, i) => {
            return (
              <option
                key={i}
                value={m}
              >{m}</option>
            )
          })
        }
        </select>
        <Doc path={`modules/${module.type}`} />
        <Preview {...previewProps} />
        <Parameters {...paramProps} />
      </div>
    )
  }
}

export default Container