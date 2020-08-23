import React from 'react';

import Particles from 'react-tsparticles';
import shuriken from '../images/shuriken.svg'
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    tsparticles:{
        top: 0,
        minHeight: '100vh'
    }
}))

const Particle = () => {
    const classes = useStyles()

    return (
        <Particles
            className={classes.tsparticles}
            options={{
            
            fpsLimit: 240,
            interactivity: {
                detectsOn: "canvas",
                events: {
                onClick: {
                    enable: true,
                    mode: ["bubble", 'push'],

                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                    parallax: {
                        enable: true,
                        smooth: 1200
                    }
                },
                
                resize: true,
                },
                modes: {
                    
                    bubble: {
                        distance: 800,
                        duration: 4,
                        opacity: 0.8,
                        size: 30,
                        push:{
                            quantity: 5
                        }
                        
                    },
                    push: {
                        quantity: 5
                    },
                    repulse: {
                        distance: 200,
                        duration: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#0f0f18", "#2a3b90", "#35393d", '#000000'],
                },
                links: {
                    color: {
                        value: ["#420D09", '#800000', '#5E1914', '#990000']
                    },
                    distance: 150,
                    enable: true,
                    opacity: 0.7,
                    width: 2,
                    shadow: {
                        enable: true,
                        color: '#000000',
                        blue: 0.8
                    },
                    triangles: {
                        enable: true,
                        color: {
                            value: ['8C59D6']
                        },
                            
                            // color: '#32CD32', '2B91D4' 2B47D4  4617D8
                        opacity: 0.2
                    },
                    // warp: true,
                    
                    
                },
                collisions: {
                    enable: true,
                    mode: 'bounce'
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "destroy",
                    speed: 3,
                    trail: {
                        enable:true,
                        length: 60,
                        fillColor: '#0E0E0E'
                        // {
                        //     value: ['#DFDFDF', '#0E0E0E']
                        // }
                    },
                },
                number: {
                    density: {
                        enable: true,
                        area: 1500
                    },
                    limit: 50,
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.2,
                        speed: 1,
                    },
                    value: 1,
                },

                shape: {
                    type: "image",
                    stroke:{
                        width: 0.5,
                        color: '#ffffff'
                    },
                    image: {
                        src: shuriken,
                        width: 500,
                        height: 500
                    }
                },
                size: {
                    random: true,
                    value: 10,
                },
                rotate:{
                    random: true,
                    animation: {
                        enable: true,
                        speed: 20,
                        sync: true
                    },
                    value:25,
                    direction: 'random'
                }
            },
            detectRetina: true,
            }}
        />
    )
}

export default Particle;