import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    tripsmobile,
    hotels,
    clothing,
    html,
    css,
    reactjs,
    iphones,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    flutter,
    tripguide,
    bootstrap,
    threejs,
    pmgraves,
    quick,
    phones,
    mgijima,
    ipart,
    icepop
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: backend,
    },

    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

    {
      name:"Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: 'python',
      icon: git,
    },
    
    {
      name: "figma",
      icon: figma,
    },
  ];
  

  
  const projects = [
    // {
    //   name: 'Trip Tips',
    //   description:
    //     "Travel blog that provides users with the latest travel ideas and also travel guides. ",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },

    //   ],
    //   image: tripsmobile,
    //   link: "http://Kamva-pro.github.io/Trip-tips",
    // },
 
    {
      name: "PM Grave Closures",
      description:
      "Soweto based Grave Closure business that specializes in the maintenance of graves..",
      tags: [
        {
          name: "html #css #javascript",
          color: "blue-text-gradient"
        }
      ],
      image: pmgraves,
      link: "https://pmgraveclosures.netlify.app/"
    },
    {
      name: "PhoneXchange",
      description:
        "An online phone shop that sells affordable top quality mobile phones",
      tags: [
        {
          name: "HTML/CSS #bootstrap #javascript",
          color: "blue-text-gradient",
        },

      ],
      image: phones,
      link: "https://phonexchange.company.site",
    },
    {
      name: "Quick-Connect App",
      description: "A simple solution to networking - creating digital business cards",
      tags: [
        {
          name: "html #css #javascript #firebase #express",
          color: "blue-text-gradient"
        }
      ],
      image: quick,
      link: "https://quick-connect.netlify.app",
    },
    {
      name: "Mgijima",
      description: "A local NPO which provides assistance for schools and organisations in need.",
      tags: [
        {
          name: "html #css #firebase #javascript",
          color: "blue-text-gradient"
        }
      ],
      image: mgijima,
      link: "https://mgijima.netlify.app"
    },
  {
      name: "iPart",
      description: "Part is an e-commerce platform specializing in Apple products.",
      tags: [
          {
            name: "wordpress #woocommerce #php",
            color: "blue-text-gradient"
          }
          ],
      image: ipart,
      link: "https://ipart.co.za"
  },

  {
    name: "icePopCo",
    description: "icepopco is an e-commerce website which sells icepops. ",
    tags: [
        {
          name: "wordpress #woocommerce #php",
          color: "blue-text-gradient"
        }
        ],
    image: icepop,
    link: "https://icepopco.co.za"
}

  ];
  
  export { services, technologies, experiences, testimonials, projects };
