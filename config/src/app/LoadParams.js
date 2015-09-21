import React, { PropTypes } from 'react'
import Radium  from 'radium'
import _ from 'lodash'

import { DropTarget } from 'react-dnd'

import load from '../../../load/src/services/lazy'
import echo from '../../../load/src/services/echo'

const itemTarget = {
  drop (props, monitor) {
    const draggedParam = monitor.getItem().param
    console.log(draggedParam)
    props.set(draggedParam)
  }
}

@DropTarget('TABLE_PARAM', itemTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@Radium
class HoverValue extends React.Component {
  render () {
    const { table, v, set, hover, brush, connectDropTarget } = this.props
    return connectDropTarget(
      <div style={[styles.hover]}>
      {
        hover || !/\$.+/.test(v) ?
        <textarea
          defaultValue={v}
          onChange={(e) => set(e.target.value)}
          onBrush={brush}
          style={{ width: '100%' }}
        /> :
        <span
          style={{ width: '100%' }}
        >
          {echo(v, table)}
        </span>
      }
      </div>
    )
  }
}

@Radium
class KeyValue extends React.Component {
  render () {
    const { table, k, v, set, onHover, hover } = this.props
    return (
      <div style={[styles.row]} onMouseOver={onHover}>
        <div style={[styles.col, styles.label]}>
          <span>{k}:</span>
        </div>
        <div style={[styles.col]}>
          <HoverValue
            table={table}
            v={v}
            set={set}
            hover={hover}
            brush={onHover}
          />
        </div>
      </div>
    )
  }
}

@Radium
class ArrayValues extends React.Component {
  render () {
    const { table, params, p, set } = this.props
    const { hover } = this.state
    return (
      <div
        onMouseOut={() => this.setState({ hover: null })}
        style={[styles.col]}
      >
        <div key={p} style={[styles.row]}>
          <div style={[styles.col, styles.label]}>
            <span>{p}:</span>
          </div>
          <div style={[styles.col]}>
          </div>
        </div>
        {
          params[p] &&
          params[p].map((v, k) => (
            <KeyValue
              table={table}
              key={k}
              k={k}
              v={v}
              hover={hover === k}
              set={(val) => {
                params[p][k] = val
                set(p, params[p])
              }}
              onHover={() => {
                this.setState({ hover: k })
              }}
            />
          ))
        }
        <div style={[styles.row]}>
          <div style={[styles.col, styles.label]}>
            <span>{params[p].length}:</span>
          </div>
          <div style={[styles.col]}>
            <form onSubmit={(e) => {
              e.preventDefault()
              params[p].push(this.refs.input.value)
              set(p, params[p])
            }}>
              <input
                type="text"
                ref="input"
                style={styles.input}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

@Radium
class LoadParams extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hover: null }
  }

  componentWillMount () {
    this.loadParams(this.props)
  }

  componentWillReceiveProps (props) {
    this.loadParams(props)
  }

  componentDidUpdate (prevProps, prevState) {
    if (!_.isEqual(this.state.params, prevState.params)) {
      this.props.setParams(this.state.params)
    }
  }

  loadParams (props) {
    const { module, table } = props
    if (module) {
      load(module.type)
        .then((component) => {
          component.defaultProps = component.defaultProps ? component.defaultProps : {}
          
          let isArray = _(component.propTypes)
            .map((f, p, ps) => [p, !f({ [p]: [] }, p)])
            .object()
            .value()

          let params = _(component.propTypes)
            .map((f, p) => {
              if (module[p]) {
                return [p, module[p]]
              } else if (component.defaultProps[p]) {
                return [p, component.defaultProps[p]]
              } else if (isArray[p]) {
                return [p, []]
              } else {
                return [p, null]
              }
            })
            .object()
            .value()
            
          this.setState({ params, isArray })
        })
    }
  }

  setParam (param, value) {
    let params = {
      ...this.state.params,
      [param]: value
    }
    this.setState({ params })
    this.props.setParams(params)
  }

  render () {
    const { params, isArray, hover } = this.state
    const { table } = this.props
    return (
      <div
        style={[styles.col]}
        onMouseOut={() => this.setState({ hover: null })}
      >
      {
        params &&
        Object.keys(params)
          .map((p) => {
            return (
              isArray[p] ?
              <ArrayValues
                key={p}
                set={::this.setParam}
                params={params}
                p={p}
                table={table}
              /> :
              <KeyValue
                key={p}
                table={table}
                k={p}
                v={params[p]}
                hover={hover === p}
                onHover={() => this.setState({ hover: p })}
                set={(val) => ::this.setParam(p, val)}
              />
            )
          })
      }
      </div>
    )
  }
}

const styles = {
  col: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '0 0.5rem'
  },
  row: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: '0.5rem 0'
  },
  hover: { 
    width: '100%',
    whiteSpace: 'wrap'
  },
  label: {
    textAlign: 'right',
    verticalAlign: 'top',
    flex: 0.5
  },
  input: {
    width: '100%'
  }
}

export default LoadParams