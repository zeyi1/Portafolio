import geisel from '../images/Isla.jpg';
import php from '../images/php.svg';
import python from '../images/python.svg';
import pytorch from '../images/react-icon.svg';
import selenium from '../images/selenium.svg';
import xcode from '../images/xcodeicon.svg';


const projectData = [
    {
        image: geisel,
        imgAlt: 'Sharingan Animation',
        title: 'Mangekyou Sharingan Animation',
        description: ['Created an animation based off the anime Naruto. This project animates the evolution of Sharingan and displays its powers.',
        'I design the SVG using Adobe Illustrator.',
        'The animation was done with GSAP in React.js',
        'I used GLSL to create shaders and PIXI.js to render them.'],
        skills: [[xcode, 'JavaScript'], [selenium, 'React'], [pytorch, 'GSAP'], [pytorch, 'Pixi'], [pytorch, 'Illustrator']]
    },
    {
        image: geisel,
        imgAlt: 'Convolutional Neural Network',
        title: 'CNN - Classify Animals',
        description: ['Used PyTorch to create a GAN for anime faces.',
        'Used this specific model make research',
        'Apply the following optimizations.',
        'The final accuracy and loss.',
        'Used a library name to scrape and recognize anime faces on Donboori.',
        'Data normalization?','Using 1GB of anime characters, cropping only the faces, apply rotation, etc', 'jkflasd; fejaiwd ds fajaowe a feaw f ds a dfasioewajpro eaw rawpoejds cndsafnspoida ewarjeiowjdoisnfda eiowardsn dsckfdksajfewoia dsjaoifjawe'],
        skills: [[php, 'PHP'], [python, 'python'], [pytorch, 'React'], [selenium, 'Selenium']]
    },
    {
        image: geisel,
        imgAlt: 'Generative Adversarial Network',
        title: 'Anime Girl Faces GAN',
        description: ['Using 1GB of anime characters, cropping only the faces, apply rotation, etc', 'jkflasd; fejaiwd ds fajaowe a feaw f ds a dfasioewajpro eaw rawpoejds cndsafnspoida ewarjeiowjdoisnfda eiowardsn dsckfdksajfewoia dsjaoifjawe'],
        skills: [[php, 'PHP'], [python, 'python'], [pytorch, 'React'], [selenium, 'Selenium']]
    },
    {
        image: geisel,
        imgAlt: 'Generative Adversarial Network',
        title: 'Anime Girl Faces GAN 2',
        description: ['Using 1GB of anime characters, cropping only the faces, apply rotation, etc', 'jkflasd; fejaiwd ds fajaowe a feaw f ds a dfasioewajpro eaw rawpoejds cndsafnspoida ewarjeiowjdoisnfda eiowardsn dsckfdksajfewoia dsjaoifjawe'],
        skills: [[php, 'PHP'], [python, 'python'], [pytorch, 'React'], [selenium, 'Selenium']]
    }
]

export default projectData