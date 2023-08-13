/** Dependencies */
import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';

/** Icons */
import Search from '../../assets/icons/search.svg';
import Message from '../../assets/icons/message.svg';

/** Types */
import { InputProps } from './Input.types';

/** Styles */
import * as S from './Input.styled';

const Input: FC<InputProps> = ({
                                 onChange,
                                 onEnter,
                                 defaultValue,
                                 placeholder,
                                 type = 'text',
                                 label,
                               }) => {
  const [isIconActive, setIconActive] = useState(false);

  const iconSrc = type === 'search' ? Search : Message;

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      onEnter && onEnter();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIconActive(event.target.value.length > 0);
    onChange(event.target.value);
  };

  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Container>
        <S.Text
          type={type}
          value={defaultValue}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        {['search', 'message'].some(t => t === type) && (
          <S.Icon
            isActive={isIconActive}
            src={iconSrc}
            alt={'input'}
          />
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Input;