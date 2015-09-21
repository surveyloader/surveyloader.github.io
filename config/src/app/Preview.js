import React, { PropTypes } from 'react'
import _ from 'lodash'

import load from '../../../load/src/services/lazy'
import echo from '../../../load/src/services/echo'

class Preview extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { component: null }
    this.loadComponent.bind(this)
  }

  loadComponent (params, table) {
    if (params.type) {
      load(params.type)
        .then((component) => {
          component.defaultProps = component.defaultProps ? component.defaultProps : {}
          
          let paramValues = _(params)
            .map((v, p) => {
              return Array.isArray(v) ?
                [p, v.map(subv => echo(subv, table))] :
                [p, echo(v, table)]
            })
            .object()
            .value()

          component.defaultProps = { ...component.defaultProps, ...paramValues }
          this.setState({ component })
        })
    }
  }

  componentDidMount () {
    const { params, table } = this.props
    this.loadComponent(params, table)
  }

  componentWillReceiveProps (nextProps) {
    const { params, table } = nextProps
    this.setState({ component: null })
    this.loadComponent(params, table)
  }

  render () {
    const Component = this.state.component
    return Component &&
    <Component {...this.props} />
  }
}

export default Preview