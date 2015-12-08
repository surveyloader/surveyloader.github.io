import React from 'react'
import Radium from 'radium'
import _ from 'lodash'
import { declare, type } from '../../global/types'
import identify from '../../global/services/stringHash'
import store from './store'
import Rate from './RateAspect'
import Rated from './RatedAspects'

@Radium
class Index extends React.Component {
  static propTypes = { 
    aspect_texts: declare(type.array),
    aspect_colors: declare(type.array),
    instructions: declare(type.string),
    text: declare(type.string),
    rating_tip: declare(type.string),
    rating_confirm: declare(type.string),
    low_point: declare(type.string),
    mid_point: declare(type.string),
    high_point: declare(type.string)
  }

  static defaultProps = {
    instructions: 'Instructions',
    text: 'Please imagine a scale from -100 to 100 where -100 and 100 are truly extreme ratings. In other words, 100 is the best situation you could possibly imagine and -100 is the worst situation you could possibly imagine. On this scale how would you rate the following aspects of your life?',
    rating_tip: 'Move the slider to set your rating',
    rating_confirm: 'Confirm Rating',
    low_point: 'the least you can possibly imagine',
    mid_point: 'middling or neutral',
    high_point: ' the most you can possibly imagine',
    aspect_texts: [
      'one',
      'two',
      'three'
    ],
    aspect_colors: [
      '#f77',
      '#7f7',
      '#77f'
    ]
  }

  static simulate (props) {
    return _(props.aspects)
      .map((a) => [`rating_${identify(a)}`, _.sample(_.range(0,101))])
      .object()
      .value()
  }

  constructor (props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentDidMount () {
    store.dispatch({
      type: 'SET_ASPECTS', 
      aspects: this.props.aspect_texts
        .map((a, i) => {
          return {
            text: a,
            color: this.props.aspect_colors[i],
            index: i
          }
        })
    })
  }

  componentDidUpdate () {
    if (this.state.index < 0) {
      this.props.push(
        _(this.state.aspects)
          .map((a) => [`rating_${identify(a.text)}`, a.rating])
          .object()
          .value()
      )
    }
  }

  render () {
    const { aspects, rated, index } = this.state
    const { 
      rating_tip,
      rating_confirm,
      instructions,
      text,
      low_point,
      mid_point,
      high_point
    } = this.props
    return (
      <div style={[styles.container]}>
        <div style={[styles.instructions]}>
          <b>{instructions}</b>
          <div>{text}</div>
        </div>
        {
          // index === -1 after all aspects rated
          index > -1 &&
          <Rate
            aspect={aspects[index]}
            handleRating={
              (p) => store.dispatch({
                type: 'CHANGE_RATING',
                rating: p
              })
            }
            handleConfirm={
              (a) => store.dispatch({
                type: 'CONFIRM_RATING',
                aspect: a
              })
            }
            rateText={rating_tip}
            confirmText={rating_confirm}
            lowPoint={low_point}
            midPoint={mid_point}
            highPoint={high_point}
          />
        }
        {
          // if any aspects are rated
          rated.length &&
          rated.reduce((a, b) => a || b) &&
          <Rated
            aspects={
              aspects
                .filter((a, i) => rated[i])
            }
            editRating={
              (i) => store.dispatch({
                type: 'EDIT_RATING',
                index: i
              })
            }
            editText={'Edit'}
          />
        }
      </div>
    )
  }
}

import gstyles from '../../global/styles'
const styles = {
  ...gstyles,
  instructions: {
    ...gstyles.panel,
    ...gstyles.padding(2),
    marginBottom: '2rem'
  },
  container: {
    marginTop: 30,
    userSelect: 'none'
  }
}

export default Index