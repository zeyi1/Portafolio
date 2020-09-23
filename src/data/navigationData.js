import React from 'react';
import {Home, AssignmentInd, Apps, ContactMail} from '@material-ui/icons';

const navigationData = [
    {
        id: '1',
        title: 'About',
        linkName: 'about',
        icon: <Home />
    },
    {
        id: '2',
        title: 'Experience',
        linkName: 'experience',
        icon: <AssignmentInd />
    },
    {
        id: '3',
        title: 'Portafolio',
        linkName: 'projects',
        icon: <Apps />
    },
    {
        id: '4',
        title: 'Contact',
        linkName: 'contact',
        icon: <ContactMail />
    }
]

export default navigationData;