import React from 'react';

import '../assets/Sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

// Sub component for row elements
function SidebarRow({ title, Icon, selected }) {
    return (
        <div className={`sideBarRow ${selected && 'selected'}`}>
            <Icon className="sideBarRow_icon" />
            <h2 className="sideBarRow_title">{title}</h2>

        </div>
    )
}


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow title="Home" Icon={HomeIcon} selected />
            <SidebarRow title="Trending" Icon={WhatshotIcon} />
            <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />

        </div>
    )
}

export default Sidebar;
