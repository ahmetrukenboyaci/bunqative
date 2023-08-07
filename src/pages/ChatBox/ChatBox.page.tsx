/** Dependencies */
import React from 'react';

/** Components */
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import Message from '../../components/Message/Message'

/** Styles */
import * as S from './ChatBox.styled';

const ChatBox = () => {
  const my_id = 1;

  const messages = [
    {
      "id": 27,
      "user_id": 1,
      "user_name": "Ahmet Ruken",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:51.000000Z"
    },
    {
      "id": 26,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:50.000000Z"
    },
    {
      "id": 25,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:50.000000Z"
    },
    {
      "id": 24,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:49.000000Z"
    },
    {
      "id": 23,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:47.000000Z"
    },
    {
      "id": 22,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:47.000000Z"
    },
    {
      "id": 21,
      "user_id": 1,
      "user_name": "Ahmet Ruken",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:46.000000Z"
    },
    {
      "id": 20,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:46.000000Z"
    },
    {
      "id": 19,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:45.000000Z"
    },
    {
      "id": 18,
      "user_id": 1,
      "user_name": "Ahmet Ruken",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:45.000000Z"
    },
    {
      "id": 17,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:44.000000Z"
    },
    {
      "id": 16,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:44.000000Z"
    },
    {
      "id": 15,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:44.000000Z"
    },
    {
      "id": 14,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:43.000000Z"
    },
    {
      "id": 13,
      "user_id": 9,
      "user_name": "wessel",
      "text": "Hello, World!",
      "sent_at": "2021-07-21T08:08:43.000000Z"
    }
  ];

  const userNamesOtherThanMe = messages.filter(message => message.user_id !== my_id);
  const userNames: string[] = userNamesOtherThanMe.map(message => message.user_name);
  const users: string[] = Array.from(new Set(userNames));

  return (
    <Layout isConversation users={users}>
      <S.MessagesContainer>
        {messages.map(message => (
          <Message
            key={message.id}
            text={message.text}
            owner={message.user_name}
            isMine={message.user_id === my_id}
            date={message.sent_at}
          />
        ))}
      </S.MessagesContainer>
      <S.FormContainer>
        <Input
          onChange={() => console.log('')}
          onEnter={() => console.log('')}
          placeholder={'Write'}
          type={'message'}
        />
      </S.FormContainer>
    </Layout>
  )
}

export default ChatBox;