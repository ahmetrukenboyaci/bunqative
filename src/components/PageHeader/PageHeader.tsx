/** Dependencies */
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

/** Types */
import { PageHeaderProps } from './PageHeader.types'

/** Images */
import Logo from '../../assets/images/svg/logo.svg'

/** Constants */
import { ROUTE } from '../../constants/Routes'

/** Styles */
import * as S from './PageHeader.styled'

const PageHeader: FC<PageHeaderProps> = ({
  name,
}) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(`${ROUTE.ROOT}`);
  }

  return (
    <S.Wrapper>
      <S.Logo onClick={handleLogoClick} src={Logo} alt={'logo'} />
      <S.NameContainer>
        <S.Name>{name}</S.Name>
      </S.NameContainer>
    </S.Wrapper>
  )
}

export default PageHeader;