import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { RegularText, TitleText } from '../../components/Typography'
import {
  OrderConfirmedContainer,
  OrderDetailsContainer,
  OrderInfoContainer,
} from './styles'

import orderConfirmedIllustration from '../../assets/orderConfirmedIllustration.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'

export function OrderConfirmed() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <TitleText size="l">Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </RegularText>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            iconBg={colors['brand-purple']}
            icon={<MapPin weight="fill" size={16} />}
            text={
              <OrderInfoContainer>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                <br /> Farrapos - Porto Alegre, RS
              </OrderInfoContainer>
            }
          />
          <InfoWithIcon
            iconBg={colors['brand-yellow']}
            icon={<Timer weight="fill" size={16} />}
            text={
              <OrderInfoContainer>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </OrderInfoContainer>
            }
          />
          <InfoWithIcon
            iconBg={colors['brand-yellow-dark']}
            icon={<CurrencyDollar weight="fill" size={16} />}
            text={
              <OrderInfoContainer>
                Pagamento na entrega <br /> <strong>Cartão de Crédito</strong>
              </OrderInfoContainer>
            }
          />
        </OrderDetailsContainer>
        <img
          src={orderConfirmedIllustration}
          alt="imagem de um entregador dirigindo uma moto"
        />
      </section>
    </OrderConfirmedContainer>
  )
}
