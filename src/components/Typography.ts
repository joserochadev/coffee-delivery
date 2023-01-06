import styled from 'styled-components'

interface TitleTextProps {
  color?: 'title' | 'subtitle' | 'text'
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: string | number
}

interface RegularTextProps {
  color?: 'text' | 'subtitle' | 'label'
  size?: 'l' | 'm' | 's'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-family: ${({ theme }) => theme.fonts.title}, sans-serif;
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'm'}`]};
  font-weight: ${({ weight }) => weight ?? 800};
  line-height: 130%;
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-weight: ${({ weight }) => weight ?? 400};
  line-height: 130%;
`
