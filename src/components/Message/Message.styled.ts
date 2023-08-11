import styled, { css } from 'styled-components'
import { MessageOwnerProps } from './Message.types'

const MessageWrapper = styled.div<MessageOwnerProps>`
  position: relative;
  display: flex;
  margin: 0 0 0 ${({ isMine }) => isMine ? 'auto' : 0};
  padding: 
    ${({ theme }) => theme.convertPxToVw(9)} 
    ${({ theme }) => theme.convertPxToVw(14)};
  max-width: ${({ theme }) => theme.convertPxToVw(252)};
  width: fit-content;
  border-radius: ${({ theme }) => theme.convertPxToVw(20)};
  background-color: ${({ theme, isMine }) => isMine ? 
          theme.color.charade : 
          theme.color.brightGray};
`

const MessageText = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: "Roboto Light", serif;
  font-size: ${({ theme }) => theme.convertPxToVw(13)};
  font-weight: 300;
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;

const MessageInitial = styled.div<MessageOwnerProps>`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.convertPxToVw(24)};
  width: ${({ theme }) => theme.convertPxToVw(24)};
  background-color: ${({ theme }) => theme.color.shipCove};
  border-radius: 50%;
  ${({ theme, isMine }) =>
    isMine ?
      css`
        left: ${({ theme }) => theme.convertPxToVw(-10)};
      `
      :
      css`
        right: ${({ theme }) => theme.convertPxToVw(-10)};
      `
  }

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
`;

const MessageDate = styled.div<MessageOwnerProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  
  ${({ theme, isMine }) => 
    isMine ?
    css`
      right: calc(100% + ${theme.convertPxToVw(10)});
    ` 
    :
    css`
      left: calc(100% + ${theme.convertPxToVw(10)});
    `
  }
  
  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
`;

export {
  MessageWrapper as Wrapper,
  MessageText as Text,
  MessageInitial as Initial,
  MessageDate as Date,
}