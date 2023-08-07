import styled from 'styled-components'

const GroupSliderWrapper = styled.div`
  position: relative;
  
  .slick-list {
    padding: 
      ${({ theme }) => theme.convertPxToVw(10)} 
      0 
      ${({ theme }) => theme.convertPxToVw(20)};
  }
  
  .slick-dots {
    bottom: ${({ theme }) => theme.convertPxToVw(-15)}
  }
  
  .slick-dots li button::before {
    width: ${({ theme }) => theme.convertPxToVw(4)};
    height: ${({ theme }) => theme.convertPxToVw(4)};
    color: ${({ theme }) => theme.color.silver};
  }
`

export {
  GroupSliderWrapper as Wrapper,
}