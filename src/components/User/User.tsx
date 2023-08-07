/** Dependencies */
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

/** Types */
import { UserProps } from './User.types'
import { ButtonColor } from '../Button/Button.types'

/** Constants */
import { ROUTE } from '../../constants/Routes'

/** Components */
import Button from '../Button/Button'

/** Icons */
import Message from '../../assets/icons/message.svg'
import Add from '../../assets/icons/add.svg'
import Remove from '../../assets/icons/remove.svg'

/** Styles */
import * as S from './User.styled'

const User: FC<UserProps> = ({
  id,
  name,
  isMessageItem = true,
  isAdded = false,
  onButtonClick
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    //create conversation
    isMessageItem && navigate(`${ROUTE.CONVERSATION}/${id}`);
    onButtonClick && onButtonClick();
  }

  return (
    <S.Wrapper>
      <S.InitialContainer>
        <S.Initial>{name[0]}</S.Initial>
      </S.InitialContainer>
      <S.NameContainer>
        <S.Name>{name}</S.Name>
      </S.NameContainer>
      <Button
        onClick={handleClick}
        icon={isMessageItem ? Message : (isAdded ? Remove : Add)}
        color={isAdded ? ButtonColor.green : ButtonColor.blue}
      />
    </S.Wrapper>
  )
}

export default User;