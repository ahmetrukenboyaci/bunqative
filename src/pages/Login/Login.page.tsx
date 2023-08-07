/** Dependencies */
import React from 'react';

/** Components */
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

/** Icons */
import BunqativeIcon from '../../assets/icons/bunqative.svg';

/** Images */
import Logo from '../../assets/images/svg/logo-large.svg'

/** Styles */
import * as S from './Login.styled';

const Login = () => {
  return (
    <Layout header={'Login'}>
      <S.Logo src={Logo} alt={'logo'} />
      <S.FormContainer>
        <Input
          onChange={() => console.log('')}
          onEnter={() => console.log('')}
          placeholder={'Enter your username'}
          label={'Username'}
          type={'text'}
        />
        <Input
          onChange={() => console.log('')}
          onEnter={() => console.log('')}
          placeholder={'Enter your password'}
          label={'Password'}
          type={'password'}
        />
      </S.FormContainer>
      <S.ButtonContainer>
        <Button onClick={() => console.log()} icon={BunqativeIcon} text={'Login'} />
      </S.ButtonContainer>
    </Layout>
  )
}

export default Login;