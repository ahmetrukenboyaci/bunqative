import styled from 'styled-components'
import { BreakPoint } from '../../constants/BreakPoint'

const LayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 
    ${({ theme }) => theme.convertPxToVw(50)} 
    ${({ theme }) => theme.convertPxToVw(25)}
    ${({ theme }) => theme.convertPxToVw(52)};
  background-color: ${({ theme }) => theme.color.ebonyClay};
  width: ${({ theme }) => theme.convertPxToVw(375)};
  box-shadow: 
    ${({ theme }) => theme.convertPxToVw(40)}
    ${({ theme }) => theme.convertPxToVw(40)}
    ${({ theme }) => theme.convertPxToVw(100)} 
    0px rgba(24, 48, 63, 0.50);
  height: 100vh;
  overflow: hidden;
  
  @media (width > ${BreakPoint.Mobile}) {
    height: 812px;
    width: 375px;
    border-radius: ${({ theme }) => theme.convertPxToVw(40)};
  }
`

export {
  LayoutWrapper as Wrapper,
}