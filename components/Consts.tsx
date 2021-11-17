interface Tech {
    name: string;
    icon: JSX.Element;
    url: string;
}

interface Project {
    title: string;
    description: string;
    images: string[];
    languages: string[];
    demo: string | undefined;
    github: string | undefined;
}

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
    SiTypescript,
    SiSass,
    SiStyledcomponents,
    SiVuedotjs,
    SiExpress,
    SiSequelize,
    SiQuasar,
    SiGraphql
} from 'react-icons/si';


export const techs: Tech[] = [
    { name: 'HTML 5', icon: <SiHtml5 />, url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
    { name: 'CSS 3', icon: <SiCss3 />, url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
    { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
    { name: 'React js', icon: <SiReact />, url: 'https://reactjs.org/' },
    { name: 'React Native', icon: <SiReact />, url: 'https://reactnative.dev/' },
    { name: 'Redux js', icon: <SiRedux />, url: 'https://redux.js.org/' },
    { name: 'Material UI', icon: <SiMaterialui />, url: 'https://mui.com/' },
    { name: 'SASS', icon: <SiSass />, url: 'https://sass-lang.com/' },
    { name: 'Styled Components', icon: <SiStyledcomponents />, url: 'https://styled-components.com/' },
    { name: 'Next js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
    { name: 'Vue js', icon: <SiVuedotjs />, url: 'https://vuejs.org/' },
    { name: 'Quasar', icon: <SiQuasar />, url: 'https://quasar.dev/' },
    { name: 'Node js', icon: <SiNodedotjs />, url: 'https://nodejs.org/' },
    { name: 'Express js', icon: <SiExpress />, url: 'https://expressjs.com/' },
    { name: 'GraphQL', icon: <SiGraphql />, url: 'https://graphql.org/' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, url: 'https://www.postgresql.org/' },
    { name: 'Sequelize', icon: <SiSequelize />, url: 'https://sequelize.org/' },
    { name: 'Git', icon: <SiGit />, url: 'https://git-scm.com/' },
]
export const myProjects: Project[] = [
    {
        title: 'Arcadepedia',
        description: `Aplicación creada con React.js, Redux.js y SCSS en la cual puedes buscar juegos que estén disponibles
        en la API de RAWG.IO, ver sus detalles e ímagenes, filtrarlos por género y ordenarlos de distintas
        maneras.`,
        images: [
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/2M52hYV/ordenado.png',
            'https://i.ibb.co/4Vrp0RM/detalles.png'
        ],
        languages: ['React.js', 'Redux.js', 'SCSS'],
        demo: undefined,
        github: undefined,
    },
    {
        title: 'Tech Store',
        description: `Desarrollo de una Aplicación usando SCRUM y aplicando las tecnologías aprendidas durante el
        cursado del Bootcamp.`,
        images: [
            'https://i.ibb.co/4Vrp0RM/detalles.png',
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/2M52hYV/ordenado.png',
        ],
        languages: ['React.js', 'Redux.js', 'Node.js', 'SCSS', 'Supabase'],
        demo: undefined,
        github: undefined,
    },
    {
        title: 'More Trips!',
        description: `Aplicación creada con React, Redux y Styled Components para el Frontend. Esta aplicación consume
        datos de una base de datos que fueron cargados desde una API a través de un Backend creado con
        Express.`,
        images: [
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/2M52hYV/ordenado.png',
        ],
        languages: [
            'React.js',
            'Redux.js',
            'Styled - Components',
            'Node.js',
            'Sequelize',
            'PostgreSQL',
        ],
        demo: undefined,
        github: undefined,
    },
    {
        title: 'Weather App',
        description: `Aplicación creada con React, Redux y Styled Components para el Frontend. Esta aplicación consume
        datos de una base de datos que fueron cargados desde una API a través de un Backend creado con
        Express.`,
        images: [
            'https://i.ibb.co/2M52hYV/ordenado.png',
            'https://i.ibb.co/NrKRRht/Countries-APP-images.png',
            'https://i.ibb.co/4Vrp0RM/detalles.png'
        ],
        languages: ['React.js', 'Redux.js', 'SCSS'],
        demo: undefined,
        github: undefined,
    },
]