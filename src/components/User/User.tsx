/** Dependencies */
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/** Types */
import { UserProps } from './User.types';
import { ButtonColor } from '../Button/Button.types';

/** Constants */
import { ROUTE } from '../../constants/Routes';

/** Components */
import Button from '../Button/Button';

/** Store */
import { createConversation } from '../../store/slices/conversation.slice';

/** Hooks */
import { useAppSelector } from '../../hooks/useAppSelector';

/** Icons */
import Message from '../../assets/icons/message.svg';
import Add from '../../assets/icons/add.svg';
import Remove from '../../assets/icons/remove.svg';

/** Styles */
import * as S from './User.styled';

const User: FC<UserProps> = ({
                               id,
                               name,
                               isMessageItem = true,
                               isAdded = false,
                               onButtonClick,
                             }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isButtonClicked, setButtonClicked] = useState(false);
  const { selectedConversation } = useAppSelector(state => state.conversation);
  const { id: my_id } = useAppSelector(state => state.login);

  const handleUserClick = () => {
    if (isMessageItem) {
      const payload = {
        name: name,
        is_group: false,
        members: [id, my_id],
        last_message: '',
        last_message_date: (new Date()).toISOString(),
      };
      dispatch(createConversation(payload));

      setButtonClicked(true);
    }
    onButtonClick && onButtonClick();
  };

  useEffect(() => {
    if (isButtonClicked) {
      navigate(`${ROUTE.CONVERSATION}/${selectedConversation.id}`);
    }
  }, [selectedConversation.id]);

  return (
    <S.Wrapper>
      <S.InitialContainer>
        <S.Initial>{name[0]}</S.Initial>
      </S.InitialContainer>
      <S.NameContainer>
        <S.Name>{name}</S.Name>
      </S.NameContainer>
      <Button
        onClick={handleUserClick}
        icon={isMessageItem ? Message : (isAdded ? Remove : Add)}
        color={isAdded ? ButtonColor.green : ButtonColor.blue}
      />
    </S.Wrapper>
  );
};

export default User;