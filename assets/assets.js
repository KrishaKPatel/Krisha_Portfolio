import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import Angular from './Angular.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import css from './css.png';
import Django from './Django.png';
import Express from './Express.png';
import GitHub from './GitHub.png';
import html from './html.png';
import javascript from './javascript.png';
import MySQL from './MySQL.png';
import Next from './Next.js.png';
import Node from './Node.js.png';
import Nuxt from './Nuxt JS.png';
import PHP from './PHP.png';
import PostgresSQL from './PostgresSQL.png';
import Postman from './Postman.png';
import ReactB from './React Bootstrap.png';
import react from './react.png';
import Slack from './Slack.png';
import SQLite from './SQLite.png';
import tailwindcss from './Tailwind CSS.png';
import vue from './vue.png';
import WordPress from './WordPress.png';
import bill from './bill-generator.png';
import notes from './notes1.jpg';
import pharmacy from './pharmacy.png';
import emp from './emp1.jpg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    Angular,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    css,
    Django,
    Express,
    GitHub,
    html,
    javascript,
    MySQL,
    Next,
    Node,
    Nuxt,
    PHP,
    PostgresSQL,
    Postman,
    ReactB,
    react,
    Slack,
    SQLite,
    tailwindcss,
    vue,
    WordPress,
    notes,
    bill,
    pharmacy,
    emp,
};

export const workData = [
    {
        title: 'Notes App',
        bgImage: assets.notes, 
        link: 'https://github.com/KrishaKPatel/notes'
    },
    {
        title: 'Bill Generator',
        bgImage: assets.bill,
        link: 'https://github.com/KrishaKPatel/billgenerator',
    },
    {
        title: 'Pharmacy',
        bgImage: assets.pharmacy,
        link: 'https://github.com/KrishaKPatel/Pharmacy',
    },
    {
        title: 'Employee',
        bgImage: assets.emp,
        link: 'https://github.com/KrishaKPatel/employe-management',
    },
]

export const experienceData = [
    {
        title: 'Full-Stack Developer',
        company: 'FedEx',
        location: 'Remote',
        dates: 'May 2024 – Present',
        description: [
            'Built and maintained responsive web applications using React.js, focusing on clean, user-friendly interfaces and improving performance across all devices.',
            'Styled and optimized UI with Tailwind CSS and React Bootstrap, ensuring smooth, consistent designs and a seamless user experience.',
            'Upgraded legacy HTML, CSS, and JavaScript applications to modern React components, enhancing performance and accessibility while reducing load times by 15%.',
            'Integrated RESTful APIs seamlessly, handling authentication securely with JWT and OAuth to ensure smooth user experiences and data protection.',
            'Debugged and optimized frontend applications, fixing UI glitches, improving load times, and enhancing overall responsiveness, leading to a 20% increase in efficiency.',
            'Deployed applications on Heroku and Netlify, collaborating with DevOps teams to streamline CI/CD pipelines using Git and GitHub, ensuring faster and more reliable deployments.',
            'Worked in Agile teams, actively participating in sprint planning, stand-ups, and retrospectives, while staying organized and improving workflow efficiency with Jira and Slack.',
        ],
    },
    {
        title: 'Full-stack developer intern',
        company: 'American Dog Society',
        location: 'Remote, US',
        dates: 'Feb 2024 – May 2024',
        description: [
            'Assisted in building a React.js web app to display dog-friendly scores for homes, improving user experience with an interactive and responsive UI.',
            'Integrated RESTful APIs to fetch real-time Dog Score data and helped troubleshoot API response issues for seamless data display.',
            'Contributed to interactive maps and search features, making it easier for users to find parks, vet clinics, and pet-friendly locations.',
            'Worked with React Context API / Redux for state management and collaborated with backend developers and UI/UX designers to refine the app’s design and functionality.',
        ],
    },
    {
        title: 'Full-Stack Developer',
        company: 'Tera Innovators',
        location: 'Ahmedabad, India',
        dates: 'Jun 2019 – Nov 2022',
        description: [
            'Built and optimized scalable web applications using React.js, Node.js, Express.js, MongoDB, and MySQL, designing RESTful APIs and improving system performance by 25%.',
            'Focused on writing clean, efficient code and integrating JWT and OAuth authentication for secure user access.',
            'Developed intuitive and responsive front-end interfaces using React.js and React Bootstrap ensuring a seamless user experience and increasing engagement by 30%. Leveraged Tailwind CSS and React Bootstrap to enhance design consistency and performance.',
            'Worked closely with UI/UX designers and product managers to translate ideas into functional applications, improving development efficiency by 15%. Used Jira, Trello, and Figma to keep projects organized and on track.',
            'Enhanced SEO and database management, optimizing site performance and structure to increase search rankings and traffic by 35%. Managed MongoDB, MySQL, and PostgreSQL databases to ensure data security, consistency, and accessibility.',
            'Led Agile development practices, participating in sprint planning, daily stand-ups, and retrospectives, ensuring smooth collaboration and timely project delivery. Adapted quickly to changes, keeping development aligned with business needs.',
            'Maintained version control and streamlined deployments, using Git, GitHub, and Docker to manage code efficiently and ensure smooth CI/CD workflows. Regularly tested and debugged APIs with Postman to ensure seamless integrations.',
        ],
    },
];


export const infoList = [
    { title: 'Experience', description: 'Full-Stack Developer, Tera Innovators (2019 - 2022):Designed and developed a School Admin Dashboard using the MERN stack with role-based authentication, responsive UI, RESTful APIs, and multilingual support. Optimized code performance and implemented SEO strategies.elliJ IDEA, PyCharm, Visual Studio Code, Postman API, Tableau' },
    {title: 'Education', description: "1. Master's in Computer Science| University of New Haven<br /><br />2. Bachelor's in Computer Science| Gujarat Technological University"  },
];

export const toolsData = [
    assets.Angular,
    assets.css,
    assets.Django,
    assets.Express,
    assets.figma,
    assets.firebase,
    assets.GitHub,
    assets.git,
    assets.html,
    assets.javascript,
    assets.mongodb,
    assets.MySQL,
    assets.Next,
    assets.Node,
    assets.Nuxt,
    assets.PHP,
    assets.PostgresSQL,
    assets.Postman,
    assets.ReactB,
    assets.react,
    assets.Slack,
    assets.SQLite,
    assets.tailwindcss,
    assets.vscode,
    assets.vue,
    assets.WordPress,
];
