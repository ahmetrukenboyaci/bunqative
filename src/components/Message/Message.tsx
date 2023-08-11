/** Dependencies */
import React, { FC } from 'react';

/** Types */
import { MessageProps } from './Message.types';

/** Utils */
import { convertMessageDate } from '../../utilities/function'

/** Styles */
import * as S from './Message.styled';

const Message: FC<MessageProps> = ({
  text,
  isMine = false,
  isInGroup = false,
  owner,
  date
}) => {
  return (
    <S.Wrapper isMine={isMine}>
      <S.Text>{text}</S.Text>
      {isInGroup && <S.Initial isMine={isMine}>{owner ? owner : ''}</S.Initial>}
      <S.Date isMine={isMine}>{convertMessageDate(date)}</S.Date>
    </S.Wrapper>
  )
}

export default Message;