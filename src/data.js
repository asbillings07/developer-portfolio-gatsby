import random1 from './images/random-quote01.jpg'
import random2 from './images/random-quote02.jpg'
import random3 from './images/random-quote03.jpg'
import api1 from './images/api-app01.jpg'
import api2 from './images/api-app02.jpg'
import api3 from './images/api-app03.jpg'
import course1 from './images/courseshare01.jpg'
import course2 from './images/courseshare02.jpg'
import course3 from './images/courseshare03.jpg'
import gallery1 from './images/gallery01.jpg'
import gallery2 from './images/gallery02.jpg'
import gallery3 from './images/gallery03.jpg'
import interactive1 from './images/interactive-form01.jpg'
import interactive2 from './images/interactive-form02.jpg'
import library1 from './images/library01.jpg'
import library2 from './images/library02.jpg'
import library3 from './images/library03.jpg'
import pagination1 from './images/pagination01.jpg'
import pagination2 from './images/pagination02.jpg'
import pagination3 from './images/pagination03.jpg'
import phrase1 from './images/phrase-game01.jpg'
import phrase2 from './images/phrase-game02.jpg'
import phrase3 from './images/phrase-game03.jpg'
import scoreboard1 from './images/scoreboard01.jpg'
import scoreboard2 from './images/scoreboard02.jpg'
import scoreboard3 from './images/scoreboard03.jpg'
import recommendit1 from './images/recommendit01.jpg'
import recommendit2 from './images/recommendit02.jpg'
import recommendit3 from './images/recommendit03.jpg'
import recommendit4 from './images/recommendit04.jpg'

export const data = {
  projects: [
    {
      id: 0,
      project_name: 'Recommendit!',
      description:
        'An App that allows you to find and share cool places to your friends',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'NodeJs',
        'React',
        'Express',
        'React-Bootstrap',
        'styled-componets',
        'PostGreSQL',
        'JWT',
        'Google Maps API',
        'Jest',
        'React Testing Library'
      ],
      live_link: 'https://recommendit.netlify.com/',
      github_link: 'https://github.com/asbillings07/recommendation_app',
      image_urls: [
        `${recommendit1}`,
        `${recommendit2}`,
        `${recommendit3}`,
        `${recommendit4}`
      ],
      isFlipped: false
    },
    {
      id: 1,
      project_name: 'CourseShare',
      description:
        'A Full Stack App that allows users to view, create, update and delete courses.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'SQL',
        'Node',
        'Sequelize ORM',
        'REST API',
        'Express',
        'React',
        'bcrypt',
        'basic-auth',
        'Fetch API',
        'Axios'
      ],
      live_link: 'https://courseshare.netlify.com',
      github_link:
        'https://github.com/asbillings07/full-stack-react-with-restapi',
      image_urls: [`${course1}`, `${course2}`, `${course3}`],
      isFlipped: false
    },
    {
      id: 2,
      project_name: 'React Scoreboard',
      description:
        'A scoreboard for tracking points in a game of your choice, it also includes a timer',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      live_link: 'https://readysetscore.netlify.com/',
      github_link: 'https://github.com/asbillings07/react-scoreboard-app',
      image_urls: [`${scoreboard1}`, `${scoreboard2}`, `${scoreboard3}`],
      isFlipped: false
    },
    {
      id: 3,
      project_name: 'SQL Library Manager',
      description:
        'A library manager where you can create, view, update and delete books.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'SQL',
        'Node',
        'Sequelize ORM',
        'Pug',
        'Express'
      ],
      live_link: 'https://sql-library-app.herokuapp.com/books',
      github_link: 'https://github.com/asbillings07/sql_library_manager',
      image_urls: [`${library1}`, `${library2}`, `${library3}`],
      isFlipped: false
    },
    {
      id: 4,
      project_name: 'React Gallery App',
      description: 'A flickr type clone app with the flickr API.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Axios',
        'Fetch API'
      ],
      live_link: 'https://gallerize.netlify.com/',
      github_link: 'https://github.com/asbillings07/react_gallery_app',
      image_urls: [`${gallery1}`, `${gallery2}`, `${gallery3}`],
      isFlipped: false
    },
    {
      id: 5,
      project_name: 'Employee Directory',
      description:
        'An employee directory app created by communicating with a third-party API.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'JQuery',
        'AJAX',
        'Fetch API'
      ],
      live_link: 'https://public-api-request.netlify.com/',
      github_link: 'https://github.com/asbillings07/public_api_requests',
      image_urls: [`${api1}`, `${api2}`, `${api3}`],
      isFlipped: false
    },
    {
      id: 6,
      project_name: 'Phrase Game',
      description: "A browser-based, word guessing game: 'Jedi Hunter.'",
      technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'OOP'],
      live_link: 'https://jedi-hunter-game.netlify.com/',
      github_link: 'https://github.com/asbillings07/oop_game-v2',
      image_urls: [`${phrase1}`, `${phrase2}`, `${phrase3}`],
      isFlipped: false
    },
    {
      id: 7,
      project_name: 'Interactive Form',
      description:
        'A form enhanced with JavaScript so that it’s engaging, interactive, and easy to use',
      technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
      live_link: 'https://interactive-form.netlify.com/',
      github_link: 'https://github.com/asbillings07/js-interactive-form',
      image_urls: [`${interactive1}`, `${interactive2}`],
      isFlipped: false
    },
    {
      id: 8,
      project_name: 'Pagination App',
      description:
        'An app that displays 10 students on one page and provides navigation to jump to a list of more items.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://list-pagination-app.netlify.com/',
      github_link:
        'https://github.com/asbillings07/list_pagination_and_filtering-v1',
      image_urls: [`${pagination1}`, `${pagination2}`, `${pagination3}`],
      isFlipped: false
    },
    {
      id: 9,
      project_name: 'Random Quote Generator',
      description:
        'A program that displays a randomly selected quote each time the user clicks a button',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://random-quotes-generator.netlify.com/',
      github_link: 'https://github.com/asbillings07/random-quote-generator',
      image_urls: [`${random1}`, `${random2}`, `${random3}`],
      isFlipped: false
    }
  ]
}
