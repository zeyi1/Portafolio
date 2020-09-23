import React from 'react';
import {Create, Email, Person} from '@material-ui/icons';

const formData = [
    {
        name: "formName",
        text: 'Enter Your Name...',
        icon: <Person />,
        label: 'Name',
        id: '1'
    },
    {
        name: "formEmail",
        text: 'Enter Your email...',
        icon: <Email />,
        label: 'Email',
        id: '2'
    },
    {
        name: "formSubject",
        text: 'Specify The Subject...',
        icon: <Create />,
        label: 'Subject',
        id: '3'
    },
];

export default formData;