/** Dependencies */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

/** Constants */
import { ROUTE } from '../../constants/Routes';
import { useDispatch } from 'react-redux';

/** Components */
import Layout from '../../components/Layout/Layout';
import User from '../../components/User/User';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import GroupSlider from '../../components/GroupSlider/GroupSlider';

/** Utils */
import { fetchUsers } from '../../store/slices/user.slice';
import { fetchConversations } from '../../store/slices/conversation.slice';

/** Hooks */
import { useAppSelector } from '../../hooks/useAppSelector';

/** Icons */
import Users from '../../assets/icons/group.svg';

/** Types */
import { UserType } from '../types/types';

/** Styles */
import * as S from './CreateChat.styled';

const CreateChat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { groups } = useAppSelector(state => state.conversation);
  const { users } = useAppSelector(state => state.user);

  const [usersSearchResult, setUsersSearchResult] =
    useState<UserType[]>();

  const handleSearch = (searchTerm: string) => {
    const searchResult = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchTerm.length <= 0)
      setUsersSearchResult(users);
    else
      setUsersSearchResult(searchResult);
  }

  const handleUsersButtonClick = () => {
    navigate(ROUTE.CREATE_GROUP);
  }

  useEffect(() => {
    toast.info("Wait until your friends come!", {
      toastId: 'toast_id'
    });

    dispatch(fetchConversations())
    dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    handleSearch('');
  }, [users]);

  return (
    <Layout header={'Ahmet Ruken'}>
      <S.SearchBarContainer>
        <Input
          onChange={handleSearch}
          placeholder={'search...'}
          type={'search'}
        />
        <Button onClick={handleUsersButtonClick} icon={Users} />
      </S.SearchBarContainer>
      <S.GroupsContainer>
        <S.GroupsTitle>Chatrooms</S.GroupsTitle>
        <GroupSlider groups={groups} />
      </S.GroupsContainer>
      <S.UsersList>
        {usersSearchResult?.length && usersSearchResult.map(user => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
          />
        ))}
      </S.UsersList>
    </Layout>
  )
}

export default CreateChat;