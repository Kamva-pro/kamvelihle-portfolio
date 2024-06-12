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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
   
    {
      title: "Web Master",
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
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: 'Trip Tips',
      description:
        "Travel blog that provides users with the latest travel ideas and also travel guides. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

      ],
      image: tripsmobile,
      link: "http://Kamva-pro.github.io/Trip-tips",
    },
 
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
      description: "Part is an e-commerce platform specializing in Apple products. I developed a responsive website using WordPress as the foundation, intended to showcase a variety of Apple accessories and parts.",
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
    description: "icepopco is an e-commerce website which sells icepops. I built the website using wordpress and woocommerce. ",
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
