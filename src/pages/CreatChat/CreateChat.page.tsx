/** Dependencies */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/** Constants */
import { ROUTE } from '../../constants/Routes'
import { CONVERSATIONS, USERS } from '../../constants/MockData'

/** Components */
import Layout from '../../components/Layout/Layout'
import User from '../../components/User/User'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import GroupSlider from '../../components/GroupSlider/GroupSlider'
import Group from '../../components/Group/Group'

/** Icons */
import Users from '../../assets/icons/group.svg';

/** Types */
import { UserType } from '../types/types'

/** Styles */
import * as S from './CreateChat.styled';

const CreateChat = () => {
  const navigate = useNavigate();

  const [usersSearchResult, setUsersSearchResult] =
    useState<UserType[]>(USERS);

  const groups = [
    <Group id={1} text={'Football Team'} newMessageCount={25} editable />,
    <Group id={2} text={'Family'} newMessageCount={3} editable />,
    <Group id={3} text={'School'} newMessageCount={13} editable />,
    <Group id={4} text={'Business'} newMessageCount={0} editable />,
  ];

  const handleSearch = (searchTerm: string) => {
    const searchResult = USERS
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchTerm.length <= 0)
      setUsersSearchResult(USERS);
    else
      setUsersSearchResult(searchResult);
  }

  const handleUsersButtonClick = () => {
    navigate(ROUTE.CREATE_GROUP);
  }

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
        {usersSearchResult.map(user => (
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