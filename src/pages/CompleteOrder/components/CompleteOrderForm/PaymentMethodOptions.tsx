import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentmethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentmethodInput
        text="cartão de crédito"
        icon={<CreditCard size={16} />}
      />
      <PaymentmethodInput text="cartão de débito" icon={<Bank size={16} />} />
      <PaymentmethodInput text="dinheiro" icon={<Money size={16} />} />
    </PaymentMethodOptionsContainer>
  )
}
