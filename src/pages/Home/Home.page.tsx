/** Dependencies */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/** Constants */
import { CONVERSATIONS } from '../../constants/MockData'
import { ROUTE } from '../../constants/Routes'

/** Components */
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import GroupSlider from '../../components/GroupSlider/GroupSlider'
import Group from '../../components/Group/Group'
import ConversationItem from '../../components/ConversationItem/ConversationItem'

/** Icons */
import Add from '../../assets/icons/add.svg';

/** Types */
import { ConversationType } from '../types/types'

/** Styles */
import * as S from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  const [conversationsSearchResult, setConversationsSearchResult] =
    useState<ConversationType[]>(CONVERSATIONS);

  const groups = [
    <Group id={1} text={'Football Team'} newMessageCount={25} />,
    <Group id={2} text={'Family'} newMessageCount={3} />,
    <Group id={3} text={'School'} newMessageCount={13} />,
    <Group id={4} text={'Business'} newMessageCount={0} />,
  ];

  const sortedConversations = () => {
    return CONVERSATIONS.sort((conversationA, conversationB) => {
      // @ts-ignore
      return (new Date(conversationB.last_seen_at)) - (new Date(conversationA.last_seen_at))
    });
  }

  const handleSearch = (searchTerm: string) => {
    const searchResult = sortedConversations()
      .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchTerm.length <= 0)
      setConversationsSearchResult(sortedConversations());
    else
      setConversationsSearchResult(searchResult);
  }

  return (
    <Layout header={'Ahmet Ruken'}>
      <S.SearchBarContainer>
        <Input
          onChange={handleSearch}
          placeholder={'search...'}
          type={'search'}
        />
        <Button onClick={() => navigate(ROUTE.CREATE_CHAT)} icon={Add} />
      </S.SearchBarContainer>
      <S.GroupsContainer>
        <S.GroupsTitle>Chatrooms</S.GroupsTitle>
        <GroupSlider groups={groups} />
      </S.GroupsContainer>
      <S.ConversationsList>
        {conversationsSearchResult?.map(conversation => (
          <ConversationItem
            key={conversation.id}
            id={conversation.id}
            name={conversation.name}
            lastMessage={conversation.message}
            date={conversation.last_seen_at}
            newMessageCount={conversation?.new_message_count}
          />
        ))}
      </S.ConversationsList>
    </Layout>
  )
}

export default Home;