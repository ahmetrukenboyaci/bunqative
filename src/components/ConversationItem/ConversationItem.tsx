/** Dependencies */
import React, { FC } from 'react'

/** Types */
import { ConversationItemProps } from './ConversationItem.types'

/** Constants */
import { ROUTE } from '../../constants/Routes'

/** Utils */
import { convertDate } from '../../utilities/function'

/** Styles */
import * as S from './ConversationItem.styled';

const ConversationItem: FC<ConversationItemProps> = ({
  id,
  name,
  lastMessage,
  date,
}) => {
  return (
    <S.Wrapper to={`${ROUTE.CONVERSATION}/${id}`}>
      <S.InitialContainer>
        <S.Initial>{name[0]}</S.Initial>
      </S.InitialContainer>
      <S.LastMessageContainer>
        <S.UserName>{name}</S.UserName>
        <S.LastMessage>{lastMessage}</S.LastMessage>
      </S.LastMessageContainer>
      <S.Date>{convertDate(date)}</S.Date>
    </S.Wrapper>
  )
}

export default ConversationItem;