import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 6rem;
`
export const FormBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`
