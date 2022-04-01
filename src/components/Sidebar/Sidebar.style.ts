import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: var(--primary-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid var(--primary-lighter-color);
  max-width: 260px;
  margin-top: 60px; // header height
`;

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--primary-lighter-color);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--primary-lighter-color);
    font-size: 28px;
    background-color: white;
    border-radius: 999px;
  }
`;

export const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
