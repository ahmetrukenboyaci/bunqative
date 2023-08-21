/** Dependencies */
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/** Types */
import { ConversationHeaderProps } from './ConversationHeader.types';

/** Images */
import Logo from '../../assets/images/svg/logo.svg';

/** Constants */
import { ROUTE } from '../../constants/Routes';

/** Hooks */
import { useAppSelector } from '../../hooks/useAppSelector';

/** Store */
import { fetchConversationUsers, fetchUser } from '../../store/slices/user.slice';

/** Styles */
import * as S from './ConversationHeader.styled';

const ConversationHeader: FC<ConversationHeaderProps> = ({
                                                           users,
                                                         }) => {
  const { id: my_id } = useAppSelector(state => state.login);
  const { conversationUser, conversationUsers } = useAppSelector(state => state.user);
  const { selectedConversation } = useAppSelector(state => state.conversation);

  const dispatch = useDispatch();

  const isGroup = !!selectedConversation.is_group;
  const navigate = useNavigate();
  const otherUsers = users?.filter(user => user.id !== my_id) || [];

  const handleLogoClick = () => {
    navigate(`${ROUTE.ROOT}`);
  };

  useEffect(() => {
    if (isGroup)
      dispatch(fetchConversationUsers({ ids: otherUsers.map(user => user.id) }));
    else
      dispatch(fetchUser({ id: otherUsers[0].id }));
  }, []);

  return (
    <S.Wrapper isGroup={isGroup}>
      <S.Logo onClick={handleLogoClick} isGroup={isGroup} src={Logo} alt={'logo'}/>
      {[...(isGroup ? conversationUsers : [conversationUser])].map((user, i) => (
        <S.Initial key={i} text={user.name} isGroup={isGroup}>
          {user ? user.name[0] : ''}
        </S.Initial>
      ))}
      {!isGroup && <S.UserName>{conversationUser.name}</S.UserName>}
    </S.Wrapper>
  );
};

export default ConversationHeader;