/** Dependencies */
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

/** Types */
import { UserProps } from './User.types'
import { ButtonColor } from '../Button/Button.types'

/** Constants */
import { ROUTE } from '../../constants/Routes'
import { ENDPOINT } from '../../constants/Endpoints'
import * as types from '../../constants/methodTypes'

/** Components */
import Button from '../Button/Button'

/** Utils */
import { request } from '../../utilities/request'
import { getMyId } from '../../utilities/function'


/** Icons */
import Message from '../../assets/icons/message.svg'
import Add from '../../assets/icons/add.svg'
import Remove from '../../assets/icons/remove.svg'

/** Styles */
import * as S from './User.styled'

const User: FC<UserProps> = ({
  id,
  name,
  isMessageItem = true,
  isAdded = false,
  onButtonClick
}) => {
  const my_id = getMyId();
  const navigate = useNavigate();

  const createConversation = () => {
    const payload = {
      user_ids: [id]
    };

    request({
      url: ENDPOINT.CONVERSATION(my_id),
      methodType: types.POST,
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt')}`
      }
    })?.then(response => {
      navigate(`${ROUTE.CONVERSATION}/${response.data.id}`);
    }).catch(() => {
      toast.error("Woops I think I have done something wrong! :(");
    });
  }

  const handleClick = () => {
    isMessageItem && createConversation();
    onButtonClick && onButtonClick();
  }

  return (
    <S.Wrapper>
      <S.InitialContainer>
        <S.Initial>{name[0]}</S.Initial>
      </S.InitialContainer>
      <S.NameContainer>
        <S.Name>{name}</S.Name>
      </S.NameContainer>
      <Button
        onClick={handleClick}
        icon={isMessageItem ? Message : (isAdded ? Remove : Add)}
        color={isAdded ? ButtonColor.green : ButtonColor.blue}
      />
    </S.Wrapper>
  )
}

export default User;