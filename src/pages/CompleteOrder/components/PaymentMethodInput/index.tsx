import { ReactNode } from 'react'
import { PaymentMethodInputContainer } from './styles'

interface PaymentmethodInputProps {
  text: string
  icon: ReactNode
}

export function PaymentmethodInput({ text, icon }: PaymentmethodInputProps) {
  return (
    <PaymentMethodInputContainer>
      {icon}
      <p>{text}</p>
    </PaymentMethodInputContainer>
  )
}
