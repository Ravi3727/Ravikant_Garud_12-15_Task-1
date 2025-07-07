import React, { useEffect, useState } from 'react';

import dashboardIcon from "../svgs/dashboard.svg";
import addSchoolIcon from "../svgs/addSchool.svg";
import settingsIcon from "../svgs/setting.svg";
import studentIcon from "../svgs/student.svg";
import staffIcon from "../svgs/staf.svg";
import feesIcon from "../svgs/fees.svg";
import announcementsIcon from "../svgs/annon.svg";

const SideBarData = [
    {
        title: "Dashboard",
        icon: dashboardIcon,
        roles: ["master", "admin"],
    },
    {
        title: "Add School",
        icon: addSchoolIcon,
        roles: ["master"],
    },
    {
        title: "Settings",
        icon: settingsIcon,
        roles: ["master", "admin"],
    },
    {
        title: "Student",
        icon: studentIcon,
        roles: ["admin"],
    },
    {
        title: "Staff",
        icon: staffIcon,
        roles: ["admin"],
    },
    {
        title: "Fees",
        icon: feesIcon,
        roles: ["admin"],
    },
    {
        title: "Announcements",
        icon: announcementsIcon,
        roles: ["admin"],
    }
];

function Sidebar() {
    const [isAdmin, seIsAdmin] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user) {
            seIsAdmin(user === "admin");
        } else {
            seIsAdmin(false);
        }
    }, []);
    
    const userRole = isAdmin ? "admin" : "master";

    const filteredSidebarItems = SideBarData.filter(item => item.roles.includes(userRole));

    return (
        <div className='flex flex-col w-full h-full text-white px-8 py-4'>
            <div className='w-full text-black flex flex-col px-4 py-2 items-start'>
                {
                    !isAdmin ?
                        (
                            <div>
                                <h1 className='text-lg text-black'>Master user</h1>
                                <p className='text-gray-500 text-sm'>master Panel</p>
                            </div>
                        ) :
                        (
                            <div>
                                <h1 className='text-lg text-black'>Shool Admin</h1>
                                <p className='text-gray-500 text-sm'>Admin Panel</p>
                            </div>
                        )
                }
            </div>

            <div className='flex flex-col w-full h-full gap-4 text-black '>
                {
                    filteredSidebarItems.map((item, index) => (
                        <li key={index} className='flex items-center gap-2 hover:cursor-pointer hover:bg-gray-100 px-6 py-2 rounded-xl '>
                            <img src={item.icon} alt={item.title} className='w-5 h-5' />
                            <span>{item.title}</span>
                        </li>
                    ))
                }
            </div>
        </div>
    );
}

export default Sidebar;
