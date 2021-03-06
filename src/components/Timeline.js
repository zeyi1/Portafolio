import React, {Suspense, lazy} from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import experienceData from '../data/experienceData';

const TimelineItem = lazy(() => import('./TimelineItem'))


const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        fontSize: '2em',
        paddingBottom: '1em'
    }
})


const Timeline = () => {

    const classes = useStyles()

    return (
        
        experienceData.length > 0 && (
            <div className='experience'>
                <Typography className={classes.title} style={{fontFamily: "'Handlee', cursive"}}>
                    Education & Work Experience
                </Typography>
                
                {experienceData.map(data => (
                    <Suspense fallback={<div />} key={data.title}>
                        <TimelineItem dataItem={data} key={data.name} />
                    </Suspense>
                ))}
            </div>
            ))
}

export default Timeline