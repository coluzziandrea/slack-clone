import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { AccessTime, HelpOutline, Search } from '@mui/icons-material';

// Styled Components
export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--primary-color);
  color: white;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const HeaderClockIcon = styled(AccessTime)`
  margin-left: auto;
  margin-right: 30px;
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: var(--primary-light-color);
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  // target child element
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

export const HeaderHelpOutline = styled(HelpOutline)`
  margin-left: auto;
  margin-right: 20px;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;
`;
