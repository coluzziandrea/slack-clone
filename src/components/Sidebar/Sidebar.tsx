import { Create, FiberManualRecord } from '@mui/icons-material';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar.style';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Main HQ</h2>

          <h3>
            <FiberManualRecord />
            Andrea Coluzzi
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;
