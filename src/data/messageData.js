const string = Array.from("Thank You ! ! !")
const string2 = Array.from("Your message was successfully submitted.")
const string3 = Array.from("I'll contact you back once I see the message !")

const textVariants = {
    before: {},
    after: { 
        transition: { 
            delayChildren: 3,
            staggerChildren: 0.1
        }
    },
}

const textVariants2 = {
    before: {},
    after: { 
        transition: { 
            delayChildren: 5,
            staggerChildren: 0.1
        }
    },
}

const textVariants3 = {
    before: {},
    after: { 
        transition: { 
            delayChildren: 9,
            staggerChildren: 0.06
        }
    },
}

const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        
          type: "spring",
        damping: 16,
        stiffness: 200,
    },
    },
}

const letterVariants2 = {
    before: {
      opacity: 0,
      x: 100,
      rotate:-270,
    },
    after: {
      opacity: 1,
      x: 0,
      rotate:0,
      transition: {
        ease: "easeInOut",
        type: "spring",
        damping: 10,
        stiffness: 80,
    },
    },
}

const letterVariants3 ={
    before: {
        opacity: 0,
        scale:5
        
    },
    after: {
        opacity: 1,
        scale:1,
        transition: {
            ease: "easeOut",
        }
        
    }
}

const messageData = [
    {
        id: 1,
        size: 30,
        fontfamily: "'Handlee', cursive",
        weight: "bold",
        style: "normal",
        color: "#000",
        margin: "50px",
        text: string,
        variant: textVariants,
        childVariant: letterVariants,
    },
    {
        id: 2,
        size: 20,
        fontfamily: "'Handlee', cursive",
        weight: "normal",
        style: "normal",
        color: "#000",
        margin: "35px",
        text: string2,
        variant: textVariants2,
        childVariant: letterVariants2,
    },
    {
        id: 3,
        size: 17,
        fontfamily: "'Handlee', cursive",
        weight: "normal",
        style: "italic",
        color: "#000",
        margin: "20px",
        text: string3,
        variant: textVariants3,
        childVariant: letterVariants3,
    },
];

export default messageData;
