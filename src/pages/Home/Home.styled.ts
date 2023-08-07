import styled from 'styled-components'

const HomeSearchBarContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.convertPxToVw(15)};
  margin-top: ${({ theme }) => theme.convertPxToVw(15)};
`

const HomeGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.convertPxToVw(12)};
`;

const HomeGroupsTitle = styled.div`
  padding-left: ${({ theme }) => theme.convertPxToVw(10)};

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(20)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;

const HomeConversationsList = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.convertPxToVw(25)};
  gap: ${({ theme }) => theme.convertPxToVw(25)};
  overflow: scroll;
  border: ${({ theme }) => theme.convertPxToVw(1)} solid ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.convertPxToVw(20)};
  padding: ${({ theme }) => theme.convertPxToVw(10)};
`;

export {
  HomeSearchBarContainer as SearchBarContainer,
  HomeGroupsContainer as GroupsContainer,
  HomeGroupsTitle as GroupsTitle,
  HomeConversationsList as ConversationsList,
}