import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    gap: 2.5rem;
  }
`

export const OrderDetailsContainer = styled.div`
  min-width: 32rem;
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -5;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const OrderInfoContainer = styled.div`
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
`
