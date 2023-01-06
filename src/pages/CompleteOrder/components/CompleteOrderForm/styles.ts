import styled from 'styled-components'
import { FormBaseStyle } from '../../styles'

export const CompleteOrderFormContainer = styled.section`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormSectionContainer = styled(FormBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
