import styled from 'styled-components'

const GroupWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.convertPxToVw(95)};
  height: ${({ theme }) => theme.convertPxToVw(140)};
  border-radius: ${({ theme }) => theme.convertPxToVw(30)};
  background: ${({ theme }) => theme.color.blackLowOpacity};
  cursor: pointer;
  box-shadow: 
          ${({ theme }) => theme.convertPxToVw(10)} 
          ${({ theme }) => theme.convertPxToVw(14)} 
          ${({ theme }) => theme.convertPxToVw(14)} 
          0 rgba(0, 0, 0, 0.45);
`

const GroupNewMessageCount = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  min-width: ${({ theme }) => theme.convertPxToVw(24)}; 
  min-height: ${({ theme }) => theme.convertPxToVw(24)}; 
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bayLeaf};

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(8)};
  font-weight: 700;
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
`;

const GroupRemoveIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  width: ${({ theme }) => theme.convertPxToVw(16)}; 
  height: ${({ theme }) => theme.convertPxToVw(16)}; 
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.alto};
  
  img {
    width: ${({ theme }) => theme.convertPxToVw(8)};
    height: ${({ theme }) => theme.convertPxToVw(8)};
  }
`;

const GroupText = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.convertPxToVw(30)};
  left: ${({ theme }) => theme.convertPxToVw(10)};
  max-width: calc(100% - ${({ theme }) => theme.convertPxToVw(20)});

  color: ${({ theme }) => theme.color.white};
  font-family: Roboto, serif;
  font-size: ${({ theme }) => theme.convertPxToVw(12)};
  letter-spacing: ${({ theme }) => theme.convertPxToVw(1)};
  text-transform: capitalize;
`


export {
  GroupWrapper as Wrapper,
  GroupText as Text,
  GroupNewMessageCount as NewMessageCount,
  GroupRemoveIcon as RemoveIcon,
}