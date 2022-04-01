import { SvgIconComponent } from '@mui/icons-material';
import React from 'react';
import { SidebarOptionChannel, SidebarOptionContainer } from './Sidebar.style';

interface SidebarOptionProps {
  Icon?: SvgIconComponent;
  title: string;
  addChannelOption?: boolean;
}

const renderOption = (Icon: SvgIconComponent, title: string) => {
  return (
    <>
      <Icon fontSize='small' style={{ padding: 1 }} />
      <h3>{title}</h3>
    </>
  );
};

const renderChannel = (title: string) => {
  return (
    <SidebarOptionChannel>
      <span>#</span> {title}
    </SidebarOptionChannel>
  );
};

const SidebarOption: React.FC<SidebarOptionProps> = ({
  Icon,
  title,
  addChannelOption,
}) => {
  const addChannel = () => {};

  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon ? renderOption(Icon, title) : renderChannel(title)}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
