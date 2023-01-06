import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formatedPrice = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <img
        src={`/coffees/${coffee.photo}`}
        alt="imagem de uma xícara de café"
      />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${coffee.name}`}>{tag} </span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formatedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button type="button">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
