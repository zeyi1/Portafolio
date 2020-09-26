import React, {useState, useRef, Suspense, lazy} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {AppBar, Button, Toolbar, ListItem, IconButton, ListItemText, Grid, Typography, ListItemIcon} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import bear from '../images/bear.png';
import blackKhoi from '../images/black_khoi.png';
import whiteKhoi from '../images/white_khoi.png';
import navigationData from '../data/navigationData';

const Modal = lazy(() => import('./Modal'));


const useStyles = makeStyles(theme => ({
    bar:{
        backgroundColor: 'transparent',
    },
    items: {
        justifyContent: 'center',
    },
    buttons: {
        marginLeft: theme.spacing(3),
        backgroundImage: 'radial-gradient(circle at bottom right, rgba(243,197,182,0.7), rgba(210,181,205,0.7),rgba(181,179,223,0.7), rgba(204,186,218,0.7))',
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
        color: '#fadadd',
        justifyContent: 'center',
    },
    listItem2:{
        textAlign: 'center',
    },
    images: {
        display: 'block',
        margin: 'auto'
    }
}))

const outerList = {
    hidden: {},
    visible: {
        opacity:1,
        transition: {
          delayChildren: 1.5,
          staggerChildren: 0.13
        }
      }
}

const listElement = {
    hidden: {y: 250},
    visible: {
        y: 0,
        transition: {
            ease:'easeInOut',
            duration:0.55
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
                        <img src={bear} alt="bear" className={classesMobile.images} />
                        
                        <Grid container style={{width:"100vw", borderTop: '2px solid black'}} alignItems='center'>
                            <Grid item xs={3}>
                                <img src={whiteKhoi} alt="whiteKhoi" className={classesMobile.images} />
                            </Grid>
                            <Grid item xs={6}>
                             <motion.div variants={outerList}
                            initial="hidden"
                            animate="visible"
                            exit="hidden">

                            {navigationData.map(item => (
                                <motion.div variants={listElement} key={item.id} >
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
                        </Grid>
                        <Grid item xs={3}>
                            <img src={blackKhoi} alt="blackKhoi" className={classesMobile.images} />
                        </Grid>
                        </Grid>
                       
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