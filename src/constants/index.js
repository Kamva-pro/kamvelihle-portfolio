import { color } from "framer-motion";
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
    matebets,
    icepop,
    kasi_1,
    kasi_2,
    kasi_3, 
    cv
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
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
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
      name: 'Trip Tips',
      description:
        "Travel blog with ideas and insights on cool places to visit all around the world. ",
      tags: [
        {
          name: "react #bootstrap",
          color: "blue-text-gradient",
        },

      ],
      image: tripsmobile,
      link: "http://Kamva-pro.github.io/Trip-tips",
    },
  
    /*{
      name: "Mate Bets",
      description: "An interactive chess betting website",
      tags: [
        {
          name: "react #express.js #axios #supabase #firebase" ,
          color: "blue-text-gradient"
        }
      ],
      image: matebets,
      link: "https://github.com/Kamva-pro/mate-bets"
    }, */
    {
      name: "Kasi IN",
      description: "A kasi food delivery service app",
      tags: [
        {
          name: "react-native #expo #node.js #postgreSQL #supabase #firebase",
          color: "blue-text-gradient"
        }
      ],
      image: kasi_3,
      link: "https://github.com/Kamva-pro/Kasi-IN.git"
    },
    // {
    //   name: "Quick-Connect App",
    //   description: "A simple solution to networking - creating digital business cards",
    //   tags: [
    //     {
    //       name: "html #css #javascript #firebase #express",
    //       color: "blue-text-gradient"
    //     }
    //   ],
    //   image: quick,
    //   link: "https://quick-connect.netlify.app",
    // },
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
 /* {
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
  },*/

  {
    name: "icePopCo",
    description: "An e-commerce store which sells custom made icepops to customers. ",
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
  
  export { services, technologies, projects };
