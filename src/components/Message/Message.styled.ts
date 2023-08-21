import styled, { css } from 'styled-components';
import { MessageOwnerProps, InitialProps } from './Message.types';

const MessageWrapper = styled.div<MessageOwnerProps>`
  position: relative;
  display: flex;
  margin: 0 0 0 ${({ isMine }) => isMine ? 'auto' : 0};
  padding: ${({ theme }) => theme.convertPxToVw(9)} ${({ theme }) => theme.convertPxToVw(14)};
  max-width: ${({ theme }) => theme.convertPxToVw(252)};
  width: fit-content;
  border-radius: ${({ theme }) => theme.convertPxToVw(20)};
  background-color: ${({ theme, isMine }) => isMine ?
          theme.color.charade :
          theme.color.brightGray};
`;

const MessageText = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: "Roboto Light", serif;
  font-size: ${({ theme }) => theme.convertPxToVw(13)};
  font-weight: 300;
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
`;

const MessageInitial = styled.div<InitialProps>`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${({ theme }) => theme.convertPxToVw(-10)};
  height: ${({ theme }) => theme.convertPxToVw(24)};
  width: ${({ theme }) => theme.convertPxToVw(24)};
  background-color: ${({ theme }) => theme.color.shipCove};
  border-radius: 50%;
  cursor: pointer;

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: uppercase;

  &:hover {
    &:before {
      content: attr(text);
      position: absolute;
      top: 0;
      left: calc(100% + ${({ theme }) => theme.convertPxToVw(4)});
      z-index: 1;
      padding: ${({ theme }) => theme.convertPxToVw(6)};
      background-color: ${({ theme }) => theme.color.charade};
      border-radius: ${({ theme }) => theme.convertPxToVw(4)};

      font-size: ${({ theme }) => theme.convertPxToVw(12)};
      text-transform: capitalize;
    }
  }
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
};