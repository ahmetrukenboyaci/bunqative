import styled from 'styled-components'

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.convertPxToVw(40)};
  min-width: ${({ theme }) => theme.convertPxToVw(40)};
  background-color: ${({ theme, color }) => color === 'blue' ? 
          theme.color.shipCove : theme.color.bayLeaf};
  border-radius: ${({ theme }) => theme.convertPxToVw(10)};
  border: none;
  padding: ${({ theme }) => theme.convertPxToVw(10)};
  
  &:hover {
    filter: brightness(1.2);
  }
  
  &:active {
    filter: brightness(1);
  }
`

const ButtonText = styled.div`
  background-color: transparent;

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(15)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  margin-left: ${({ theme }) => theme.convertPxToVw(12.8)};
  text-transform: uppercase;
`

const ButtonIcon = styled.img`
  width: ${({ theme }) => theme.convertPxToVw(20)};
`

export {
  ButtonWrapper as Wrapper,
  ButtonText as Text,
  ButtonIcon as Icon,
}