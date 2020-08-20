import React, {useEffect} from 'react';
import {Avatar, Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { LocationOn } from '@material-ui/icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles(theme => ({
    
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },

    date:{
        border: '1px solid black',
        backgroundImage: 'radial-gradient(rgba(255,236,158,0.7), rgba(255,221,138,0.7), rgba(225,173,109,0.7), rgba(201,145,87,0.7), rgba(210,170,119,0.7))',
        maxWidth: '283px',
        minHeight: '75px',
    },

    font: {
        margin: 'auto',
        fontSize: '17px'
    },

    outerGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        margin: 'auto'
    },

    // paper:{
    //     maxWidth: '100vw',
    // },

    text:{
        color: '#F8F0C6',
    },

    titleBackground:{
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    text2:{
        color: '#fadadd',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: '8px',
        marginTop: '-8px',
        padding: '20px 0',
        [theme.breakpoints.down('sm')]:{
            marginLeft: 0,
            marginTop: 20
        }
    },
    
    description:{
        color: '#c2a5ae',
        padding: '0 25px',
        [theme.breakpoints.down('sm')]:{
            textAlign: 'left'
        }
    },

    icon:{
        width: theme.spacing(5),
        height: theme.spacing(5),
    },

    icongrid:{
        [theme.breakpoints.down('sm')]:{
            padding: '10px 10px'
        }
    },

}));


const TimelineItem = ({dataItem}) => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 250
        });
    }, []);

    const classes = useStyles();

    return (
    
    <Paper style={{overflowX: 'hidden'}}>
        <Grid container spacing={3} className={classes.outerGrid} 
              style={{backgroundImage: `linear-gradient(to top left, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.5) 100%), url(${dataItem.image})`, width:'100%', margin:0, height:'100%'}}
              data-aos='fade-up'>
            <Grid item container md={12} lg={4} justify='center' align='center' className={classes.date}
                  data-aos='fade-left'>
                <Typography 
                    variant='h6' 
                    className={classes.font} 
                    style={{fontFamily:"'Special Elite', cursive", 
                    textDecoration:'underline'}}
                    data-aos='fade-right'
                    data-aos-delay='450'>{dataItem.year}</Typography>
            </Grid>

            <Grid item container md={12} lg={8} align='center' >
                <Grid item container spacing={2} direction='column' md={4} justify='center'>
                    <Grid item className={classes.titleBackground}
                          data-aos='fade-down'
                          data-aos-delay='450'>
                        <Typography className={classes.text} variant='h6' style={{fontFamily: "'Kaushan Script', cursive"}}>{dataItem.name}</Typography>
                    </Grid>
                    <Grid item container justify='center'>
                        <Avatar data-aos='flip-left' data-aos-delay='1000'
                        className={classes.avatar} src={dataItem.logo[0]} alt={dataItem.name} />
                        {dataItem.logo.length > 1 ?
                            <Avatar data-aos='fade-left' data-aos-delay='1000' className={classes.avatar} src={dataItem.logo[1]} alt={dataItem.name} /> : <></>}
                    </Grid>
                     
                    <Grid item container justify='center'
                          data-aos='fade-up'
                          data-aos-delay='450'>
                        <LocationOn style={{color: 'rgba(194,165,174,0.9)'}}/>
                        <Typography style={{color: '#e6dade', paddingLeft: '10px', fontFamily: "'Kaushan Script', cursive"}}>{dataItem.location}</Typography>
                    </Grid>
                </Grid>

                <Grid item container className={classes.text2} direction='column' md={8} 
                      data-aos='zoom-in'
                      data-aos-delay='1500'
                      data-aos-duration='2500'>
                    <Typography variant='h5' style={{fontFamily: "'Allura', cursive", paddingBottom:'25px', fontWeight:'bold'}}>{dataItem.title}</Typography>
                    {dataItem.description.map(item => (
                        typeof item == 'string' ? <><Typography variant='subtitle1' align='justify' className={classes.description} key={item} style={{fontFamily:"'Harmattan', sans-serif", fontSize:'20px'}}>{item}</Typography> <br /></>: 
                        <ul key={item}>
                            {item.map(subitem => (
                                <li key={subitem}><Typography variant='subtitle1' align='left' className={classes.description} style={{fontFamily:"'Harmattan', sans-serif", fontSize:'20px'}}>{subitem}</Typography></li> 
                            ))}
                        </ul>
                    ))}
                    <br />
                    <Grid item container justify='center'>
                        {dataItem.icons.map(item => (
                            <Grid item className={classes.icongrid} key={item[1]} sm={1} >
                                <Avatar className={classes.icon} src={item[0]} alt={item[1]} variant='rounded'/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
    )
        
};


export default TimelineItem;