import React, {useState, forwardRef, useImperativeHandle} from "react";
import ReactDOM from "react-dom";
import {AnimatePresence, motion} from 'framer-motion';

const backdrop = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
}

const modal = {
    hidden: {
        y: 1800,
        // opacity: 0
    },
    visible: {
        y: 0,
        // opacity: 1,
        transition: {delay:2, ease: 'easeInOut' }
    }
}


const Modal = forwardRef(
    (props, ref) => {
        const [display, setDisplay] = useState(false);
        
        useImperativeHandle(ref, () => {
            return {
                openModal: () => open(),
                closeModal: () => close()
            }
        });

        const open = () => {
            setDisplay(true);
        };
    
        const close = () => {
            setDisplay(false);
        };

        if (display) {
            return ReactDOM.createPortal(
                <div className="modal-wrapper">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div className="backdrop" key="backdrop" onClick={close} 
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"/>

                        <motion.div className="modal" key="modal" variants={modal}>
                            {props.children}
                        </motion.div>
                    </AnimatePresence>
                </div>, document.getElementById("modal-root"))
        }
        return null;
    }
)

export default Modal;