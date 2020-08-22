import React from 'react';

import {Avatar, Box, Divider, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Facebook, GitHub, Instagram, LinkedIn, Mail} from '@material-ui/icons';


const data = [
    {
        tag: 'Mail',
        icon: <Mail/>,
        url: 'mailto:zeyihong@gmail.com'
    },
    {
        tag: 'Facebook',
        icon: <Facebook/>,
        url: 'https://www.facebook.com/paul.hong.313/'
    },
    {
        tag: 'Instagram',
        icon: <Instagram/>,
        url: 'https://www.instagram.com/paulhongchen/'
    },
    {
        tag: 'LinkedIn',
        icon: <LinkedIn/>,
        url: 'https://www.linkedin.com/in/zeyi-hong-chen/'
    },
    {
        tag: 'GitHub',
        icon: <GitHub />,
        url: 'https://github.com/zeyi1'
    }
]


const useStyles = makeStyles(theme =>({

    root:{
        left:0,
        bottom:0,
        right: 0,
        textAlign: 'center',
        position: 'relative',
        background: 'linear-gradient(to top left, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.9) 100%)'
    },
    socials:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    Facebook: {
        backgroundColor: '#4267B2',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.8',
            boxShadow: '0 0 10px #4267B2, 0 0 20px #4267B2, 0 0 30px #4267B2',
            transition: '0.5s'
        },
        margin: '2em 0.75em'
    },
    Instagram: {
        backgroundImage: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.8',
            boxShadow: '0 0 15px #fdf497, 0 0 20px #fd5949, 0 0 25px #d6249f, 0 0 30px #285AEB',
            transition: '0.5s'
        },
        margin: '2em 0.75em'
    },
    LinkedIn: {
        backgroundColor: '#0E76A8',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.8',
            boxShadow: '0 0 10px #0E76A8, 0 0 20px #0E76A8, 0 0 30px #0E76A8',
            transition: '0.5s'
        },
        margin: '2em 0.75em'
    },
    GitHub: {
        backgroundColor: '#211F1F',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.8',
            boxShadow: '0 0 10px #F4CBB2, 0 0 20px #211F1F, 0 0 30px #211F1F',
            transition: '0.5s'
        },
        margin: '2em 0.75em'
    },
    Mail: {
        color: '#EEEEEE',
        backgroundImage: 'linear-gradient(to top right, #D44638, #B23121)',
        '&:hover':{
            cursor: 'pointer',
            opacity: '0.8',
            boxShadow: '0 0 10px #E2E2E2, 0 0 20px #D44638, 0 0 30px  #B23121',
            transition: '0.5s'
        },
        margin: '2em 0.75em'
    },
    bottom: {
        margin: '1em 0px 3em 0px',
    }
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <Box variant='div' className={classes.root}>
            <Grid container spacing={1} className={classes.socials} style={{width:'100%', margin:0}}>
                {data.map(item =>(
                    <Avatar className={classes[item.tag]} key={item.tag} onClick={event => window.open(item.url, '_blank')}>
                        {item.icon}
                    </Avatar>
                ))}
            </Grid>

            <Divider/>
            <Typography className={classes.bottom} style={{fontFamily:"'Tangerine', cursive"}}>&copy; {new Date().getFullYear()} Zeyi Hong Chen</Typography>
        </Box>

    );
};


export default Footer;