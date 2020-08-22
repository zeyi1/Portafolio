import React, {useState, lazy, Suspense} from 'react';
import '../App.css';
import {Typography, Avatar, Grid, Box, Button} from '@material-ui/core';
import avatar from '../images/avatar.png';
import {makeStyles} from '@material-ui/core/styles';
import isla from '../images/Isla.jpg';


const Particle = lazy(() => import('./Particle'))
const Typed = lazy(() => import('react-typed'))

const useStyles = makeStyles( theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        paddingBottom: '30px',
        color: '#b5b4df',
        [theme.breakpoints.down('xs')]:{
            fontSize: '24px'
        }
    },
    test:{
        backgroundColor: 'rgba(0,0,0,0.7)' 
    },
    subtitle: {
        fontSize: '21px',
        color: '#e6c0d4',
        [theme.breakpoints.down('sm')]:{
            textAlign: 'left',
            padding: '0px 20px 15px 20px'
        }
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        width: '60vw',
        textAlign: 'center',
        zIndex: 1,
        [theme.breakpoints.down('md')]:{
            width: '80vw'
        },
        [theme.breakpoints.down('sm')]:{
            width: '90vw'
        }
    },

    backImage: {
        backgroundImage: `linear-gradient(to top left, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.2) 100%), url(${isla})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        MozBackgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    },
    button:{
        zIndex: 1,
        top: '93vh',
        // backgroundColor: '#abcbfe',
        boxShadow: '0 0 5px 5px rgba(84,131,205, 0.7)',
        background: '#2C68C6',
        '&:hover':{
            backgroundColor: 'rgba(41,104,238, 0.8)'
        }
    },
    
}))


const Header = () => {
    
    const [animation, setAnimation] = useState(false)
    
    const classes = useStyles()
    
    const title = "Hi! I'm Zeyi, a Web / Software Developer."
    const text = [["I have a passion for creating simplified and optimized software applications that solve real-world problems.", 4000, '1'],
                  ['I have experience in front-end and back-end design, machine learning and artificial intelligence, and building automated applications.', 9000, '2'],
                  ["I'm an introvert who loves learning new technologies, games and animes.", 15000, '3']]

    return (

        <Box className={classes.backImage} id='about'>
            
            <Box className={classes.typedContainer}>

                <Grid container justify='center' style={{paddingBottom: '40px'}}>
                    <Avatar className={classes.avatar} src = {avatar} alt='Sharingan One Tomoe'/>
                </Grid>

                <Suspense fallback={<div />}>
                    <Grid container direction='column' className={classes.test}>
                        <Typography className={classes.title} style={{fontFamily: "'Kaushan Script', cursive"}}>

                            <Typed strings={[title]} typeSpeed={40} startDelay={1000} showCursor={false}/>
                        </Typography>
                        
                        {text.map(items => (
                            <Grid item key={items[2]}>
                                <Typography className={classes.subtitle} style={{fontFamily:"'Harmattan', sans-serif"}}>
                                    <Typed strings={[items[0]]} typeSpeed={30} startDelay={items[1]} showCursor={false}/>
                                </Typography>
                            </Grid>
                        ))}
                    </Grid> 
                </Suspense>
                
            </Box>
            <Suspense fallback={<div />}>
                <Grid container justify='center'>
                    <Button className={classes.button} style={{fontFamily: "'Caveat', cursive"}} onClick={() => setAnimation(!animation)}>Animate</Button>
                    {animation ? <Particle /> : null}
                </Grid>
            </Suspense>
            
        </Box>

    );
}

export default Header;