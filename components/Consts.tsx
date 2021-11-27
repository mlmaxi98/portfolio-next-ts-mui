interface Tech {
    name: string;
    icon: JSX.Element;
    url: string;
}

interface Project {
    title: string;
    description: string;
    image: string;
    image2?: string;
    languages: string[];
    demo: string;
    github: string;
}

interface Network {
    icon: JSX.Element;
    name: string;
    url: string;
}

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiGit,
    SiGithub,
    SiWhatsapp,
    SiInstagram,
    SiLinkedin,
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

export const aboutMe: string[] = [
    'Desarrollador Full Stack residente en Jujuy - Argentina.',
    'Graduado del Bootcamp de Soy Henry.',
    'Amante de la programación, disfruto mucho trabajar en equipo.',
    'Puedo aportar soluciones óptimas en poco tiempo.',
    'Me encuentro reforzando conocimientos en React Native.',
    'Estoy abierto a la relocalización.',
]


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
        title: 'Portafolio',
        description: `Portafolio de proyectos personal en el cual puedes ver mis trabajos y proyectos en los cuales he trabajado, fue desarrollado con tecnologías que fui aprendiendo y reforzando a la par.`,
        image: '/port.png',
        image2: '/port2.png',
        languages: ['Next.js', 'TypeScript', 'Material UI'],
        demo: '',
        github: 'https://github.com/mlmaxi98/portfolio-next-ts-mui',
    },
    {
        title: 'Arcadepedia',
        description: `Aplicación creada con React.js, Redux.js y SCSS en la cual puedes buscar juegos que estén disponibles
        en la API de RAWG.IO, ver sus detalles e ímagenes, filtrarlos por género y ordenarlos de distintas
        maneras.`,
        image: '/arcadepedia.png',
        languages: ['React.js', 'Redux.js', 'SCSS'],
        demo: 'https://arcadepedia-maxi.web.app/',
        github: 'https://github.com/mlmaxi98/Arcadepedia',
    },
    {
        title: 'Tech Store',
        description: `Desarrollo de una Aplicación usando SCRUM y aplicando las tecnologías aprendidas durante el 
        cursado del Bootcamp. Desarrollé mis actividades como Frontend Developer, usando SCSS para la estilización de sus componentes.`,
        image: '/techstore2.png',
        image2: '/techstore.png',
        languages: ['React.js', 'Redux.js', 'SCSS', 'Supabase'],
        demo: 'https://henrystechstore.web.app/',
        github: '',
    },
    {
        title: 'More Trips!',
        description: `Aplicación con la cual podras consultar información de múltiples paises, ordenarlo y filtrarlos, así como también crear actividades en ellos que son cargados en una base de datos.`,
        image: '/moretrips.png',
        languages: [
            'React.js',
            'Redux.js',
            'Styled - Components',
            'Node.js',
            'Express.js',
            'Sequelize',
            'PostgreSQL',
        ],
        demo: 'https://maxi-countries.web.app/',
        github: 'https://github.com/mlmaxi98/More-Trips',
    },
    {
        title: 'Weather App',
        description: `Aplicación sencilla creada con React y SCSS con la cual podrás consultar el estado clímatico de muchas ciudades (En reparación)`,
        image: '/clima.png',
        languages: ['React.js', 'SCSS'],
        demo: 'https://weather-app-914dd.web.app/',
        github: 'https://github.com/mlmaxi98/Weather-App',
    },
]

export const networks: Network[] = [
    { name: 'Github', icon: <SiGithub />, url: 'https://github.com/mlmaxi98' },
    { name: 'Linked In', icon: <SiLinkedin />, url: 'https://www.linkedin.com/in/joaquin-cardozo/' },
    { name: 'Whatsapp', icon: <SiWhatsapp />, url: 'http://wa.me/5493884641203' },
    { name: 'Instagram', icon: <SiInstagram />, url: 'https://www.instagram.com/mlmaxi98/' },
]