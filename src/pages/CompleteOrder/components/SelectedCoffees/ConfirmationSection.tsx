import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 29,70</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>

      <div>
        <RegularText color="subtitle" size="l" weight={700}>
          Total
        </RegularText>
        <RegularText color="subtitle" size="l" weight={700}>
          R$ 33,50
        </RegularText>
      </div>

      <Button text="confirmar pedido" />
    </ConfirmationSectionContainer>
  )
}
