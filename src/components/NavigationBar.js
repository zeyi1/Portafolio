import React, {useState} from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from 'react-scroll';
import avatar from '../images/avatar.png';
import {AppBar, Button, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon} from '@material-ui/core';
import {Home, AssignmentInd, Apps, ContactMail} from '@material-ui/icons';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';


const useStyles = makeStyles(theme => ({
    bar:{
        backgroundColor: 'transparent',
    },

    items: {
        justifyContent: 'center',
        // [theme.breakpoints.down('xs')]:{
        //     justifyContent: 'flex-end'
        // }
        
    },

    buttons: {
        marginLeft: theme.spacing(3),
        backgroundImage: 'radial-gradient( rgba(243,197,182,0.7), rgba(210,181,205,0.7),rgba(181,179,223,0.7), rgba(204,186,218,0.7))',
        color: '#483b5a',
        boxShadow: '0 0 3px 3px rgba(171,203,254,0.6)',
        '&:hover': {
            backgroundColor: '#abcbfe'
        }

    }

  }));

const useStylesMobile = makeStyles(theme => ({
    menuSlider: {

        background: "#511",
        height: 450,
        witdh: '100%'
        
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),

    },
    listItem: {
        color: 'tan',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginRight: -115,

    }

}))

function NavigationBar() {

    const [headerStyle, setHeaderStyle] = useState({
        transition: 'all 500ms ease-in'
      })
      
    useScrollPosition(
    ({ prevPos, currPos }) => {
        const isVisible = currPos.y > prevPos.y
    
        const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 500ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        transform: isVisible ? 'none' : 'translate(0, -100%)'
        }
    
        if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
    
        setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
    )


    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    
    const classes = useStyles();
    const classesMobile = useStylesMobile();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const navItems = [
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

    

    const sideList = slider => (
        <Box className={classesMobile.menuSlider} component='div' onClick={toggleSlider(slider, false)}>
            <Avatar className={classesMobile.avatar} src={avatar} alt="Sharingan One Tomoe" />
            <Divider />
            <List>
                {navItems.map(item => (

                    <Link key = {item.id}
                    activeClass="active"
                    to={item.linkName}
                    spy={true}
                    smooth={'easeOutQuart'}
                    hashSpy={true}
                    duration={1500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    onClick={toggleSlider(slider, false)}>
                    
                    <ListItem button style={{fontFamily: "'Caveat', cursive"}}>
                        <ListItemIcon className={classesMobile.listItem}>{item.icon}</ListItemIcon>
                        <ListItemText disableTypography className={classesMobile.listItem} 
                            primary={<Typography variant='h6' style={{fontFamily: "'Caveat', cursive"}}>{item.title}</Typography>}/>
                    </ListItem>

                    </Link>
                ))}
            </List>
        </Box>
    )

    return (
        <>
        <AppBar position="fixed" className={classes.bar} style={{...headerStyle}}>
        <Toolbar className={classes.items}>
        
            {isMobile ? (
                <>
                <IconButton 
                    className={classes.menuButton} 
                    aria-label="menu"
                    onClick={toggleSlider('right', true)}>
                    <MenuIcon style={{color:'#2C68C6'}}/>
                </IconButton>

                <MobilRightMenuSlider anchor='bottom' open={state.right} onClose={toggleSlider('right', false)}>
                    {sideList('right')}
                </MobilRightMenuSlider>
                </>
            ) :
            (   
                <>
                {navItems.map(navItem => {
                    const {id, title, linkName} = navItem;
                    return (
                        <Link key = {id}
                            activeClass="active"
                            to={linkName}
                            spy={true}
                            smooth={'easeOutQuart'}
                            hashSpy={true}
                            duration={1500}
                            isDynamic={true}
                            ignoreCancelEvents={false}>
                            <Button className={classes.buttons} style={{fontFamily: "'Caveat', cursive"}}>
                                {title}
                            </Button>
                        </Link>
                    )
                })}                                
                </>
            )}
        </Toolbar>
    </AppBar>
    </>
    );
}

export default NavigationBar;