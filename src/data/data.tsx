type Header = {
    title: string
    link: string
    icon?: React.ReactNode;
}

type Skill = {
    tech_img: string;
    name: string;
};

export type AboutProps = {
    top_title: string
    bottom_title: string
}

type history = {
    title: string;
    company?: string;
    date: string;
    name?: string;
}

export type PortfolioItem = {
    img: string;
    name: string;
    github?: string;
    demo: string;
    demoTxt?: string;
    githubTxt?: JSX.Element;
    category: string;
}

export const headerData: Header[] = [
    {
        title: "Home",
        link: "#home",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg>
    },
    {
        title: 'About',
        link: '#about',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
    },
    {
        title: "Skills",
        link: "#skills",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path><path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"></path></svg>
    },
    {
        title: "Experience",
        link: "#experience",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path></svg>
    },
    {
        title: "Portfolio",
        link: '#portfolio',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path><path d="M7 9h10v2H7zm0 4h7v2H7z"></path></svg>
    },
    {
        title: "Contact",
        link: "#contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" /></svg>
    }

];

export const skillsData: Skill[] = [
    {
        tech_img: "../images/skill_1-min.png",
        name: "HTML 5"
    },
    {
        tech_img: "../images/skill_2-min.png",
        name: "CSS 3"
    },
    {
        tech_img: "../images/skill_4-min.png",
        name: "JavaScript ES6+"
    },
    {
        tech_img: "../images/skill_10-min.png",
        name: "TypeScript"
    },
    {
        tech_img: "../images/skill_22-min.png",
        name: "Python"
    },
    {
        tech_img: "../images/skill_23-min.png",
        name: "R Programming"
    },
    {
        tech_img: "../images/skill_24-min.png",
        name: "jQuery"
    },
    {
        tech_img: "../images/skill_3-min.png",
        name: "SASS"
    },
    {
        tech_img: "../images/skill_20-min.png",
        name: "LESS"
    },
    
    {
        tech_img: "../images/skill_5-min.png",
        name: "Bootstrap 5"
    },
    {
        tech_img: "../images/skill_6-min.png",
        name: "Material UI"
    },
    {
        tech_img: "../images/skill_7-min.png",
        name: "Tailwind CSS"
    },
    {
        tech_img: "../images/skill_8-min.png",
        name: "React JS"
    },
    {
        tech_img: "../images/skill_21-min.png",
        name: "Vue JS"
    },
    {
        tech_img: "../images/skill_25-min.png",
        name: "Angular.js"
    }, 
    {
        tech_img: "../images/skill_26-min.png",
        name: "Node JS"
    },
    {
        tech_img: "../images/skill_27-min.png",
        name: "Express JS"
    },
    {
        tech_img: "../images/skill_28-min.png",
        name: "Jest"
    },
    {
        tech_img: "../images/skill_31-min.png",
        name: "Firebase"
    },
    {
        tech_img: "../images/skill_32-min.png",
        name: "MongoDB"
    },
    {
        tech_img: "../images/skill_33-min.png",
        name: "XML"
    },
    {
        tech_img: "../images/skill_12-min.png",
        name: "Rest API "
    },
    {
        tech_img: "../images/skill_13-min.png",
        name: "Git"
    },
    {
        tech_img: "../images/skill_16-min.png",
        name: "Npm"
    },
    {
        tech_img: "../images/skill_17-min.png",
        name: "Yarn"
    },
    {
        tech_img: "../images/skill_15-min.png",
        name: "Github"
    },
    {
        tech_img: "../images/skill_18-min.png",
        name: "Figma"
    },
    {
        tech_img: "../images/skill_19-min.png",
        name: "Adobe XD"
    },
    {
        tech_img: "../images/skill_29-min.png",
        name: "AutoCAD"
    },
    {
        tech_img: "../images/skill_30-min.png",
        name: "Excel"
    },
]

export const jobHistory: history[] = [
    {
        title: "Web Developer",
        company: "InvoUp | Full-time | Remote",
        date: "Nov 2022 - Present"
    },
    {
        title: "Web Developer Mentor",
        company: "DigiEduHack | Part-time | Hybrid",
        date: "Jul 2023 - Dec 2023"
    },
    {
        title: "Web Developer Internship",
        company: "Innovation and Digital Development Agency | Full-time | On-site",
        date: "May 2022 - Oct 2022"
    },
    {
        title: "Web Developer Internship",
        company: "BIRainy | Part-time | Hybrid",
        date: "Oct 2021 - Mar 2022"
    }
];

