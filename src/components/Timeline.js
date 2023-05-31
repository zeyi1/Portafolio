import React, {Suspense, lazy} from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import experienceData from '../data/experienceData';

const TimelineItem = lazy(() => import('./TimelineItem'))


const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        fontSize: '2em',
        paddingTop: '1em',
        paddingBottom: '1em',
        // background: 'linear-gradient(to bottom, #141E32 20%, #262A45 50%, #3D3E5A 100%)'
        // background: 'linear-gradient(to bottom, #4E4C60, #3D3E5A, #2E354E, #262A45, #1A1A1F)'
        background: 'linear-gradient(to bottom, #222026, #4E4C60, #5D5C6C, #262A45)'
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