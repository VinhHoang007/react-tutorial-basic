import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import sidebarBg from '../../assets/bg2.jpg';
import { FaGem, FaGithub } from 'react-icons/fa';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import './SideBar.scss';


const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={"00bfff"} />
                        Study React
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                            suffix={<span className="badge red">Main</span>}
                        >
                            Dashboard
                            <Link to="/admin"/>
                        </MenuItem>
                        <MenuItem icon={<FaGem />}> Components</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            // suffix={<span className="badge yellow">3</span>}
                            // icon={<FaRegLaughWink />}
                            icon={<FaGem />}
                            title="Features"

                        >
                            <MenuItem> 
                                Manage Users
                                <Link to="/admin/manage-users"/>
                            </MenuItem>
                            <MenuItem> Manage Quizzes</MenuItem>
                            <MenuItem> Manage Questions</MenuItem>
                        </SubMenu>
                        {/* <SubMenu
                            prefix={<span className="badge gray">3</span>}
                            icon={<FaHeart />}
                        >
                            <MenuItem> 1</MenuItem>
                            <MenuItem> 2</MenuItem>
                            <MenuItem> 3</MenuItem>
                        </SubMenu> */}
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                View Source
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;