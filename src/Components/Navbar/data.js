import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BsNewspaper,BsSearch} from 'react-icons/bs';

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  /*{
    title: 'Top Headlines',
    path: '/topheadlines',
    icon: <BsNewspaper />,
    cName: 'nav-text'
  },*/
  /*{
    title: 'Country',
    path: '/country',
    icon: <FaIcons.FaMapMarkerAlt />,
    cName: 'nav-text'
  },*/
  {
    title: 'Search',
    path: '/search',
    icon: <BsSearch />,
    cName: 'nav-text'
  },
  /*{
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }*/
];