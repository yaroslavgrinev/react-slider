import React from 'react'
import PropTypes from 'prop-types'

const _Slide = ({ image }) =>
  <div className="slide" style={{backgroundImage: `url(${image})`}}></div>

  _Slide.propTypes = {
    image: PropTypes.string,
  };

export default _Slide