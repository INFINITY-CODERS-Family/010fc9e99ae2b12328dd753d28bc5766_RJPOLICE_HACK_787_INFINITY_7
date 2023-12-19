// assets
import { TeamOutlined, CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  CustomerServiceOutlined,
  CommentOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'IpsOfficers',
      title: 'Our IPS Officers',
      type: 'item',
      url: '/IPS-Officers',
      icon: icons.TeamOutlined
    },
    {
      id: 'ControlRooms',
      title: 'Control Room',
      type: 'item',
      url: '/Control-Room-Details',
      icon: icons.CustomerServiceOutlined
    },
    {
      id: 'ContactUs',
      title: 'Contact Us',
      type: 'item',
      url: '/Contact',
      icon: icons.CommentOutlined
    }
  ]
};

export default support;
