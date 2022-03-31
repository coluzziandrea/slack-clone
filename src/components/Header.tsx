import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        // TODO add onClick
        />
      </HeaderLeft>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;
const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
