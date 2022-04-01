import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from '@mui/icons-material';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar.style';
import SidebarOption from './SidebarOption';

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

      <SidebarOption Icon={InsertComment} title='Threads' />
      <SidebarOption Icon={Inbox} title='Mentions & Reactions' />
      <SidebarOption Icon={Drafts} title='Saved Items' />
      <SidebarOption Icon={BookmarkBorder} title='Channel Browser' />
      <SidebarOption Icon={PeopleAlt} title='People & User Groups' />
      <SidebarOption Icon={Apps} title='Apps' />
      <SidebarOption Icon={FileCopy} title='File Browser' />
      <SidebarOption Icon={ExpandLess} title='Show Less' />

      <hr />
      <SidebarOption Icon={ExpandMore} title='Channels' />
      <hr />

      <SidebarOption Icon={Add} addChannelOption title='Add Channel' />
    </SidebarContainer>
  );
}

export default Sidebar;
