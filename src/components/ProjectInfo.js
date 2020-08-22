import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Grid, Avatar } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    container:{
        // maxWidth: '600px',
        justify: 'center',
        border: '2px solid red',
        // margin: 'auto'
    },
    card: {
        // maxWidth: '100%',
        border: '2px solid red',
    },
    
    cardActions:{
        display: 'flex',
        // margin: '0 auto',
        // justifyContent: "space-between"
    },
    icongrid:{
        margin: '10px 1rem',
        // [theme.breakpoints.down('sm')]:{
        //     padding: '10px 10px'
        // },
        // margin: '0 auto'
    },
    icon:{
        width: theme.spacing(5),
        height: theme.spacing(5),

    },

    grid:{
        
    }
}))

const ProjectInfo = ({dataItem}) => {
    const classes = useStyles();

    return(

        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia component='img'
                    alt={dataItem.imgAlt}
                    height='240'
                    image={dataItem.image}
                    title={dataItem.imgAlt}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"'Special Elite', cursive", textAlign:'center'}}>
                        {dataItem.title}
                    </Typography>
                    {dataItem.description.map(item => (
                        <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"'Harmattan', sans-serif", fontSize:'1.5em'}}>
                            {item}
                         </Typography>

                    ))}
                    
                    </CardContent>
            </CardActionArea>

            {/* <CardActions className={classes.cardActions}> */}

                <Grid container justify='center' className={classes.grid} style={{background:'black'}}>      
                    {dataItem.skills.map(item => (
                        <Grid item  className={classes.icongrid} key={item[1]} sm={1} >
                            <Avatar className={classes.icon} src={item[0]} alt={item[1]} variant='rounded'/>
                        </Grid>
                    ))}
                </Grid>
            {/* </CardActions> */}

        </Card>


    )
}


export default ProjectInfo