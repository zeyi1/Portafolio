import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import {Grid, Typography} from '@material-ui/core';
import ProjectInfo from './ProjectInfo';
import projectData from './projectData';


const useStyles = makeStyles(theme => ({
    container:{
        
    },
    title: {
        textAlign: 'center',
        fontSize: '2em',
        paddingBottom: '1em',

    },
    outergrid:{
        width: '100%',
        background: 'black',
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
                        <Grid item sm={12} md={6} lg={4} className={classes.container} >
                            <ProjectInfo dataItem={data} key={data.title}/>
                        </Grid>
                    ))}
                    
                </Grid>
            </div>
            
        )
        
    )
}


export default Projects;