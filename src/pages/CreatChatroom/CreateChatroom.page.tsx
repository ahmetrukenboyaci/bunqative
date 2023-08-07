/** Dependencies */
import React, { useState } from 'react'

/** Components */
import Layout from '../../components/Layout/Layout'
import User from '../../components/User/User'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

/** Icons */
import BunqativeIcon from '../../assets/icons/bunqative.svg';

/** Constants */
import { USERS } from '../../constants/MockData'

/** Types */
import { UserType } from '../types/types'

/** Styles */
import * as S from './CreateChatroom.styled';


const CreateChatroom = () => {
  const [selectedUsers, setSelectedUsers] = useState<UserType[]>();
  const [usersSearchResult, setUsersSearchResult] =
    useState<UserType[]>(USERS);

  const handleUserButtonClick = (user: UserType) => {
    if (selectedUsers?.some(sUser => sUser.id === user.id))
      setSelectedUsers((current) =>
        current?.filter((sUser) => sUser.id !== user.id)
      );
    else
      setSelectedUsers([...(selectedUsers?.length ? selectedUsers : []), user])
  }

  const handleSearch = (searchTerm: string) => {
    const searchResult = USERS
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchTerm.length <= 0)
      setUsersSearchResult(USERS);
    else
      setUsersSearchResult(searchResult);
  }

  return (
    <Layout header={'Create Chatroom'}>
      <S.FormContainer>
        <Input
          onChange={() => console.log('')}
          onEnter={() => console.log('')}
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
        <Button onClick={() => console.log()} icon={BunqativeIcon} text={'Create'} />
      </S.ButtonContainer>
    </Layout>
  )
}

export default CreateChatroom;