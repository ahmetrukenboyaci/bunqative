/** Dependencies */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

/** Constants */
import { ROUTE } from '../../constants/Routes';

/** Components */
import Layout from '../../components/Layout/Layout';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import GroupSlider from '../../components/GroupSlider/GroupSlider';
import ConversationItem from '../../components/ConversationItem/ConversationItem';

/** Icons */
import Add from '../../assets/icons/add.svg';

/** Store */
import { fetchConversations } from '../../store/slices/conversation.slice';
import { useAppSelector } from '../../hooks/useAppSelector';

/** Types */
import { ConversationType } from '../types/types';

/** Styles */
import * as S from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { conversations, groups } = useAppSelector(state => state.conversation);

  const [conversationsSearchResult, setConversationsSearchResult] =
    useState<ConversationType[]>();

  const sortedConversations = () => {
    if (conversations?.length > 1)
      return [...conversations].sort((conversationA, conversationB) => {
        // @ts-ignore
        return (new Date(conversationB.last_message_date)) - (new Date(conversationA.last_message_date));
      });
    return conversations;
  };

  const handleSearch = (searchTerm: string) => {
    const searchResult = sortedConversations()
    ?.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    if (searchTerm.length <= 0)
      setConversationsSearchResult(sortedConversations());
    else
      setConversationsSearchResult(searchResult);
  };

  useEffect(() => {
    dispatch(fetchConversations());
  }, []);

  useEffect(() => {
    handleSearch('');
  }, [conversations]);

  return (
    <Layout header={'Ahmet Ruken'}>
      <S.SearchBarContainer>
        <Input
          onChange={handleSearch}
          placeholder={'search...'}
          type={'search'}
        />
        <Button onClick={() => navigate(ROUTE.CREATE_CHAT)} icon={Add}/>
      </S.SearchBarContainer>
      <S.GroupsContainer>
        <S.GroupsTitle>Chatrooms</S.GroupsTitle>
        <GroupSlider groups={groups}/>
      </S.GroupsContainer>
      <S.ConversationsList>
        {conversationsSearchResult?.map(conversation => (
          <ConversationItem
            key={conversation.id}
            id={conversation.id}
            name={conversation.name}
            lastMessage={conversation.last_message}
            date={conversation.last_message_date}
          />
        ))}
      </S.ConversationsList>
    </Layout>
  );
};

export default Home;