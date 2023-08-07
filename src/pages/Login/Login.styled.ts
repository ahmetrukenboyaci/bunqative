import styled from 'styled-components'

const LoginLogo = styled.img`
  position: relative;
  width: ${({ theme }) => theme.convertPxToVw(150)};
  margin: ${({ theme }) => theme.convertPxToVw(28)} auto 0;
  filter: drop-shadow(
          ${({ theme }) => theme.convertPxToVw(4)} 
          ${({ theme }) => theme.convertPxToVw(4)}
          ${({ theme }) => theme.convertPxToVw(24)} 
          rgba(0, 0, 0, 0.45));
`

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.convertPxToVw(32)};
  gap: ${({ theme }) => theme.convertPxToVw(19)};
`;

const LoginButtonContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.convertPxToVw(52)};
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export {
  LoginLogo as Logo,
  LoginFormContainer as FormContainer,
  LoginButtonContainer as ButtonContainer,
}