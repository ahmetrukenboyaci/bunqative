import styled from 'styled-components';
import { ConversationHeaderInitialProps, ConversationHeaderIsGroup } from './ConversationHeader.types';

const ConversationHeaderWrapper = styled.div<ConversationHeaderIsGroup>`
  position: relative;
  display: flex;
  justify-content: ${({ isGroup }) => isGroup ? 'center' : 'flex-star'};
  align-items: center;
  height: ${({ theme, isGroup }) => theme.convertPxToVw(isGroup ? 50 : 45)};
  gap: ${({ theme, isGroup }) => theme.convertPxToVw(isGroup ? 5 : 10)};
  width: 100%;
  padding-bottom: ${({ theme }) => theme.convertPxToVw(10)};
  border-bottom: ${({ theme }) => theme.convertPxToVw(1)} solid ${({ theme }) => theme.color.silver};
`;
const ConversationHeaderLogo = styled.img<ConversationHeaderIsGroup>`
  position: relative;
  height: ${({ theme, isGroup }) => theme.convertPxToVw(isGroup ? 40 : 45)};
  width: ${({ theme, isGroup }) => theme.convertPxToVw(isGroup ? 40 : 45)};
  box-shadow: ${({ theme }) => theme.convertPxToVw(4)} ${({ theme }) => theme.convertPxToVw(4)} ${({ theme }) => theme.convertPxToVw(24)} 0 rgba(0, 0, 0, 0.45);
  cursor: pointer;
`;

const ConversationHeaderUserName = styled.div`
  position: absolute;
  bottom: 50%;
  right: 0;
  transform: translateY(50%);

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;

const ConversationHeaderInitial = styled.div<ConversationHeaderInitialProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme, isGroup }) => theme.convertPxToVw(isGroup ? 40 : 45)};
  width: ${({ theme, isGroup }) => theme.convertPxToVw(isGroup ? 40 : 45)};
  background-color: ${({ theme }) => theme.color.shipCove};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.convertPxToVw(4)} ${({ theme }) => theme.convertPxToVw(4)} ${({ theme }) => theme.convertPxToVw(24)} 0 rgba(0, 0, 0, 0.45);

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  cursor: pointer;
  text-transform: uppercase;

  &:nth-child(2n) {
    margin-top: ${({ theme, isGroup }) => theme.convertPxToVw(isGroup ? 10 : 0)};
  }

  &:hover {
    &:before {
      content: attr(text);
      position: absolute;
      top: calc(100% + ${({ theme }) => theme.convertPxToVw(4)});
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      padding: ${({ theme }) => theme.convertPxToVw(6)};
      background-color: ${({ theme }) => theme.color.charade};
      border-radius: ${({ theme }) => theme.convertPxToVw(4)};

      font-size: ${({ theme }) => theme.convertPxToVw(12)};
      text-transform: capitalize;
    }
  }
`;

export {
  ConversationHeaderWrapper as Wrapper,
  ConversationHeaderInitial as Initial,
  ConversationHeaderLogo as Logo,
  ConversationHeaderUserName as UserName,
};