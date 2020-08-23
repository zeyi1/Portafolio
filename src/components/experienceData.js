import mtsac from '../images/MSAC_Seal.png';
import mtsacBackground from '../images/mtsac-upperwalkway.jpg';
import warren from '../images/warren-logo.png';
import ucsd from '../images/UCSD-Seal.png';
import ucsdBackground from '../images/ucsd-scenery.jpg';
import tuxton from '../images/tuxton.png';
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
        year: 'August 2018',
        icons: [[python, 'Python', 'circle'], [selenium, 'Selenium', 'square'], [api, 'API', 'circle'], [jupyter, 'Jupyter', 'square'], [javascript, 'JavaScript', 'square'], [htmlicon, 'HTML', 'square'], [cssicon, 'CSS', 'square'], 
                [php, 'PHP', 'square'], [shopify, 'Shopify', 'circle'], [excel, 'Excel', 'circle'], [photoshop, 'Photoshop', 'square']],
        image: dinnerware,
        location: 'Walnut, CA',
        title: 'Software Developer',
        description: ['I worked here as a Web Developer during my first year. I developed features using new web-technologies in order to improve the front-end, and I maintained the current PHP-based CMS system and refactored the code.',
                      "During my second year, I worked as a Software Developer. I designed and deployed an automated inventory management system, which accesses both PIM Plytix and Shopify APIs to update the company's inventory reflected on daily basis sales orders.",
                      "I learnt various technologies in order to develop programs that could help automate and simplify coworkers' daily repetitive tasks.",
                      "I effectively reduced coworkers' workload and highly improved company's efficiency and throughput."]
    }
    

]

export default experienceData