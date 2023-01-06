import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/coffee-delivery-logo.svg'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="coffee delivery logo" />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Fortaleza, CE
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
