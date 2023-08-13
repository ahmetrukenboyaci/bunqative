/** Dependencies */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/** Components */
import Layout from '../../components/Layout/Layout';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

/** Icons */
import BunqativeIcon from '../../assets/icons/bunqative.svg';

/** Images */
import Logo from '../../assets/images/svg/logo-large.svg';

/** Constants */
import { ROUTE } from '../../constants/Routes';

/** Store */
import { login } from '../../store/slices/login.slice';

/** Styles */
import * as S from './Login.styled';
import { useAppSelector } from '../../hooks/useAppSelector';

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { id: my_id } = useAppSelector(state => state.login);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = async () => {
    const payload = {
      name: username,
      password,
    };

    navigate(ROUTE.ROOT);

    dispatch(login(payload));
  };

  useEffect(() => {
    if (!!my_id) {
      navigate(ROUTE.ROOT);
    }
  }, [my_id]);

  return (
    <Layout header={'Login'}>
      <S.Logo src={Logo} alt={'logo'}/>
      <S.FormContainer>
        <Input
          onChange={handleUsernameChange}
          onEnter={() => console.log('')}
          placeholder={'Enter your username'}
          label={'Username'}
          defaultValue={username}
          type={'text'}
        />
        <Input
          onChange={handlePasswordChange}
          onEnter={() => console.log('')}
          placeholder={'Enter your password'}
          label={'Password'}
          defaultValue={password}
          type={'password'}
        />
      </S.FormContainer>
      <S.ButtonContainer>
        <Button onClick={handleSubmit} icon={BunqativeIcon} text={'Login'}/>
      </S.ButtonContainer>
    </Layout>
  );
};

export default Login;