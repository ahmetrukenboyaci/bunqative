import styled from 'styled-components'

const PageHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${({ theme }) => theme.convertPxToVw(45)};
  width: 100%;
  padding-bottom: ${({ theme }) => theme.convertPxToVw(10)};
`

const PageHeaderLogo = styled.img`
  position: relative;
  height: ${({ theme }) => theme.convertPxToVw(45)};
  width: ${({ theme }) => theme.convertPxToVw(45)};
  cursor: pointer;
  box-shadow: ${({ theme }) => 
    theme.convertPxToVw(20)}
    ${({ theme }) => theme.convertPxToVw(24)}
    ${({ theme }) => theme.convertPxToVw(34)} 
    0 rgba(0, 0, 0, 0.45);
`;

const PageHeaderNameContainer = styled.div`
  position: relative;
  margin-left: ${({ theme }) => theme.convertPxToVw(13)};
  width: calc(100% - ${({ theme }) => theme.convertPxToVw(58)});
`;

const PageHeaderName = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(20)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`;


export {
  PageHeaderWrapper as Wrapper,
  PageHeaderNameContainer as NameContainer,
  PageHeaderName as Name,
  PageHeaderLogo as Logo,
}