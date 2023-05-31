import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box, Card, CardActionArea, CardContent, Typography, Grid, Avatar } from '@material-ui/core';
import ImageList from '@mui/material/ImageListItem';
import ImageListItem from '@mui/material/ImageListItem';


const useStyles = makeStyles(theme => ({
    container:{
        // maxWidth: '600px',
        justify: 'center',
        // border: '2px solid red',
        // margin: 'auto'
    },
    card: {
        // maxWidth: '100%',
        // border: '2px solid red',
        background: 'transparent'
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

    image:{
        border: '1px solid grey'
        
    }
}))

const ProjectInfo = ({dataItem}) => {
    const classes = useStyles();

    return(

        <Card className={classes.card}>
            {/* onClick={event => window.open(item.url, '_blank')} */}
            <CardActionArea {...("url" in dataItem && {onClick: event => window.open(dataItem.url)})}>
                
                {/* <CardMedia className={classes.image} title={dataItem.imgAlt}> */}
                    {/* <Box
                        component="img"
                        style={{position:'relative', width:'100%',height:'100%'}}
                        src={dataItem.image}
                        layout="fill"
                        objectFit="contain"
                    /> */}
                    <Box style={{width:'100%', height:300, overflowY: 'scroll'}}>
                    <ImageList>
                        {dataItem.image.map((item) => (
                            <ImageListItem key={item.altn} component='div' className={classes.image}>
                                <img src={item.name} alt={item.altn} loading="lazy"/>
                            </ImageListItem>
                        ))}
                    </ImageList>
                    </Box>
                {/* </CardMedia> */}
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"'Special Elite', cursive", textAlign:'center'}}>
                        {dataItem.title}
                    </Typography>
                    {dataItem.description.map(item => (
                        <Typography key={item} variant="body2" color="textSecondary" component="p" style={{fontFamily:"'Harmattan', sans-serif", fontSize:'1.5em'}}>
                            {item}
                         </Typography>

                    ))}
                    {"url" in dataItem && <Typography variant="body2" color="textSecondary" style={{fontFamily:"'Harmattan', sans-serif", fontSize:'1.5em'}}>{dataItem.url}</Typography>}
                    </CardContent>
            </CardActionArea>

            {/* <CardActions className={classes.cardActions}> */}

                <Grid container justify='center' className={classes.grid} style={{background:`linear-gradient(to bottom, rgba(255,241,235,0.5) 0%,rgba(233,222,250,0.5) 50%, rgba(105,145,199,0.5) 100%)`}}>      
                    {dataItem.skills.map(item => (
                        <Grid key={item[1]} item  className={classes.icongrid} sm={1} >
                            <Avatar className={classes.icon} src={item[0]} alt={item[1]} variant='square'/>
                        </Grid>
                    ))}
                </Grid>
            {/* </CardActions> */}

        </Card>


    )
}


export default ProjectInfo