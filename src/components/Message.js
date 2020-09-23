import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {motion} from 'framer-motion';
import {Frame} from 'framer';
import messageData from '../data/messageData';


const useStyles = makeStyles({
    container: {
        position: 'relative',
        marginTop: '60px'
    },
    logo: {
        display: 'block',
        margin: 'auto',
        width: 150,
        height: 140
    },
    text: {
        textAlign: 'center'
    }
})

const svgVariants = {
    before: {},
    after: {
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 1}
    }
}

const pathVariants = {
    before: {
        opacity: 0,
        pathLength: 0
    },
    after: {
        opacity: 1,
        pathLength: 1,
        
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}


const CustomFrame = (props) => (
    <Frame
        key={props.id}
        position={"relative"}
        center={ "x" }
        height={ props.size }
        width={ "100%" }
        background={ "" }
        style={{
            fontFamily: props.fontfamily,
            fontWeight: props.weight,
            fontStyle: props.style,
            letterSpacing: "-0.0005em",
            fontSize: props.size,
            color: props.color,
            display: "flex", 
            justifyContent: "center", 
            marginTop: props.margin,
        }}
        variants={ props.variant }
        initial={ "before" }
        animate={ "after" }
    >
        {props.text.map((letter, index) => (
            <Frame
            key={ index }
            width={ "auto" } 
            height={ props.size }
            background={ "" }
            style={{ position: "relative" }}
            variants={ props.childVariant }
            >
            {letter === " " ? "\u00A0" : letter}
            </Frame>
        ))}
    </Frame>
);


const Message = (props) => {
    const classes = useStyles();

    return (
        <div style={{overflow:'hidden'}} className={classes.container}>
            <motion.svg viewBox="0 0 178 168" className={classes.logo} {...props}
                variants={svgVariants} initial="before" animate="after">
                
                <motion.path
                    fill="none"
                    stroke="#39b54a"
                    d="M136.22 29.93s-45.82-43.16-98-5.53a58.2 58.2 0 00-13.41 13.47c-11.65 16.38-31.75 55.86 6.41 97.06 0 0 50 50 105 0 0 0 34-34.35 19-76.54"
                    strokeMiterlimit={10}
                    strokeWidth={18}
                    variants={pathVariants}
                />
                <motion.path
                    fill="none"
                    stroke="#39b54a"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={20}
                    d="M45.72 71l36 35 85-84"
                    variants={pathVariants}
                />  
            </motion.svg>

            {messageData.map(data => (
                <CustomFrame key={data.id} 
                    size={data.size}
                    fontfamily={data.fontfamily}
                    weight={data.weight}
                    style={data.style}
                    color={data.color}
                    margin={data.margin}
                    text={data.text}
                    variant={data.variant}
                    childVariant={data.childVariant}
                    />
            ))}
        </div>
    )
}


export default Message;