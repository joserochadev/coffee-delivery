import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 1rem 2.8rem;
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ theme }) => theme.colors['brand-yellow']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 6px;
  margin-top: 0.7rem;
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
