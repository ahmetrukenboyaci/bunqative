import styled from 'styled-components';

const CreateChatSearchBarContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.convertPxToVw(15)};
  margin-top: ${({ theme }) => theme.convertPxToVw(15)};
`

const CreateChatGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.convertPxToVw(12)};
`;

const CreateChatGroupsTitle = styled.div`
  padding-left: ${({ theme }) => theme.convertPxToVw(10)};

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(20)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;

const CreateChatUsersList = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.convertPxToVw(25)};
  gap: ${({ theme }) => theme.convertPxToVw(25)};
  overflow: scroll;
  border: ${({ theme }) => theme.convertPxToVw(1)} solid ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.convertPxToVw(20)};
  padding: ${({ theme }) => theme.convertPxToVw(10)};
`;

export {
  CreateChatSearchBarContainer as SearchBarContainer,
  CreateChatGroupsContainer as GroupsContainer,
  CreateChatGroupsTitle as GroupsTitle,
  CreateChatUsersList as UsersList,

}