import React from 'react'
import MuiButton from '@material-ui/core/Button'

export interface ButtonProps {
  label?: string
  variant?: any
  color?: any
  startIcon?: any
  endIcon?: any
  onClick?: any
  className?: any
  type?: any
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  startIcon,
  endIcon,
  type,
  ...props
}) => {
  return (
    <MuiButton
      type={type}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
      {...props}
    >
      {label}
    </MuiButton>
  )
}
