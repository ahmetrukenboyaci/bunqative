/** Dependencies */
import React, { FC, useEffect, useState } from 'react';

/** Types */
import { MessageProps } from './Message.types';

/** Utils */
import { convertMessageDate } from '../../utilities/function';

/** Styles */
import * as S from './Message.styled';
import { request } from '../../utilities/request';
import { ENDPOINT } from '../../constants/Endpoints';
import * as types from '../../constants/methodTypes';
import { UserType } from '../../pages/types/types';

const Message: FC<MessageProps> = ({
                                     text,
                                     isMine = false,
                                     isInGroup = false,
                                     owner,
                                     date,
                                   }) => {
  const [messageOwner, setMessageOwner] = useState<UserType>();

  useEffect(() => {
    owner && owner > 0 && request({
      url: ENDPOINT.USER_READ(owner),
      methodType: types.GET,
    })?.then(response => setMessageOwner(response.data));
  }, [owner]);

  return (
    <S.Wrapper isMine={isMine}>
      <S.Text>{text}</S.Text>
      {isInGroup && !isMine && messageOwner && <S.Initial text={messageOwner.name}>{messageOwner.name[0]}</S.Initial>}
      <S.Date isMine={isMine}>{convertMessageDate(date)}</S.Date>
    </S.Wrapper>
  );
};

export default Message;