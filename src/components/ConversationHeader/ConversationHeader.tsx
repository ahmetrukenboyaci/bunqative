/** Dependencies */
import React, { FC } from 'react';

/** Types */
import { ConversationHeaderProps } from './ConversationHeader.types';

/** Images */
import Logo from '../../assets/images/svg/logo.svg';

/** Styles */
import * as S from './ConversationHeader.styled';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/Routes';
import { useAppSelector } from '../../hooks/useAppSelector';

const ConversationHeader: FC<ConversationHeaderProps> = ({
                                                           users,
                                                         }) => {
  const { id: my_id } = useAppSelector(state => state.login);
  const { selectedConversation } = useAppSelector(state => state.conversation);

  const isGroup = !!selectedConversation.is_group;
  const navigate = useNavigate();
  const otherUsers = users?.filter(user => user !== my_id) || [];

  const handleLogoClick = () => {
    navigate(`${ROUTE.ROOT}`);
  };

  return (
    <S.Wrapper isGroup={isGroup}>
      <S.Logo onClick={handleLogoClick} isGroup={isGroup} src={Logo} alt={'logo'}/>
      {otherUsers.map((user, i) => (
        <S.Initial key={i} isGroup={isGroup}>
          {user ? user : ''}
        </S.Initial>
      ))}
      {!isGroup && <S.UserName>{selectedConversation.name}</S.UserName>}
    </S.Wrapper>
  );
};

export default ConversationHeader;