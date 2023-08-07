import styled from 'styled-components'
import { BreakPoint } from '../../constants/BreakPoint'

const ChatBoxFormContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.convertPxToVw(52)};
  width: calc(100% - ${({ theme }) => theme.convertPxToVw(50)});
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.convertPxToVw(19)};
  background-color: ${({ theme }) => theme.color.ebonyClay};
`;

const ChatBoxMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.convertPxToVw(32)};
  gap: ${({ theme }) => theme.convertPxToVw(19)};
  overflow: scroll;
  
     height: calc(100% - ${({ theme }) => theme.convertPxToVw(75)});
  @media (width >= ${BreakPoint.Mobile}) {
     height: calc(100% - ${({ theme }) => theme.convertPxToVw(60)});
  }
`;

export {
  ChatBoxFormContainer as FormContainer,
  ChatBoxMessagesContainer as MessagesContainer,
}