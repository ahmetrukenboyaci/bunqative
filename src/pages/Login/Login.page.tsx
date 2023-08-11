/** Dependencies */
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

/** Components */
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

/** Icons */
import BunqativeIcon from '../../assets/icons/bunqative.svg';

/** Images */
import Logo from '../../assets/images/svg/logo-large.svg'

/** Utils */
import { request } from '../../utilities/request'

/** constants */
import { ENDPOINT } from '../../constants/Endpoints'
import * as types from '../../constants/methodTypes';

/** Styles */
import * as S from './Login.styled';
import { useNavigate } from 'react-router-dom'
import { ROUTE } from '../../constants/Routes'
import { toast } from 'react-toastify'

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigate = useNavigate();

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  }

  const handleSubmit = async () => {
    toast.info("Wait until the gates are open!", {
      toastId: 'toast_id'
    });

    const payload = {
      username,
      password
    }

    navigate(ROUTE.ROOT);

    request({
      url: ENDPOINT.LOGIN,
      data: payload,
      methodType: types.POST
    })?.then(response => {
      Cookies.set('jwt', response.data.token);

      toast.dismiss('toast_id');
      toast.success("The gates are successfully opened!");

      navigate(ROUTE.ROOT);
      window.location.reload();
    }).catch(() => {
      toast.dismiss('toast_id');
      toast.error("Who are you stranger!");
    });
  }

  useEffect(() => {
    if(!!Cookies.get('jwt')) {
      navigate(ROUTE.ROOT);
    }
  }, []);

  return (
    <Layout header={'Login'}>
      <S.Logo src={Logo} alt={'logo'} />
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
        <Button onClick={handleSubmit} icon={BunqativeIcon} text={'Login'} />
      </S.ButtonContainer>
    </Layout>
  )
}

export default Login;