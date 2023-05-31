import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import {Grid, Typography} from '@material-ui/core';
import ProjectInfo from './ProjectInfo';
import projectData from '../data/projectData';



const useStyles = makeStyles(theme => ({
    container:{
        background: 'linear-gradient(to bottom, rgba(255,241,235,0.5) 0%,rgba(233,222,250,0.5) 50%, rgba(105,145,199,0.5) 100%)'
        
    },
    title: {
        textAlign: 'center',
        fontSize: '2em',
        // paddingBottom: '1em',
        paddingTop: '1em',
        background: `linear-gradient(to top, #fff1eb, #e9defa, #6991c7)`

    },
    outergrid:{
        width: '100%',
        //background: 'linear-gradient(to top right, rgba(204,43,94,0.3) 0%, rgba(117,58,136,0.8) 100%)',
        // background: `linear-gradient(to bottom, rgba(255,241,235,0.5) 0%,rgba(233,222,250,0.5) 50%, rgba(105,145,199,0.5) 100%)`,
        // backgroundPosition: 'center',
        // MozBackgroundSize: 'cover',
        // WebkitBackgroundSize: 'cover',
        // OBackgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundImage: `linear-gradient(to bottom, #fff1eb, #e9defa, #6991c7), url(${tree})`,
        justifyContent: 'center',
        margin: 'auto',

    }
}))


const Projects = () => {
    const classes = useStyles()

    return(
        projectData.length > 0 && (
            <div className={classes.container} id='projects'>
                <Typography className={classes.title} style={{fontFamily: "'Handlee', cursive"}}>
                    Projects
                </Typography>

                <Grid container spacing={10} className={classes.outergrid} >
                    
                    {projectData.map(data => (
                        <Grid item sm={12} md={6} lg={4} className={classes.container} key={data.title}>
                            <ProjectInfo dataItem={data} />
                        </Grid>
                    ))}
                    
                </Grid>
            </div>
            
        )
        
    )
}


export default Projects;