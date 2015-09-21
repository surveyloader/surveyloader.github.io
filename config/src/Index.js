//$$$
import React from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import Promise from 'bluebird'
import _ from 'lodash'
import d3 from 'd3'
//$$$

window.React = React
window.Radium = Radium
window.Promise = Promise
window._ = _
window.d3 = d3

import Container from './app/Container'

ReactDOM.render(<Container />, document.getElementById('container'))