
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
 
} from '../assets'

// Import project images
import derxoProject from '../assets/derxo.png';
import marketerscliqueProject from '../assets/marketers.png';
import phoneTraderProject from '../assets/phone trader.png';
import brainWaveProject from '../assets/brain wave.png';
import luxuryGalleryProject from '../assets/luxury gallery.png';
import relearnProject from '../assets/relearn.png';
import mandrProject from '../assets/M and R.png';
import silProject from '../assets/sil.png';


// Import company logos
import tekisky from "../assets/company/Untitled-2.png";
import digitalVertex from "../assets/company/meta.png";
import shopifyLogo from "../assets/company/shopify.png";
import starbucksLogo from "../assets/company/starbucks.png";
import teslaLogo from "../assets/company/tesla.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mern-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Github Collaboration",
    icon: github,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
  {
    title: "Figma Design Expert",
    icon: figma,
  },
  {
    title: "WordPress Developer",
    icon: web,
  },
  {
    title: "API Integration Specialist",
    icon: backend,
  },
  {
    title: "Shopify Developer",
    icon: shopifyLogo,
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
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Development",
    company_name: "Digital Vertex IT Company",
    icon: digitalVertex,
    iconBg: "#383E56",
    date: "Jun 2023 - Aug 2025",
    points: [
      "Specialized in front-end development, combining aesthetic design with technical functionality to deliver high-quality, cross-browser compatible websites.",
      "Developed and maintained custom WordPress websites, including theme customization, plugin integration, and performance optimization, ensuring responsive and SEO-friendly design.",
    ],
  },
  {
    title: "MERN Stack Development",
    company_name: "10 Techies IT Company",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Aug 2021 - 2023",
    points: [
      "Led HTML5, CSS3, Tailwind CSS, JavaScript (ES6+): DOM manipulation, event handling, API integration.",
      "React.js: Components, state management, hooks, props, Next.js: Pages, routing.",
      "API Integration: Sending/receiving data from back-end using fetch/axios.",
      "Node.js & Express.js development and deployment.",
    ],
  },
  {
    title: "Custom WordPress with Elementor Pro",
    company_name: "Digital Vertex",
    icon: digitalVertex,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2025",
    points: [
      "Built responsive, pixel-perfect websites using Elementor Pro and WordPress.",
      "Customized widgets, templates, and theme parts (header, footer, archive, single).",
      "Added custom CSS/JS and used Flexbox Containers for modern layouts.",
      "Integrated plugins like ACF, CPT UI, WPForms, and WooCommerce for added features.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "MarketersClique",
    description:
      "Marketers Clique is a community designed for social media marketers to connect, learn, and grow together. You can join discussions, share content, like posts, comment, upload images, and be part of a vibrant network of marketers worldwide.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "white-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: marketerscliqueProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://marketersclique.com/",
  },
  {
    name: "Derxo Healthcare",
    description:
      "A next-gen healthcare portal built to enable users to book consultations, access health records, and connect with medical professionals — all within a secure and user-friendly interface.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: derxoProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://www.derxo.com/",
  },
  {
    name: "Phone Traders",
    description:
      "TraDetails is a powerful web platform designed to help Amazon sellers streamline their product research process. It provides detailed analytics on product performance, including BSR (Best Seller Rank), pricing, ratings, and keyword tracking.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "chart.js",
        color: "green-text-gradient",
      },
      {
        name: "rest api",
        color: "pink-text-gradient",
      },
    ],
    image: phoneTraderProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://tradetails-frontend.vercel.app/",
  },
  {
    name: "Brain Wave",
    description:
      "Brainwaves is a thoughtfully designed platform aimed at promoting mental wellness and providing users with easy access to therapy-related resources. It features self-help content, therapist profiles, booking options, and awareness tools to support users in managing their mental health.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "react router",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: brainWaveProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://brainwaves-wheat.vercel.app/",
  },
  {
    name: "Luxury Gallery",
    description:
      "Luxury Gallery is a high-end WordPress-based website built for an interior design and home decor brand. It showcases a curated collection of luxury furniture, lighting, and design elements through an elegant and responsive layout.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "white-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: luxuryGalleryProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://www.luxurygallery.in/",
  },
  {
    name: "EBH Mart LMS",
    description:
      "EBH Mart LMS is a comprehensive Learning Management System built on WordPress, designed to support employee training, onboarding, and skill development. The platform offers a structured environment for learners to access courses, track progress, and complete assessments with ease. It leverages powerful WordPress LMS plugins for smooth course delivery and user management.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "learndash",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "elementor",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: relearnProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://lms.ebhmart.com/",
  },
  {
    name: "M&R Best Price Landscaping",
    description:
      "M&R Best Price Landscaping is a WordPress-powered website designed for a landscaping and gardening service provider in Australia. The site highlights the company's services, showcases project galleries, and allows users to easily request quotes or consultations. Built with a focus on local SEO and performance, it provides a seamless user experience across devices.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "contact form 7",
        color: "orange-text-gradient",
      },
    ],
    image: mandrProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://mandrbestpricelandscaping.com.au/",
  },
  {
    name: "Silisoul",
    description:
      "A trendy fashion store powered by Shopify — designed for smooth shopping, modern aesthetics, and conversion-focused product pages that drive engagement.",
    tags: [
      {
        name: "liquid",
        color: "blue-text-gradient",
      },
      {
        name: "storefront api",
        color: "white-text-gradient",
      },
      {
        name: "mailchimp",
        color: "green-text-gradient",
      },
    ],
    image: silProject,
    source_code_link: "https://github.com/Faiqanoor67",
    live_demo_link: "https://www.silisoul.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
