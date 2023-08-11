/** Dependencies */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

/** Components */
import Layout from '../../components/Layout/Layout'
import User from '../../components/User/User'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

/** Hooks */
import { useAppSelector } from '../../hooks/useAppSelector'

/** Icons */
import BunqativeIcon from '../../assets/icons/bunqative.svg';

/** Store */
import { createConversation } from '../../store/slices/conversation.slice'

/** Types */
import { UserType } from '../types/types'

/** Styles */
import * as S from './CreateChatroom.styled';
import { fetchUsers } from '../../store/slices/user.slice'


const CreateChatroom = () => {
  const dispatch = useDispatch();

  const { users } = useAppSelector(state => state.user)

  const [conversationName, setConversationName] = useState<string>();
  const [selectedUsers, setSelectedUsers] = useState<UserType[]>();
  const [usersSearchResult, setUsersSearchResult] =
    useState<UserType[]>(users);

  const handleConversationNameChange = (vl: string) => {
    setConversationName(vl);
  }

  const handleUserButtonClick = (user: UserType) => {
    if (selectedUsers?.some(sUser => sUser.id === user.id))
      setSelectedUsers((current) =>
        current?.filter((sUser) => sUser.id !== user.id)
      );
    else
      setSelectedUsers([...(selectedUsers?.length ? selectedUsers : []), user])
  }

  const handleSearch = (searchTerm: string) => {
    const searchResult = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchTerm.length <= 0)
      setUsersSearchResult(users);
    else
      setUsersSearchResult(searchResult);
  }

  const handleCreateClick = () => {
    const members = selectedUsers?.map((selectedUser) => selectedUser.id)

    const payload = {
      name: conversationName,
      is_group: true,
      members: members,
      last_message: '',
      last_message_date: (new Date()).toISOString()
    };

    dispatch(createConversation(payload));
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <Layout header={'Create Chatroom'}>
      <S.FormContainer>
        <Input
          onChange={handleConversationNameChange}
          defaultValue={conversationName}
          placeholder={'Enter chatroom name'}
          label={'Chatroom Name'}
          type={'text'}
        />
        <S.FormTitle>Add friends</S.FormTitle>
        <S.SearchBarContainer>
          <Input
            onChange={handleSearch}
            placeholder={'search...'}
            type={'search'}
          />
        </S.SearchBarContainer>
      </S.FormContainer>
      <S.UsersList>
        {usersSearchResult.map(user => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            isMessageItem={false}
            isAdded={selectedUsers?.some(sUser => sUser.id === user.id)}
            onButtonClick={() => handleUserButtonClick(user)}
          />
        ))}
      </S.UsersList>
      <S.ButtonContainer>
        <Button onClick={handleCreateClick} icon={BunqativeIcon} text={'Create'} />
      </S.ButtonContainer>
    </Layout>
  )
}

export default CreateChatroom;