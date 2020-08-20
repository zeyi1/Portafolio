import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box, Card, CardActions, CardActionArea, CardMedia, CardContent, Container, Typography, Grid, Avatar } from '@material-ui/core';
import avatar from '../images/avatar.png'
import dinnerware from '../images/dinnerware.jpg'

const useStyles = makeStyles(theme => ({
    container:{
        // margin: '4em',
        maxWidth: '600px',
        justify: 'center',
        border: '2px solid red'
    },
    card: {
        maxWidth: '100%',
    },
    
    cardActions:{
        display: 'flex',
        margin: '0 10px',
        justifyContent: "space-between"
    }
}))

const ProjectInfo = ({dataItem}) => {
    const classes = useStyles();

    return(
        // <Grid container spacing={3} style={{width:'100%', margin:0}}>
            <Grid item xs={12} xl={6} className={classes.container} >
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia component='img'
                            alt={dataItem.imgAlt}
                            height='240'
                            image={dataItem.image}
                            title={dataItem.imgAlt}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {dataItem.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {dataItem.description}
                            </Typography>
                            </CardContent>
                    </CardActionArea>

                    <CardActions className={classes.cardActions}>
                        {dataItem.skills.map(item =>(
                            <Box>
                                <Avatar src={item[0]} alt={item[1]} variant='rounded'/>
                            </Box>
                        ))}  
                    </CardActions>
                </Card>
            </Grid>
        // </Grid> 


    )
}


export default ProjectInfo