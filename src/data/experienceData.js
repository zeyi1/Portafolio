import mtsac from '../images/MSAC_Seal.svg';
import mtsacBackground from '../images/mtsac-upperwalkway.jpg';
import warren from '../images/warren-logo.svg';
import ucsd from '../images/UCSD-Seal.svg';
import ucsdBackground from '../images/ucsd-scenery.jpg';
import tuxton from '../images/tuxton.svg';
import dinnerware from '../images/dinnerware.jpg';
import api from '../images/api.svg';
import cpp from '../images/cpp.svg';
import cssicon from '../images/css-flat.svg';
import eclipse from '../images/eclipse.svg';
import excel from '../images/excel.svg';
import haskell from '../images/haskell.svg';
import htmlicon from '../images/html-flat.svg';
import java from '../images/java.svg';
import javascript from '../images/javascript.svg';
import jupyter from '../images/jupyter.svg';
import php from '../images/php.svg';
import python from '../images/python.svg';
import reacticon from '../images/react-icon.svg';
import selenium from '../images/selenium.svg';
import sql from '../images/sql.svg';
import xcode from '../images/xcodeicon.svg';
import postgresql from '../images/postgresql.svg';
import visualstudio from '../images/visualstudio.svg';
import shopify from '../images/shopify.svg';
import photoshop from '../images/photoshop.svg';
import uci from '../images/uci-logo.svg';
import uciBackground from '../images/uci-background.jpg';
import pytorch from '../images/pytorch.svg';
import terminal from '../images/terminal.svg';
import spring from '../images/spring.svg';
import intellij from '../images/IntelliJ.svg';


const experienceData = [
    {
        name: 'Mt. San Antonio College',
        logo: [mtsac],
        year: 'February 2013 - June 2015',
        icons: [[cpp, 'C++', 'square'], [xcode, 'Xcode', 'square'], [java, 'Java', 'circle'], [eclipse, 'Eclipse', 'circle']],
        image: mtsacBackground,
        location: 'Walnut, CA',
        title: 'Major in Computer Science',
        description: ['Started my career in this vast yet intriguing field where learning is limitless.', 'I developed a calculator application in my first programming class, and my interest in the field grew as a result.',
                      "I joined AGS, a community service club and was awarded a president's letter for collaborating with over 100 hours of service."]
    },
    {
        name: 'University of California, San Diego',
        logo: [warren, ucsd],
        year: 'September 2015 - March 2018',
        icons: [[cpp, 'C++', 'square'], [xcode, 'Xcode', 'square'], [javascript, 'JavaScript', 'square'], [reacticon, 'React', 'circle'], [htmlicon, 'HTML', 'square'], [cssicon, 'CSS', 'square'], [visualstudio, 'Visual Studio', 'circle'], 
                [sql, 'SQL', 'circle'], [postgresql, 'PostgreSQL', 'square'], [python, 'Python', 'circle'], [jupyter, 'Jupyter', 'square'], [haskell, 'Haskell', 'circle']],
        image: ucsdBackground,
        location: 'La Jolla, CA',
        title: 'Bachelor of Science in Computer Science',
        description: ['I was exposed to various fields within Computer Science, and had the opportunity to acquire theoretical and practical knowledge along the process.', 
                      'I have experience designing responsive webpages, creating and maintaining databases through ER diagrams and table schemas, building predictive models through data, and solving algorithmic problems.', 'Courses include:', 
                     ['Data Structures and Algorithms', 'Operating Systems', 'Compilers', 'Front End Design', 'Back End Design', 'Full Stack Developer', 'Machine Learning', 'Artificial Intelligence']]
    },
    {
        name: 'Tuxton China Inc.',
        logo: [tuxton],
        year: 'August 2018 - May 2021',
        icons: [[python, 'Python', 'circle'], [selenium, 'Selenium', 'square'], [api, 'API', 'circle'], [jupyter, 'Jupyter', 'square'], [javascript, 'JavaScript', 'square'], [htmlicon, 'HTML', 'square'], [cssicon, 'CSS', 'square'], 
                [php, 'PHP', 'square'], [shopify, 'Shopify', 'circle'], [excel, 'Excel', 'circle'], [photoshop, 'Photoshop', 'square']],
        image: dinnerware,
        location: 'Walnut, CA',
        title: 'Software Developer',
        description: ['I worked here as a Web Developer during my first year. I developed features using new web-technologies in order to improve the front-end, and I maintained the current PHP-based CMS system and refactored the code.',
                      "During my second year, I worked as a Software Developer. I designed and deployed an automated inventory management system, which accesses both PIM Plytix and Shopify APIs to update the company's inventory reflected on daily basis sales orders.",
                      "I learnt various technologies in order to develop programs that could help automate and simplify coworkers' daily repetitive tasks.",
                      "I effectively reduced coworkers' workload and highly improved company's efficiency and throughput."]
    },
    {
        name: 'University of California, Irvine',
        logo: [uci],
        year: 'September 2021 - December 2022',
        icons: [[python, 'Python', 'circle'], [jupyter, 'Jupyter', 'square'], [pytorch, 'PyTorch', 'circle'], [cpp, 'C++', 'circle'], [terminal, 'Terminal', 'square'], [postgresql, 'PostgreSQL', 'square'], [sql, 'SQL', 'circle'], [javascript, 'JavaScript', 'square'], 
                [reacticon, 'React', 'circle'], [visualstudio, 'Visual Studio', 'circle'], [spring, 'Spring Boot', 'circle'], [intellij, "IntelliJ IDEA", 'square']],
        image: uciBackground,
        location: 'Irvine, CA',
        title: "Master of Computer Science",
        description: ['Master of Computer Science (MCS) is a professionally fast paced oriented degree that spans across fifteen months. Every course have a project component that emphasizes a hands-on learning environment, with strong emphasis on practical applications and implementation.', 
                    'Courses include:',
                    ['Data Structures and Algorithms with Applications', 'Advance Programming and Problem Solving', 'Optimization Modeling', 'Deep Learning', 'Machine Learning and Data Mining', 'Operating Systems', 'Computer Systems Architecture', 'Databases and Data Management']]
    }
    

]

export default experienceData