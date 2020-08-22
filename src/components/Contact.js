import React from 'react';

import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from '@material-ui/core';
import {ChatBubble, Create, Email, Person, Telegram} from '@material-ui/icons';


const data = [
    {
        text: 'Enter Your Name...',
        icon: <Person />,
        label: 'Name',
        id: '1'
    },
    {
        text: 'Enter Your email...',
        icon: <Email />,
        label: 'Email',
        id: '2'
    },
    {
        text: 'Specify The Subject...',
        icon: <Create />,
        label: 'Subject',
        id: '3'
    },
]


const useStyles = makeStyles(theme => ({
    root:{
        position: 'relative',
        paddingTop: '35px',
    },

    title:{
        textAlign: 'center',
        fontSize: '2em',
        paddingBottom: '1em',
    },

    field: {
        margin: '20px 0px',
        fontFamily: 'Helvetica Neue',
        fontSize: '50px',
    },

    button: {
        margin: '1.5rem 0 3rem 0',
        color: '#4385f5',
        borderColor: '#4385f5',
        '&:hover':{
            backgroundColor: '#4385f5',
            color: 'white',
            opacity: '0.9',
            boxShadow: '0 0 10px #4267B2'
        }
    },
}));


const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'blue'
        },
        '& label':{
            color: 'black',
        },
        '& .MuiInputBase-root': {
            fontSize: '15px'
        },

        '& .MuiInputBase-input::-webkit-input-placeholder':{
            color: 'red',
            fontStyle: 'italic',
        },
        '& .MuiInputBase-input::-moz-placeholder':{
            color: 'red',
            fontStyle: 'italic'
        },
        '& .MuiInputBase-input:-ms-input-placeholder':{
            color: 'red',
            fontStyle: 'italic'
        },
        
    },
})(TextField);


const Contact = () => {

    const classes = useStyles();

    return (

        <Box variant='div' className={classes.root} id='contact'>
            <Grid container justify='center' >
                <Box component='form'>
                    <Typography className={classes.title} style={{fontFamily: "'Handlee', cursive"}}>
                        Hire or Contact Me...
                    </Typography>
                    {data.map(item => (
                        <div key={item.id}>
                            <InputField className={classes.field}
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'>{item.icon}</InputAdornment>, 
                                    }}
                                fullWidth={true} 
                                label={item.label} 
                                margin='dense'
                                placeholder={item.text}
                                required={true}
                                variant='outlined'  
                                size='medium' 
                                />
                            <br />
                        </div>
                    ))}

                    <InputField multiline={true} className={classes.field}
                        InputProps={{
                            startAdornment: <InputAdornment position='start' ><ChatBubble /></InputAdornment>, 
                            style: {color: 'black',
                                    minHeight:'10rem'}}}
                        fullWidth={true} 
                        label='Message'
                        margin='dense'
                        placeholder='Type Your Message...'
                        rowsMax='10'
                        variant='outlined'  
                        size='medium'
                    />

                    <Button className={classes.button} endIcon={<Telegram />} fullWidth={true} variant='outlined'>
                            Send
                    </Button>
                </Box>
            </Grid>
        </Box>

    )
}

export default Contact