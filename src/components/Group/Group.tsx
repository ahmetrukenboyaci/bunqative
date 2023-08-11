/** Dependencies */
import React, { FC, MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'

/** Types */
import { GroupProps } from './Group.types'

/** Icons */
import Close from '../../assets/icons/close.svg';

/** Constants */
import { ROUTE } from '../../constants/Routes'

/** Styles */
import * as S from './Group.styled';

const Group: FC<GroupProps> = ({
  id,
  name,
  editable = false
}) => {
  const navigate = useNavigate();

  const handleRemoveClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // remove
  };

  const handleGroupClick = () => {
    navigate(`${ROUTE.CONVERSATION}/${id}`)
  }

  return (
    <S.Wrapper onClick={handleGroupClick}>
      {editable && (
        <S.RemoveIcon onClick={handleRemoveClick}>
          <img src={Close} alt={'close'} />
        </S.RemoveIcon>
      )}
      <S.Text>{name}</S.Text>
    </S.Wrapper>
  )
}

export default Group