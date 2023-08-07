import styled from 'styled-components'

import * as ButtonS from '../Button/Button.styled';

const UserWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${({ theme }) => theme.convertPxToVw(45)};
  width: 100%;
  
  ${ButtonS.Wrapper} {
    position: absolute;
    right: 0;
  }
`

const UserInitialContainer = styled.div`
  position: relative;
  height: 100%;
  width: ${({ theme }) => theme.convertPxToVw(54)};
`;

const UserInitial = styled.div`
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.convertPxToVw(45)};
  width: ${({ theme }) => theme.convertPxToVw(45)};
  background-color: ${({ theme }) => theme.color.shipCove};
  border-radius: 50%;

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: uppercase;
`;

const UserNameContainer = styled.div`
  position: relative;
  margin-left: ${({ theme }) => theme.convertPxToVw(13)};
  width: calc(100% - ${({ theme }) => theme.convertPxToVw(120)});
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(18)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;


export {
  UserWrapper as Wrapper,
  UserInitialContainer as InitialContainer,
  UserInitial as Initial,
  UserNameContainer as NameContainer,
  UserName as Name,
}