import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ConversationItemWrapper = styled(Link)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${({ theme }) => theme.convertPxToVw(45)};
  width: 100%;
`

const ConversationItemInitialContainer = styled.div`
  position: relative;
  height: 100%;
  width: ${({ theme }) => theme.convertPxToVw(54)};
`;

const ConversationItemInitial = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.convertPxToVw(34)};
  width: ${({ theme }) => theme.convertPxToVw(34)};
  background-color: ${({ theme }) => theme.color.shipCove};
  border-radius: 50%;

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: uppercase;
`;

const ConversationItemLastMessageContainer = styled.div`
  position: relative;
  margin-left: ${({ theme }) => theme.convertPxToVw(16)};
  width: calc(100% - ${({ theme }) => theme.convertPxToVw(120)});
`;

const ConversationItemUserName = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;

const ConversationItemLastMessage = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: "Roboto Light", serif;
  font-size: ${({ theme }) => theme.convertPxToVw(13)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 300;
`;

const ConversationItemDate = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;


export {
  ConversationItemWrapper as Wrapper,
  ConversationItemInitialContainer as InitialContainer,
  ConversationItemInitial as Initial,
  ConversationItemLastMessageContainer as LastMessageContainer,
  ConversationItemUserName as UserName,
  ConversationItemLastMessage as LastMessage,
  ConversationItemDate as Date,
}