import { styled } from 'styled-components'
import { color } from '../../styles'
import { ButtonContainer } from '../button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const FormContent = styled.div`
  display: block;
  color: ${color.cream};
  font-weight: 700;
  padding-top: 16px;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .margin-bottom {
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    width: 100%;
    margin-top: 8px;
  }
`

export const CheckoutContent = styled.div`
  margin-bottom: 16px;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  display: grid;
  grid-gap: 8px;
  margin-top: 8px;
  flex: auto;

  label {
    font-size: 14px;
  }

  input {
    background-color: ${color.cream};
    color: #4b4b4b;
    border: 1px solid ${color.red};
    font-size: 14px;
    padding: 8px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &.error {
      border: 4px solid red;
    }
  }
`
