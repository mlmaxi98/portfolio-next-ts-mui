import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiGit,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiMaterialui,
    SiNextdotjs,
    SiPostgresql,
    SiFirebase,
    SiTypescript,
    SiSass,
    SiStyledcomponents,
    SiVuedotjs,
    SiExpress,
    SiSequelize,
} from 'react-icons/si';


export const techs = [
    { name: 'html5', icon: <SiHtml5 />, },
    { name: 'ccs3', icon: <SiCss3 />, },
    { name: 'js', icon: <SiJavascript /> },
    { name: 'typescript', icon: <SiTypescript /> },
    { name: 'reactjs', icon: <SiReact /> },
    { name: 'reduxjs', icon: <SiRedux /> },
    { name: 'mui', icon: <SiMaterialui /> },
    { name: 'sass', icon: <SiSass /> },
    { name: 'styledcomponents', icon: <SiStyledcomponents /> },
    { name: 'nextjs', icon: <SiNextdotjs /> },
    { name: 'vuejs', icon: <SiVuedotjs /> },
    { name: 'nodejs', icon: <SiNodedotjs /> },
    { name: 'express', icon: <SiExpress /> },
    { name: 'postgre', icon: <SiPostgresql /> },
    { name: 'sequelize', icon: <SiSequelize /> },
    { name: 'git', icon: <SiGit /> },
    { name: 'firebase', icon: <SiFirebase /> },
]
export const myProjects = [
    {
        title: 'Arcadepedia',
        subtitle: 'Proyecto Personal',
        description: `Aplicación creada con React.js, Redux.js y SCSS en la cual puedes buscar juegos que estén disponibles
        en la API de RAWG.IO, ver sus detalles e ímagenes, filtrarlos por género y ordenarlos de distintas
        maneras.`,
        images: [
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/2M52hYV/ordenado.png',
            'https://i.ibb.co/4Vrp0RM/detalles.png'
        ],
        languages: ['React.js', 'Redux.js', 'Node.js'],
    },
    {
        title: 'Tech Store',
        subtitle: 'E-Commerce',
        description: `Desarrollo de una Aplicación usando SCRUM y aplicando las tecnologías aprendidas durante el
        cursado del Bootcamp.`,
        images: [
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/2M52hYV/ordenado.png',
            'https://i.ibb.co/4Vrp0RM/detalles.png'
        ],
        languages: ['React.js', 'Redux.js', 'Node.js'],
    },
    {
        title: 'More Trips!',
        subtitle: 'Henry Labs',
        description: `Aplicación creada con React, Redux y Styled Components para el Frontend. Esta aplicación consume
        datos de una base de datos que fueron cargados desde una API a través de un Backend creado con
        Express.`,
        images: [
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/2M52hYV/ordenado.png',
            // 'https://i.ibb.co/4Vrp0RM/detalles.png'
        ],
        languages: [
            'React.js',
            'Redux.js',
            'Node.js',
            'Sequelize',
            'PostgreSQL',
            'Styled - Components'
        ],
    },
    {
        title: 'Weather App',
        subtitle: 'Henry Bootcamp',
        description: `Aplicación creada con React, Redux y Styled Components para el Frontend. Esta aplicación consume
        datos de una base de datos que fueron cargados desde una API a través de un Backend creado con
        Express.`,
        images: [
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/2M52hYV/ordenado.png',
            'https://i.ibb.co/4Vrp0RM/detalles.png'
        ],
        languages: ['React.js', 'Redux.js', 'Node.js'],
    },
]