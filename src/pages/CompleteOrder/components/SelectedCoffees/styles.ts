import styled from 'styled-components'
import { FormBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`
export const DetailsContainer = styled(FormBaseStyle)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
`
export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
