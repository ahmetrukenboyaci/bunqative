/** Dependencies */
import React, { useCallback, useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

/** Components */
import Layout from '../../components/Layout/Layout';
import Input from '../../components/Input/Input';
import Message from '../../components/Message/Message';

/** Types */
import { MessageType } from '../types/types';

/** Hooks */
import { useAppSelector } from '../../hooks/useAppSelector';

/** Store */
import { fetchConversation } from '../../store/slices/conversation.slice';
import { createMessageSuccess, fetchMessages } from '../../store/slices/message.slice';

/** Styles */
import * as S from './ChatBox.styled';

const ChatBox = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedConversation } = useAppSelector(state => state.conversation);
  const { messages } = useAppSelector(state => state.message);
  const { id: my_id } = useAppSelector(state => state.login);

  const [messageText, setMessageText] = useState<string>();

  const {
    sendJsonMessage,
    lastJsonMessage,
  } = useWebSocket(process.env.REACT_APP_SOCKET_URL || '', {
    onOpen: () => console.log('opened'),
    shouldReconnect: () => true,
  });

  const handleMessaging = (vl: string) => {
    setMessageText(vl);
  };

  const handleSendMessage = useCallback(() => {
    const payload = {
      conversation_id: id,
      owner_id: my_id,
      text: messageText,
      sent_at: (new Date()).toISOString(),
    };

    selectedConversation && id && sendJsonMessage(payload);
    setMessageText('');
  }, [id, messageText, my_id, selectedConversation, sendJsonMessage]);

  useEffect(() => {
    dispatch(fetchConversation({ id }));
    dispatch(fetchMessages({ id }));
  }, []);

  useEffect(() => {
    dispatch(createMessageSuccess(Object.values(lastJsonMessage || {})));
  }, [dispatch, lastJsonMessage]);

  return (
    <Layout isConversation users={selectedConversation.members}>
      <S.MessagesContainer id={'message-container'}>
        {messages?.length > 0 && messages.map((message: MessageType) => (
          <Message
            key={message.id}
            text={message.text}
            owner={message?.owner_id}
            isMine={message.owner_id === my_id}
            date={message.sent_at}
            isInGroup={selectedConversation?.is_group}
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
  );
};

export default ChatBox;