import styled from 'styled-components'

const CreateChatroomSearchBarContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.convertPxToVw(15)};
  margin-top: ${({ theme }) => theme.convertPxToVw(12)};
`

const CreateChatroomFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.convertPxToVw(10)};
`;

const CreateChatroomFormTitle = styled.div`
  padding-left: ${({ theme }) => theme.convertPxToVw(10)};
  margin-top: ${({ theme }) => theme.convertPxToVw(10)};

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(16)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;

const CreateChatroomUsersList = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  height: 100%;
  margin-top: ${({ theme }) => theme.convertPxToVw(25)};
  margin-bottom: ${({ theme }) => theme.convertPxToVw(25)};
  gap: ${({ theme }) => theme.convertPxToVw(25)};
  overflow: scroll;
  border: ${({ theme }) => theme.convertPxToVw(1)} solid ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.convertPxToVw(20)};
  padding: ${({ theme }) => theme.convertPxToVw(10)} ${({ theme }) => theme.convertPxToVw(10)} 0;
`;

const CreateChatroomButtonContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.convertPxToVw(22)};
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export {
  CreateChatroomSearchBarContainer as SearchBarContainer,
  CreateChatroomFormContainer as FormContainer,
  CreateChatroomFormTitle as FormTitle,
  CreateChatroomUsersList as UsersList,
  CreateChatroomButtonContainer as ButtonContainer,
}