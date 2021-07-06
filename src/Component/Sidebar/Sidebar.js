import React from 'react';
import './Sidebar.css';
import { AttachMoney, LineStyle, PersonOutline, Storefront, Timeline, TrendingUp, BarChart, MailOutline, ModeCommentOutlined, DynamicFeedOutlined, ErrorOutlined, WorkOutlineOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                    <ul className="sidebarList">
                        <Link className="link" to="/">

                            <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>

                        </Link>
                        
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"  />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"  />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link className="link" to='/users'>

                            <li className="sidebarListItem">
                            <PersonOutline className="sidebarIcon"  />
                            User
                        </li>

                        </Link>
                        
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                             Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"  />
                            Email
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlined className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ModeCommentOutlined className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className="sidebarIcon"  />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ErrorOutlined className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;