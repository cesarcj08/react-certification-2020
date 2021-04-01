import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';

export const SideMenuData= [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        class: 'menu-item'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <IoMdSettings />,
        class: 'menu-item'
    }
]