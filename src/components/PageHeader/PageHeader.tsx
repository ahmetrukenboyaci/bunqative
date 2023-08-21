/** Dependencies */
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/** Types */
import { PageHeaderProps } from './PageHeader.types';

/** Images */
import Logo from '../../assets/images/svg/logo.svg';

/** Icons */
import logoutIcon from '../../assets/icons/logout.svg';

/** Constants */
import { ROUTE } from '../../constants/Routes';

/** Store */
import { isUserLoggedIn, logout } from '../../store/slices/login.slice';

/** Styles */
import * as S from './PageHeader.styled';
import { useAppSelector } from '../../hooks/useAppSelector';

const PageHeader: FC<PageHeaderProps> = ({
                                           name,
                                         }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector(isUserLoggedIn);

  const handleLogoClick = () => {
    navigate(`${ROUTE.ROOT}`);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <S.Wrapper>
      <S.Logo onClick={handleLogoClick} src={Logo} alt={'logo'}/>
      <S.NameContainer>
        <S.Name>{name}</S.Name>
      </S.NameContainer>
      {isLoggedIn && <S.Logout onClick={handleLogoutClick} src={logoutIcon} alt={'log out'}/>}
    </S.Wrapper>
  );
};

export default PageHeader;