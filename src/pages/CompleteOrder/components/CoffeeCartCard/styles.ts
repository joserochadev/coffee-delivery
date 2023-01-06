import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 700;

  + div {
    margin-top: 1.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    p {
      margin-bottom: 0.5rem;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const RemoveButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  height: 2rem;
  align-items: center;
  color: ${({ theme }) => theme.colors['base-text']};
  background: ${({ theme }) => theme.colors['base-button']};
  gap: 0.25rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.textSizes['components-button-s']};

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`
