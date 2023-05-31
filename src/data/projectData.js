import postgresql from '../images/postgresql.svg';
import sql from '../images/sql.svg';
import er from '../images/er.png';
import er2 from '../images/er2.png';
import mist from '../images/mist.png';
import mist2 from '../images/mist2.png';
import front from '../images/front.png';
import dashboard from '../images/dashboard.png';
import kanban from '../images/kanban.png';
import ticket from '../images/ticket.png';
import reacticon from '../images/react-icon.svg';
import spring from '../images/spring.svg';
import intellij from '../images/IntelliJ.svg';
import python from '../images/python.svg';
import javascript from '../images/javascript.svg';
import pytorch from '../images/pytorch.svg';
import jupyter from '../images/jupyter.svg';
import monet from '../images/monet.png';
import photo from '../images/photo.png';
import architecture from '../images/architecture.png';
import count from '../images/count.png';
import loss from '../images/loss.png';
import result from '../images/result.png';
import result2 from '../images/result2.png';
import sharingan from '../images/sharingan.png';
import illustrator from '../images/illustrator.png';
import gsap from '../images/gsap.svg';
import pixi from '../images/pixi.png';
import glsl from '../images/glsl.svg';
import animals from '../images/animals.png';
import dataset from '../images/dataset.png';
import arch from '../images/arch.png';
import heatmap from '../images/heatmap.png';
import selenium from '../images/selenium.svg';
import isla from '../images/Isla.jpg';

const projectData = [
    {
        image: [{name: er, altn: 'er'}, {name: er2, altn: 'er2'}],
        imgAlt: 'E-R Diagram',
        title: 'Interchange.com',
        description: ['Developed and refined an E-R schema diagram to model a peer-to-peer e-commerce website.',
                      'Used PostgreSQL to design the corresponding relational schema and applied normalization to minimize data redundancy.',
                      'Analyzed the queries plan and built indexes on various relations to speed up query search time.'],
        skills: [[postgresql, 'PostgreSQL', 'square'], [sql, 'SQL', 'circle']]

    },
    {
        image: [{name: mist, altn: 'M.I.S.T.'}, {name: mist2, altn: 'MIST2'}, {name: front, altn: 'Home Page'}, {name: dashboard, altn: 'Dashboard'}, {name: kanban, altn: 'Kanban Board'}, {name: ticket, altn: "Ticket"}],
        imgAlt: 'Project Pamphlet',
        title: 'M.I.S.T. Manage Improve Search Train',
        description: ["An aggregated platform with both a centralized management tool to track multiple projects' progress, and a powerful one-stop search engine to find any information within a company's repository.",
                      "Used TF-IDF and latent semantic analysis to preprocess search queries in order to provide relevant search results.",
                      "Built using microservices infrastructure for continuous integration." ],
        skills: [[javascript, 'JavaScript', 'square'], [reacticon, 'React', 'circle'], [python, 'Python', 'circle'], [spring, 'Spring Boot', 'circle'], [sql, 'SQL', 'circle'], [intellij, "IntelliJ IDEA", 'square']]
    },
    {
        image: [{name: result2, altn: 'Result2'}, {name: monet, altn: 'Monet'}, {name: photo, altn: 'Photo'}, {name: architecture, altn: 'Architecture'}, {name: count, altn: 'Count'}, {name: loss, altn: 'Loss'}, {name: result, altn: 'Result'}],
        imgAlt: 'A.I. Project',
        title: 'Photo-to-Monet',
        description: ['A generative adversarial network that is able to convert photographic images into Monet-style images.',
                      'Built using a CycleGAN architecture consisting of two generators and two discriminators.',
                      'Applied data preprocessing, data augmentation, hyperparameters fine tuning, and performance validation'],
        
        skills: [[python, 'Python', 'circle'],  [pytorch, 'PyTorch', 'circle'], [jupyter, 'Jupyter', 'square']]
    },
    {
        image: [{name: sharingan, altn: 'Sharingan'}],
        imgAlt: 'Sharingan Animation',
        title: 'Mangekyou Sharingan Animation',
        description: ['Created an animation based off the anime Naruto. This project animates the evolution of Sharingan and displays its powers.',
        'The artwork was sketched as an SVG using Adobe Illustrator.',
        'Used GSAP animation library in React.js to create animated timelines.',
        'Plan to use GLSL to create shaders that illustrate the Mangekyou Sharingan abilities, and use PIXI.js as a renderer.'],
        url: "https://codesandbox.io/s/confident-violet-lywmu",
        skills: [[javascript, 'JavaScript', 'square'], [reacticon, 'React', 'circle'], [illustrator, 'Illustrator', 'square'], [gsap, 'GSAP'], [glsl, 'GLSL', 'circle'], [pixi, 'Pixi', 'square']]
    },
    {
        image: [{name: animals, altn: 'Animals'}, {name: dataset, altn: 'Dataset'}, {name: arch, altn: 'Arch'}, {name: heatmap, altn: 'Heatmap'}],
        imgAlt: 'Convolutional Neural Network',
        title: 'Multi-Class Animal Classification',
        description: ['This project aims to create a deep learning model with the ability to classify ten different animal species.',
        'The goal of the model is to extract key features and patterns from images that are unique to each animal, advancing from the detection of simple shapes such as lines, to complex specific objects like eyes.',
        'The model was built by referencing the VGG16 architecture.'],
        
        skills: [[python, 'Python', 'circle'],  [pytorch, 'PyTorch', 'circle'], [jupyter, 'Jupyter', 'square']]
    },
    {
        image: [{name: isla, altn: 'Isla'}],
        imgAlt: 'Isla',
        title: 'Personal Web Scraper',
        description: ["Ethically scraped products with discounted price at a reasonable rate and notify myself through Simple Mail Transfer Protocol.", 'Used multithreading for concurrent data retrieval from various websites.', 'Used Gmail API as emailing service.'],
        skills: [[python, 'Python', 'circle'], [selenium, 'Selenium', 'square'], [jupyter, 'Jupyter', 'square']]
    }
]

export default projectData