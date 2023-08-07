import styled from 'styled-components'
import { InputIconProps } from './Input.types'

const InputWrapper = styled.div`
  width: 100%;
`

const InputLabel = styled.div`
  margin-bottom: ${({ theme }) => theme.convertPxToVw(10)};
  padding-left: ${({ theme }) => theme.convertPxToVw(10)};

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(16)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.blackLowOpacity};
  height: ${({ theme }) => theme.convertPxToVw(40)};
  padding: ${({ theme }) => theme.convertPxToVw(11)};
  border-radius: ${({ theme }) => theme.convertPxToVw(10)};
`

const InputText = styled.input`
  height: 100%;
  width: calc(100% - ${({ theme }) => theme.convertPxToVw(29)});
  background-color: transparent;
  outline: none;
  border: none;

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(14)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
`

const InputIcon = styled.img<InputIconProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  height: ${({ theme }) => theme.convertPxToVw(40)};
  width: ${({ theme }) => theme.convertPxToVw(40)};
  padding: ${({ theme }) => theme.convertPxToVw(10)};
  border-radius: ${({ theme }) => theme.convertPxToVw(10)};
  background-color: ${({ theme, isActive }) => 
          isActive ? theme.color.bayLeaf : theme.color.shuttleGray};
`

export {
  InputWrapper as Wrapper,
  InputContainer as Container,
  InputText as Text,
  InputLabel as Label,
  InputIcon as Icon,
}