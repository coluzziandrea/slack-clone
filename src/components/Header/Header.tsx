import React from 'react';
import { Search } from '@mui/icons-material';
import {
  HeaderAvatar,
  HeaderClockIcon,
  HeaderContainer,
  HeaderHelpOutline,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from './Header.style';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        // TODO add onClick
        />
        <HeaderClockIcon />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input type='text' placeholder='Search' />
      </HeaderSearch>

      <HeaderRight>
        <HeaderHelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
