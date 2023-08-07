/** Dependencies */
import React, { FC } from 'react';

/** Types */
import { MessageProps } from './Message.types';

/** Styles */
import * as S from './Message.styled';
import { convertMessageDate } from '../../utilities/function'

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
      {isInGroup && <S.Initial>{owner[0]}</S.Initial>}
      <S.Date isMine={isMine}>{convertMessageDate(date)}</S.Date>
    </S.Wrapper>
  )
}

export default Message;