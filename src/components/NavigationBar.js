import React, {useState, useRef, Suspense, lazy} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {AppBar, Button, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, Typography, ListItemIcon} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../images/avatar.svg';
import navigationData from '../data/navigationData';

const Modal = lazy(() => import('./Modal'));


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
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        minWidth:'40%',
        color: '#6b0015',
        justifyContent: 'flex-end',
        // flex: 1,
    },
    listItem2:{
        width: '50%',
        textAlign: 'left',
        paddingLeft: '20px'
    }
}))

const outerList = {
    visible: {
        opacity:1,
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.07
        }
      },
    hidden: {
        opacity:0,
    transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
    }
    }
}

const listElement = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 }
        }
      },
    hidden: {
    y: 50,
    opacity: 0,
    transition: {
        y: { stiffness: 1000 }
    }
    }
}


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

    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current.openModal()
    }

    const closeModal = () => {
        modalRef.current.closeModal()
    }

    const classes = useStyles();
    const classesMobile = useStylesMobile();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    

    return (
        <>
        <AppBar position="fixed" className={classes.bar} style={{...headerStyle}}>
        <Toolbar className={classes.items}>
        
            {isMobile ? (
                <>
                <IconButton 
                    className={classes.menuButton} 
                    aria-label="menu"
                    onClick={openModal}>

                    <MenuIcon style={{color:'#2C68C6'}}/>
                </IconButton>

                <Suspense fallback={<div />}>
                    <Modal ref={modalRef}>
                        <Avatar className={classesMobile.avatar} src={avatar} alt="Sharingan One Tomoe" />
                        <Divider />
                        <motion.div variants={outerList}
                            initial="hidden"
                            animate="visible"
                            exit="hidden">
                            {navigationData.map(item => (
                                <motion.div variants={listElement} key={item.id}>
                                    <Link 
                                    activeClass="active"
                                    to={item.linkName}
                                    smooth={'easeOutQuart'}
                                    duration={2000}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                    onClick={closeModal}>

                                        <ListItem button style={{fontFamily: "'Caveat', cursive"}}>
                                            <ListItemIcon className={classesMobile.listItem}>{item.icon}</ListItemIcon>
                                            <ListItemText disableTypography className={classesMobile.listItem2} 
                                                primary={<Typography variant='h6' style={{fontFamily: "'Caveat', cursive"}}>{item.title}</Typography>}/>
                                        </ListItem>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </Modal>
                </Suspense>
                </>
            ) : (   
                <>
                {navigationData.map(navItem => {
                    const {id, title, linkName} = navItem;
                    return (
                        <Link key = {id}
                            activeClass="active"
                            to={linkName}
                            smooth={'easeOutQuart'}
                            duration={2000}
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