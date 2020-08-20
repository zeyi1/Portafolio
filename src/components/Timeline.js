import React from 'react';
import TimelineItem from './TimelineItem';
import experienceData from './experienceData';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        fontSize: '2em',
        paddingBottom: '1em'
    },

}))


const Timeline = () => {

    const classes = useStyles()

    return (
    experienceData.length > 0 && (
        <div className='experience' key='1'>
            <Typography className={classes.title} style={{fontFamily: "'Handlee', cursive"}}>
                Education & Work Experience
            </Typography>

            <div key='2'>
                {experienceData.map(data => (
                    <TimelineItem dataItem={data} key={data.name} />
                ))}
            </div>
        </div>
    )
    );

}

export default Timeline