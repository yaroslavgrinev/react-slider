import React from 'react'
import PropTypes from 'prop-types'

const _Arrow = ({ 
  direction,
  children,
  goToSlide
}) => (
      <div className={`${direction} arrow`}  onClick={goToSlide}>
        {children}        
      </div>
  )

_Arrow.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.node.isRequired,
  goToSlide: PropTypes.func.isRequired,
};

export default _Arrow