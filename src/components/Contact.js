import React, {useState, useEffect} from 'react';

import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from '@material-ui/core';
import {ChatBubble, Telegram} from '@material-ui/icons';
import {AnimatePresence, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import formData from '../data/formData';

import useForm from './useForm';
import validateEmail from './validateEmail';
import Message from './Message';


const useStyles = makeStyles({
    root:{
        position: 'relative',
        paddingTop: '35px',
        // minHeight: '60vh'
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
        width: '20rem'
    },
    button: {
        margin: '1.5rem 0 3rem 0',
        // color: '#75A3f2',
        color : '#a9c9ff',
        borderColor: '#4385f5',
        '&:hover':{
            backgroundColor: '#4385f5',
            color: 'white',
            opacity: '0.9',
            boxShadow: '0 0 10px #4267B2'
        }
    },
});

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

const containerVariants = {
    hidden: {
        opacity: 0,
        transition: {
            delay: 1,
            staggerChildren: 0.1,
        }
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
        transition: {
            ease: 'easeIn'
        }
    },
    visible: {
        opacity: 1,
        x: 0,
        transition:{
            type: 'spring',
            mass: 0.45,
            damping: 10,
            stiffness: 80
        },
        
    }
}


const Contact = () => {

    const classes = useStyles();
    const [show, setShow] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [variant, setVariant] = useState("hidden");
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    useEffect(() => {
        if (inView) {
            setVariant("visible")
        }
    }, [inView]);

    const updateSheet = () => {
        const url = 'https://script.google.com/macros/s/AKfycbyO5DB__7FssCnZI1z-kWb44Kam5KZ1sbEzRN2hc29MMWPkGrQ/exec';
        const form = document.forms['contactForm'];
        fetch(url, {method: 'POST', body: new FormData(form), mode:'no-cors'})
            .then(response => console.log('Success!', response))
            .catch(error => console.log('Error!', error.message))
    }
    
    const {handleChange, handleSubmit, values, errors} = useForm(submit, validateEmail, updateSheet);
    

    function submit() {
        setShow(false)
        setTimeout(() => {
            setShowMessage(true);
        }, 1000)
        
    }
    
    return (

        <Box variant='div' className={classes.root} id='contact'>
            <Grid container justify='center' style={{height:615}}>

                <form style={{overflow: "hidden"}} name="contactForm" id="contactForm" onSubmit={handleSubmit}>
                    <Typography className={classes.title} style={{fontFamily: "'Handlee', cursive"}}>
                        Hire or Contact Me...
                    </Typography>
                    <AnimatePresence exitBeforeEnter>      
                        {show && <motion.div
                            ref={ref}
                            variants={containerVariants}
                            initial='hidden'
                            animate={variant}
                            exit='hidden'>
                    
                        {formData.map(item => (
                            <motion.div key={item.id} variants={childVariants}>
                                <InputField className={classes.field} id={item.name} name={item.name} type="text" value={values[item.name]} onChange={(event) => handleChange(event)}
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
                                    {...(errors[item.name] && {error:true, helperText:errors[item.name]})}
                                    />
                                <br />
                            </motion.div>
                        ))}

                            <motion.div variants={childVariants}>
                                <InputField multiline={true} className={classes.field} id='Message' name='formMessage' type="text" value={values.formMessage} onChange={(event) => handleChange(event)}
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
                            </motion.div>

                            <motion.div variants={childVariants}>
                                <Button className={classes.button} endIcon={<Telegram />} fullWidth={true} variant='outlined' type="submit">
                                        Send
                                </Button>
                            </motion.div>
                        </motion.div>}

                    </AnimatePresence>

                    {showMessage && <Message />}
                </form>
            </Grid>
        </Box>

    )
}

export default Contact