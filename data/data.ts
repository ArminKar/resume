export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface IWork {
    description: string[];
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: string;
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
}

export interface IProject {
    name: string;
    icon: string;
    link: string;
}


export interface ILanguage {
    name: string;
    icon: string;
    level: string;
}

export interface ISocial {
    name: string;
    icon: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    skills: ISkill[];
    projects: IProject[];
    languages: ILanguage[];
    socials: ISocial[];
}

const Resume: IResume = {
    introduction: {
        name: "Arminas Karinauskis",
        avatar: "./images/Armin.jpg",
        location: "Šiauliai, Lithuania",
        description: "Currently learning next.js and typescript.",
        position: "Looking for web developer intern/junior opportunities"
    },
    experience: [
        {
            description: [
                'Since I don`t have any prior work experience in IT field, I`m publishing projects that I developed while learning, you can find them in my Github and Codepen accounts.',
                'I`m sure they are nothing special, but its easy to see that there is imporovment from where my journey began, but I want to make a step forward and improve even more by completing a internship.',
                'My strenghts in school always were physics and math. Also went to IT classes till my final year. Those three subjects were accompanying me along for all my life.',
                'If you hire me you can expect fast transitioning from me, as I was introduced with computers at very young age and have experience with game servers, websites and fixing computer hardware and software problems.',
                'Hope this is enough for you to even consider me for a Internship and I`m really looking forward to an interview!'
            ]
           
        }
    ],
    education: [
        { name: 'FreeCodeCamp.org', logo: './images/freecodecamp.jpg', title: 'JavaScript Algorithms and Data Structures', duration: '2022'},
        { name: 'FreeCodeCamp.org', logo: './images/freecodecamp.jpg', title: 'Responsive Web Design', duration: '2022' },
        { name: 'bfw - unternehmen für Bildung', logo:'./images/bfw.png', title: 'BKM Module', duration: '2020-2021'},
        { name: 'Kolping College', logo:'./images/kolping.jfif', title: 'Ecotourism', duration: '2015-2016' },
        { name: 'Lieporiu Gymnasium', logo: './images/Gymnasium.png', title: 'Maturity Certificate', duration: '2013-2015' },
    ],
    skills: [
        { name: 'Javascript', icon: 'https://cdn.svgporn.com/logos/javascript.svg'},
        { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg'},
        { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'},
        { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg'},
        { name: 'Nextjs', icon: 'https://cdn.svgporn.com/logos/nextjs.svg'},
        { name: 'Firebase', icon: 'https://cdn.svgporn.com/logos/firebase.svg'},
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg'},
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg'},
    ],
    projects: [
        { name: 'd16ope on Vanilla', icon: 'https://cdn.svgporn.com/logos/javascript.svg', link: 'https://arminkar.github.io/vanilla-e-shop'},
        { name: 'd16ope on Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg', link: 'https://ecoreact.vercel.app/'},
        { name: 'Random Quote Machine', icon: 'https://cdn.svgporn.com/logos/javascript.svg', link: 'https://codepen.io/arminas-karinauskis/full/ZEaOgjQ'},
        { name: 'Calculator', icon: 'https://cdn.svgporn.com/logos/javascript.svg', link: 'https://codepen.io/arminas-karinauskis/full/gOogRKX'},
        { name: 'Drum Machine', icon: 'https://cdn.svgporn.com/logos/javascript.svg', link: 'https://codepen.io/arminas-karinauskis/full/poOzENP'},
    ],
    languages: [
        {
            name: 'English',
            icon: 'https://www.onlygfx.com/wp-content/uploads/2022/03/flag-of-top-countries-round-3d-button-2.png',
            level: 'Full Professional Working Proficiency'
        },
        {
            name: 'Lithuanian',
            icon: 'https://www.onlygfx.com/wp-content/uploads/2022/03/flag-of-eu-countries-round-3d-button-15.png',
            level: 'Native Proficiency'
        },
        {
            name: 'German',
            icon: 'https://www.onlygfx.com/wp-content/uploads/2022/03/flag-of-eu-countries-round-3d-button-set-two-7.png',
            level: 'Limited Working Proficiency'
        },
        {
            name:'Russian',
            icon: 'https://www.onlygfx.com/wp-content/uploads/2022/03/flag-of-top-countries-round-3d-button-7.png',
            level: 'Limited Working Proficiency'
        }
    ],
    socials: [
        { name: 'Linkedin', icon: 'https://cdn.svgporn.com/logos/linkedin-icon.svg', link: 'https://www.linkedin.com/in/arminas-karinauskis-988674230/' },
        { name: 'Github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/ArminKar' },
        { name: 'Karinauskis@gmail.com', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:karinauskis@gmail.com' },
        { name: 'Facebook', icon: 'https://cdn.svgporn.com/logos/facebook.svg', link: 'https://www.facebook.com/arminas.karinauskis' },
        { name: 'Codepen', icon: 'https://cdn.svgporn.com/logos/codepen-icon.svg', link: 'https://codepen.io/arminas-karinauskis'},
    ]
};

export default Resume;