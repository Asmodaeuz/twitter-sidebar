import "./sidebar.css"
import { useState } from 'react'
import SidebarLink from "./SidebarLink"
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

export default function Sidebar() {
    const options = [
        { link: 'Bookmarks', icon: <BookmarkBorderOutlinedIcon fontSiz0px /> },
        { link: 'List', icon: <ListAltOutlinedIcon /> },
        { link: 'Topic', icon: <ChatOutlinedIcon /> },
        { link: 'Moments', icon: <OfflineBoltOutlinedIcon /> },
        { link: 'Newsletters', icon: <PostAddOutlinedIcon /> },
        { link: 'Twitter Ads', icon: <CallMadeOutlinedIcon /> },
        { link: 'Analytics', icon: <BarChartOutlinedIcon /> },
        { link: 'Settings', icon: <SettingsOutlinedIcon /> },
        { link: 'Help Center', icon: <HelpOutlineOutlinedIcon /> },
        { link: 'Display', icon: <BrushOutlinedIcon /> },
        { link: 'Keyboard shortcuts', icon: <AccessibilityNewOutlinedIcon /> },

    ];

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(true)
    }

    return (
        <div className="sidebar">
            <SidebarLink text="Home" Icon={HomeIcon} />
            <SidebarLink text="Explore" Icon={SearchIcon} />
            <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
            <SidebarLink text="Messages" Icon={MailOutlineIcon} />
            <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
            <SidebarLink text="Lists" Icon={ListAltIcon} />
            <SidebarLink text="Profile" Icon={PermIdentityIcon} />
            <Button onClick={handleClick} id="moreLinks">
                <MoreHorizIcon /> More
            </Button>
            <Button id="tweet">
                Tweet
            </Button>
            <Menu
                id="longMenu"
                open={open}
                onClose={handleClose}
            >
                {options.map(option => (
                    <MenuItem key={option.link} onClick={handleClose}>
                        {option.icon} {option.link}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}