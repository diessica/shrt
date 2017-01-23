import React, { PropTypes } from 'react'
import cn from 'classnames'

const Button = ({ kind, children, className, ...props }) => (
  <button
    {...props}
    className={
      cn('Button', className, {
        'Button--primary': kind === 'primary',
        'Button--secondary': kind === 'secondary'
      })
    }
  >
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  kind: PropTypes.string,
  children: PropTypes.any
}

Button.defaultProps = {
  kind: 'primary'
}

export default Button
