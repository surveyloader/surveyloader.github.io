import React, { PropTypes } from 'react'
import _ from 'lodash'

import load from '../services/lazy'
import echo from '../services/echo'

class Loader extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { component: null }
    this.loadComponent.bind(this)
  }

  assignProps (params, table) {
    return  _(params)
    .map((v, k) => {
      return Array.isArray(v) ?
        [k, v.map(subv => echo(subv, table))] :
        [k, echo(v, table)]
    })
    .object()
    .value()
  }

  loadComponent (params, table) {
    if (params.type) {
      load(params.type)
        .then((component) => {
          component.defaultProps = component.defaultProps ? component.defaultProps : {}
          component.defaultProps = _
            .assign(component.defaultProps, this.assignProps(params, table))
          this.setState({ component })
        })
    }
  }

  componentDidMount () {
    const { params, table } = this.props
    this.loadComponent(params, table)
  }

  componentWillReceiveProps (nextProps) {
    const { index, params, table } = nextProps
    let tableDiff = !_.isEqual(table, this.props.table)
    let paramsDiff = !_.isEqual(params, this.props.params)
    if (index !== this.props.index || tableDiff || paramsDiff) {
      this.setState({ component: null })
      this.loadComponent(params, table)
    }
  }

  render () {
    const Component = this.state.component
    return Component &&
    <Component {...this.props} />
  }
}

export default Loader