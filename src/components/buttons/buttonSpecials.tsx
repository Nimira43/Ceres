import React from 'react'
import { buttonStyles, ButtonVariant } from './buttonStyles'

interface ButtonProps {
  variant: ButtonVariant
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const ButtonSpecials: React.FC<ButtonProps> = ({ variant, children, onClick, disabled = false }) => {
  return (
    <button
      className={`${buttonStyles[variant]} px-4 py-2 rounded ${disabled ? buttonStyles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ButtonSpecials

