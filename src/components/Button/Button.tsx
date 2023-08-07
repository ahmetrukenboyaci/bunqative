/** Dependencies */
import React, { FC } from 'react'

/** Types */
import { ButtonProps, ButtonColor } from './Button.types'

/** Styles */
import * as S from './Button.styled';

const Button: FC<ButtonProps> = ({
  onClick,
  text,
  icon,
  color = ButtonColor.green
}) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick(event);
  }

  return (
    <S.Wrapper onClick={handleClick} color={color}>
      <S.Icon
        src={icon}
        alt={'input'}
      />
      {text && <S.Text>{text}</S.Text>}
    </S.Wrapper>
  )
}

export default Button