/** Dependencies */
import React, { FC } from 'react'

/** Types */
import { ConversationHeaderProps } from './ConversationHeader.types'

/** Images */
import Logo from '../../assets/images/svg/logo.svg'

/** Styles */
import * as S from './ConversationHeader.styled';
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '../../constants/Routes'

const ConversationHeader: FC<ConversationHeaderProps> = ({
  users
}) => {
  const isGroup = users.length > 1;
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(`${ROUTE.ROOT}`);
  }

  return (
    <S.Wrapper isGroup={isGroup}>
      <S.Logo onClick={handleLogoClick} isGroup={isGroup} src={Logo} alt={'logo'} />
      {users.map((user, i) => (
        <S.Initial key={i} isGroup={isGroup}>
          {user ? user : ''}
        </S.Initial>
      ))}
      {!isGroup && <S.UserName>{users ? users[0] : ''}</S.UserName>}
    </S.Wrapper>
  )
}

export default ConversationHeader;