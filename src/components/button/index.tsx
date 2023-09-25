import { ButtonContainer } from './styles'

export type Props = {
  title: string
  type: 'button' | 'submit'
  onClick?: () => void
  variant?: 'red' | 'cream'
  children: string | string[]
}

const Button = ({ title, type, onClick, variant, children }: Props) => {
  return (
    <ButtonContainer
      variant={variant}
      title={title}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
