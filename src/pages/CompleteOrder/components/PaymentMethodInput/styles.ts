import styled from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  border-radius: 6px;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.textSizes['components-button-s']};
  transition: 0.4s;
  user-select: none;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  &:focus {
    background: ${({ theme }) => theme.colors['brand-purple-light']};
    border-color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`
