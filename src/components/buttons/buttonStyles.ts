const buttonStyles = {
  primary: 'bg-main text-light hover:bg-main-dark hover:text-light',
  secondary: 'bg-support text-light hover:bg-support-dark hover:text-light',
  accent: 'bg-gold text-dark hover:bg-gold-dark hover:text-dark',
  disabled: 'bg-grey-light text-grey-dark cursor-not-allowed opacity-50',
} as const

type ButtonVariant = keyof typeof buttonStyles

export { buttonStyles }
export type { ButtonVariant }