export const educationHistory: history[] = [
    {
        title: "Czech University of Life Sciences Prague",
        name: "Bachelor of Science - Data Science",
        date: "Sep 2023 - Oct 2026"
    },
    {
        title: "Azerbaijan Technical University",
        name: "Bachelor of Engineering - Electric and Electronic Engineering",
        date: "Jan 2021 - Jan 2024"
    },
    {
        title: "Istanbul Gedik University",
        name: "Technical Dgree - Software engineering",
        date: "Sep 2021 - Jun 2022"
    }
];

export const portfolio: PortfolioItem[] = [
    {
        img: "../images/port67.png",
        name: "Chameleon AI (My Startup)",
        demo: "https://chameleonai.tech/",
        demoTxt: 'Preview',
        category: "html"
    },
    {
        img: "../images/port65.png",
        name: "Job Hub Center",
        demo: "https://jobhubcenter.com/en",
        demoTxt: 'Preview',
        category: "nextJs"
    },
    {
        img: "../images/port12.png",
        name: "Medresetuzehra (Blog App)",
        github: "https://github.com/Elchin-Novruzov/Medrese-WebSite",
        demo: "https://www.medresetuzzehra.com/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "html"
    },
    {
        img: "../images/port2.png",
        name: "Makonu (Interior Design)",
        github: "https://github.com/Elchin-Novruzov/MakonuNitroTema-WebSite",
        demo: "https://makonu.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "html"
    },
    
    {
        img: "../images/port46.png",
        name: "Youtube Clone",
        github: "https://github.com/Elchin-Novruzov/Youtube-Clone-StarTube",
        demo: "https://youtube-clone-app-nextjs.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "nextJs"
    },
    // {
    //     img: "../images/port41.png",
    //     name: "Restaurant Menu",
    //     github: "https://github.com/AzarAhmadov/nextjs-restaurant-menyu",
    //     demo: "https://menuaz.vercel.app/",
    //     githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
    //     demoTxt: 'Preview',
    //     category: "nextJs"
    // },
     {
        img: "../images/port64.png",
        name: "Google Clone",
        github: "https://github.com/Elchin-Novruzov/Google-Clone",
        demo: "https://google-clone-app-nextjs.vercel.app/",
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        demoTxt: 'Preview',
        category: "nextJs"
    },
    // {
    //     img: "../images/port62.png",
    //     name: "Link App",
    //     github: "https://github.com/Elchin-Novruzov/Link-App",
    //     demo: "https://elvinnovruzov.com/",
    //     githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
    //     demoTxt: 'Preview',
    //     category: "nextJs"
    // },
    {
        img: "../images/port38.png",
        name: "Park Events",
        github: "https://github.com/Elchin-Novruzov/Park-Events-WebSite",
        demo: "https://parkevents.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "react"
    },
    {
        img: "../images/port29.png",
        name: "Viona Mebel",
        github: "https://github.com/Elchin-Novruzov/Viona-Mebel",
        demo: "https://viona-mebel.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "react"
    },
    {
        img: "../images/port48.png",
        name: "Crypto App",
        github: "https://github.com/Elchin-Novruzov/Crypto-App",
        demo: "https://crypto-app-rtk.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "react"
    },
    {
        img: "../images/port50.png",
        name: "Imagify",
        github: "https://github.com/Elchin-Novruzov/imagify",
        demo: "https://imagify0.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "react"
    },
    {
        img: "../images/port45.png",
        name: "QR Code Generator",
        github: "https://github.com/Elchin-Novruzov/QR-Code-Generator",
        demo: "https://qr-code-generator0.netlify.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "react"
    },
    {
        img: "../images/port36.png",
        name: "Weather App",
        github: "https://github.com/Elchin-Novruzov/React-WeatherApp",
        demo: "https://react-weather-app-liard.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "react",
    },
    {
        img: "../images/port18.png",
        name: "Recipe App",
        github: "https://github.com/Elchin-Novruzov/React-Food-Recipe-App",
        demo: "https://react-food-recipe-app.vercel.app/",
        demoTxt: 'Preview',
        githubTxt: <>Github <i style={{ fontSize: "22px" }} className="fa-brands fa-github"></i></>,
        category: "react"
    },
]
