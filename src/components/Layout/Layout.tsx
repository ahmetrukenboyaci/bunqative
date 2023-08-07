/** Dependencies */
import React, { FC } from 'react';

/** Types */
import { LayoutProps } from './Layout.types';

/** Components */
import PageHeader from '../PageHeader/PageHeader'
import ConversationHeader from '../ConversationHeader/ConversationHeader'

/** Styles */
import * as S from './Layout.styled';

const Layout: FC<LayoutProps> = ({
  header,
  isConversation = false,
  children,
  users
}) => {
  return (
    <S.Wrapper>
      {isConversation && users ? (
        <ConversationHeader users={users} />
      ) : (
        <PageHeader name={header || ''} />
      )}
      {children}
    </S.Wrapper>
  )
}

export default Layout;