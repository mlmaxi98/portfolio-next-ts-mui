import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    //SiNodeDotJs,
    SiReact,
    SiRedux,
    //SiStyledComponents,
    SiSass,
    //SiMaterialUi,
    //SiNextDotJs,
    SiPostgresql,

} from "react-icons/si";
const SiExpress = () => {
    return (
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z" />
        </svg>
    )
}
const SiSequelize = () => {
    return (
        <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path fill="#2f406a" d="M101.84,41.72V86L64.18,108.32l-.34.31V125.2l.34.32,53-30.64V33.12l-.5-.12-15,8.36.08.36" /><path fill="#2f406a" d="M26.4,86.4l37.78,21.92v17.2L10.78,94.76V33.24l.55-.08,14.91,8.67.16.5V86.4" /><path fill="#2f406a" d="M26.4 42.32L10.78 33.24 64.06 2.48l53.16 30.64-15.38 8.6L64.06 20.16 26.4 42.32M30.06 84V65.9l.41.24L45 74.59l.12.07V92.19L30.06 84M83.27 92.6V75l.1-.05L97.64 66.6l.44-.26v17.5L83.27 92.6M64.85 103.46l-.41-.42V86l.51-.18 14.27-8.32.44-.25V94.7l-14.8 8.76" /><path fill="#2f406a" d="M49.8 95.23V77.17l.41.23 14.51 8.45.12 17.61L49.8 95.23M63.29 22.94L48.48 31.7l15.05 8.76 14.8-8.64L63.29 22.94M30.06 60.36V42.55l.41 0L45 51l.12.33V68.59L30.06 60.36" /><path fill="#2f406a" d="M44.86 33.8l-14.8 8.76 15.05 8.76 14.8-8.64L44.86 33.8M83.27 69V51.7l.1-.41L97.64 43l.44.1V60.21L83.27 69" /><path fill="#2f406a" d="M83 34.21L68.22 43l15.05 8.76 14.8-8.64L83 34.21M64.85 79.85l-.41-.42V62.79l.41-.21.1-.41 14.27-8.32.44.1V71.09l-14.8 8.76" /><path fill="#2f406a" d="M49.8,71.63V53.82l.41,0,14.51,8.45.12.33V79.85L49.8,71.63" /><path fill="#2f406a" d="M64.6,45.06,49.8,53.82l15.05,8.76,14.8-8.64L64.6,45.06" />
        </svg>
    )
}
export const techs = [
    <SiHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    //<SiNodeDotJs />,
    <SiReact />,
    <SiRedux />,
    <SiSass />,
    //<SiStyledComponents />,
    //<SiMaterialUi />,
    //<SiNextDotJs />,
    <SiExpress />,
    <SiPostgresql />,
    <SiSequelize />,
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