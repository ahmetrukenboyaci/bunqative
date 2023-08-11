/** Dependencies */
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

/** Components */
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import Message from '../../components/Message/Message'

/** Types */
import { MessageType } from '../types/types'

/** Utils */
import { getMyId } from '../../utilities/function'
import { request } from '../../utilities/request'

/** Hooks */
import { useAppSelector } from '../../hooks/useAppSelector'

/** Store */
import { fetchConversation } from '../../store/slices/conversation.slice'
import { createMessage, fetchMessages } from '../../store/slices/message.slice'

/** Constants */
import { ENDPOINT } from '../../constants/Endpoints'
import * as types from '../../constants/methodTypes'

/** Styles */
import * as S from './ChatBox.styled';

const ChatBox = () => {
  const my_id = getMyId();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedConversation } = useAppSelector(state => state.conversation);
  const { messages } = useAppSelector(state => state.message);

  const [userNames, setUserNames] = useState<number[]>([]);
  const [messageText, setMessageText] = useState<string>();

  const handleMessaging = (vl: string) => {
    setMessageText(vl);
  }

  const handleSendMessage = () => {
    selectedConversation && id && dispatch(createMessage({
      conversation_id: id,
      owner_id: my_id,
      text: messageText,
      sent_at: (new Date()).toISOString()
    }))
  }

  useEffect(() => {
    toast.info("Wait until your messages come!", {
      toastId: 'toast_id'
    });
    dispatch(fetchConversation({ id }));
    dispatch(fetchMessages({ id }));
  }, []);

  useEffect(() => {
    setUserNames(selectedConversation?.members?.map((member: number) => member) || [])
  }, [selectedConversation])

  return (
    <Layout isConversation users={userNames}>
      <S.MessagesContainer>
        {messages?.length > 0 && messages.map((message: MessageType) => (
          <Message
            key={message.id}
            text={message.text}
            owner={message?.owner_id}
            isMine={message.owner_id === my_id}
            date={message.sent_at}
            isInGroup={!!selectedConversation?.members?.length && selectedConversation.members.length > 1}
          />
        ))}
      </S.MessagesContainer>
      <S.FormContainer>
        <Input
          onChange={handleMessaging}
          onEnter={handleSendMessage}
          defaultValue={messageText}
          placeholder={'Write'}
          type={'message'}
        />
      </S.FormContainer>
    </Layout>
  )
}

export default ChatBox;