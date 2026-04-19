import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

const themes = {
  cyberpunk: {
    name: 'Cyberpunk',
    bg: 'bg-black',
    bgAlt: 'from-gray-900 to-black',
    text: 'text-white',
    textMuted: 'text-gray-300',
    textMuted2: 'text-gray-400',
    border: 'border-white/10',
    gradient: 'from-cyan-500 to-magenta-500',
    gradientText: 'from-cyan-400 via-magenta-400 to-lime-400',
    accent: 'text-cyan-400',
    accent2: 'text-magenta-400',
    navActive: 'bg-gradient-to-r from-cyan-500 to-magenta-500',
    glow: 'from-cyan-500 to-magenta-500',
    blob1: 'bg-cyan-500/20',
    blob2: 'bg-magenta-500/20',
    blob3: 'bg-lime-500/10',
    cardBg: 'bg-white/5',
  },
  creative: {
    name: 'Creative',
    bg: 'bg-white',
    bgAlt: 'from-gray-50 to-gray-30',
    text: 'text-gray-800',
    textMuted: 'text-gray-500',
    textMuted2: 'text-gray-800',
    border: 'border-white/10',
    gradient: 'from-gray-300 to-gray-600',
    gradientText: 'from-lime-500 to-green-600',
    accent: 'text-lime-600',
    accent2: 'text-gray-500',
    navActive: 'bg-gradient-to-r from-lime-500 to-green-600',
    glow: 'from-gray-50 to-gray-100',
    blob1: 'bg-gray-600/20',
    blob2: 'bg-gray-600/20',
    blob3: 'bg-gray-600/10',
    cardBg: 'bg-white/5',
  },
  ocean: {
    name: 'Ocean',
    bg: 'bg-slate-900',
    bgAlt: 'from-slate-800/50 to-slate-800/30',
    text: 'text-white',
    textMuted: 'text-slate-300',
    textMuted2: 'text-slate-400',
    border: 'border-white/10',
    gradient: 'from-blue-600 to-cyan-600',
    gradientText: 'from-blue-400 via-cyan-400 to-teal-400',
    accent: 'text-blue-400',
    accent2: 'text-cyan-400',
    navActive: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    glow: 'from-blue-500 to-cyan-500',
    blob1: 'bg-blue-600/20',
    blob2: 'bg-cyan-600/20',
    blob3: 'bg-teal-600/10',
    cardBg: 'bg-white/5',
  },
  sunset: {
    name: 'Sunset',
    bg: 'bg-slate-900',
    bgAlt: 'from-slate-800/50 to-slate-800/30',
    text: 'text-white',
    textMuted: 'text-slate-300',
    textMuted2: 'text-slate-400',
    border: 'border-white/10',
    gradient: 'from-orange-500 to-pink-600',
    gradientText: 'from-orange-400 via-pink-400 to-rose-400',
    accent: 'text-orange-400',
    accent2: 'text-pink-400',
    navActive: 'bg-gradient-to-r from-orange-500 to-pink-600',
    glow: 'from-orange-500 to-pink-500',
    blob1: 'bg-orange-600/20',
    blob2: 'bg-pink-600/20',
    blob3: 'bg-rose-600/10',
    cardBg: 'bg-white/5',
  },
  forest: {
    name: 'Forest',
    bg: 'bg-slate-900',
    bgAlt: 'from-slate-800/50 to-slate-800/30',
    text: 'text-white',
    textMuted: 'text-slate-300',
    textMuted2: 'text-slate-400',
    border: 'border-white/10',
    gradient: 'from-emerald-600 to-teal-600',
    gradientText: 'from-emerald-400 via-teal-400 to-cyan-400',
    accent: 'text-emerald-400',
    accent2: 'text-teal-400',
    navActive: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    glow: 'from-emerald-500 to-teal-500',
    blob1: 'bg-emerald-600/20',
    blob2: 'bg-teal-600/20',
    blob3: 'bg-cyan-600/10',
    cardBg: 'bg-white/5',
  },
  minimal: {
    name: 'Minimal',
    bg: 'bg-gray-50',
    bgAlt: 'from-white to-gray-100',
    text: 'text-gray-800',
    textMuted: 'text-gray-600',
    textMuted2: 'text-gray-500',
    border: 'border-gray-200',
    gradient: 'from-gray-800 to-gray-900',
    gradientText: 'from-gray-700 via-gray-800 to-gray-900',
    accent: 'text-gray-700',
    accent2: 'text-gray-900',
    navActive: 'bg-gradient-to-r from-gray-800 to-gray-900',
    glow: 'from-gray-700 to-gray-800',
    blob1: 'bg-gray-300/20',
    blob2: 'bg-gray-400/20',
    blob3: 'bg-gray-500/10',
    cardBg: 'bg-gray-200/50',
  },
}

const personalInfo = {
  name: "Sandhi Firmadani",
  title: "Solution Architect | Enterprise Platform Builder | Retail Systems & Automation",
  location: "Indonesia",
  email: "sandhi.firmadani@gmail.com",
  phone: "0855-144-0000",
  linkedin: "linkedin.com/in/firmadani",
  portfolio: "be.net/firmadani",
  profileImage: "/profile_new.jpg"
}

const profile = `Senior Solution Architect and Platform Builder with more than 15 years of experience designing and delivering enterprise-scale systems, primarily in telecommunications and digital retail ecosystems. Currently responsible for architecting and building internal platforms at Indosat that support nationwide retail operations, sales channels, and partner ecosystems.`

const competencies = {
  "Solution Architecture": [
    "Enterprise Solution Architecture",
    "Platform Architecture Design", 
    "System Integration Architecture",
    "API & Service Architecture",
    "Scalable Application Design"
  ],
  "Platform Engineering": [
    "Internal Platform Development",
    "Retail & Channel Technology Platforms",
    "Workflow Automation Systems",
    "Operational Systems Design",
    "Data & Monitoring Platforms"
  ],
  "Software Engineering": [
    "PHP (Laravel, Symfony, CodeIgniter)",
    "JavaScript",
    "HTML5 / CSS3",
    "MySQL / Relational Databases",
    "Web Application Architecture"
  ],
  "Infrastructure & Reliability": [
    "Linux System Administration",
    "Web & Application Servers",
    "Database Infrastructure",
    "DNS / Proxy / Mail Servers",
    "System Performance & Reliability"
  ]
}

const experience = [
  {
    company: "PT Indosat Tbk",
    roles: [
      {
        title: "Senior Retail System Development",
        period: "2024 – Present",
        description: "Lead development and architecture of internal retail platforms supporting nationwide sales and operational processes.",
        responsibilities: [
          "Design enterprise system architecture for retail and channel platforms",
          "Lead development of automation systems to streamline operational workflows",
          "Provide technical strategy for digital transformation initiatives",
          "Translate business requirements into scalable internal technology platforms"
        ]
      },
      {
        title: "Senior Retail Automation",
        period: "2020 – 2024",
        description: "Responsible for designing and implementing automation solutions supporting retail and channel operations.",
        responsibilities: [
          "Built internal tools for retail monitoring and performance tracking",
          "Developed systems supporting operational analytics and sales management",
          "Delivered technology solutions to support retail operational scalability"
        ]
      },
      {
        title: "Senior Channel Management",
        period: "2018 – 2020",
        description: "Delivered technology platforms supporting channel partners and retail management.",
        responsibilities: [
          "Developed systems for partner operations and monitoring",
          "Improved operational visibility for retail performance tracking"
        ]
      },
      {
        title: "Senior Technology & Campaign",
        period: "2016 – 2018",
        description: "Led development and implementation of multiple digital retail systems and internal operational platforms.",
        projects: [
          "IM3 Ooredoo eStore implementation",
          "Nationwide retail monitoring and audit platform",
          "Sales performance dashboard for retail operations",
          "Device inventory system for franchise stores",
          "Sales incentive management platform",
          "Real-time pre-order system for device campaigns",
          "Knowledge assessment platform for sales agents"
        ]
      }
    ]
  },
  {
    company: "PT Indo Sistem Global (Indosystem)",
    roles: [
      {
        title: "Senior Web Application Developer",
        period: "2014 – 2016",
        description: "Developed enterprise web platforms and supported international digital projects.",
        responsibilities: [
          "Drupal and PHP development for global clients",
          "Backend and frontend integration for enterprise systems",
          "Development support for Loket.com event platform",
          "Built large-scale event gate system using RFID and barcode scanning for major events such as DWP"
        ]
      }
    ]
  },
  {
    company: "Freelance / Agency Work",
    roles: [
      {
        title: "Full-Stack Web Developer",
        period: "2006 – 2014",
        description: "Delivered full-stack web development services including architecture, frontend implementation, and CMS development.",
        responsibilities: [
          "Designed and developed multiple corporate websites",
          "Built custom CMS solutions for dynamic websites",
          "Converted design assets into production-ready HTML5 implementations"
        ]
      }
    ]
  },
  {
    company: "PT Dotcom Indonesia",
    roles: [
      {
        title: "System Administrator",
        period: "2008 – 2012",
        description: "Managed Linux-based hosting infrastructure and web platforms.",
        responsibilities: [
          "Maintained web, mail, and database servers",
          "Managed hosting infrastructure using Plesk",
          "Built multiple corporate and government websites"
        ]
      }
    ]
  },
  {
    company: "PT Garuda Indonesia (Persero) Tbk",
    roles: [
      {
        title: "PHP Programmer / Network & Technical Engineer",
        period: "2005 – 2008",
        description: "Worked on internal systems development and network infrastructure management.",
        responsibilities: [
          "Developed intranet applications using PHP and MySQL",
          "Implemented automated database backup and replication systems",
          "Built internal DNS infrastructure",
          "Supported enterprise application development teams"
        ]
      }
    ]
  }
]

const education = [
  { degree: "Bachelor Degree – English Language & Literature", school: "Universitas Terbuka", period: "2017 – 2021" },
  { degree: "Diploma – Accounting", school: "Universitas Pakuan", period: "2000 – 2003" }
]

const certifications = [
  "Learning Python",
  "Software Architecture: Breaking a Monolith into Microservices",
  "Ethical Hacking: System Hacking",
  "Essential Lessons for First-Time Managers"
]

const projects = [
  {
    title: "Nationwide Retail Operations Platform",
    description: "Architected and developed internal platforms supporting retail operations, sales monitoring, and operational workflows across nationwide store networks.",
    impact: [
      "Enabled centralized monitoring of distributed retail operations",
      "Improved operational visibility for management and sales teams",
      "Automated multiple manual operational processes"
    ]
  },
  {
    title: "Retail Sales Performance & Monitoring System",
    description: "Designed system architecture for monitoring retail sales performance, partner activities, and store operations.",
    impact: [
      "Provided operational insights for retail leadership",
      "Enabled data-driven decision making for sales performance",
      "Reduced manual reporting processes"
    ]
  },
  {
    title: "Device Inventory & Partner Distribution Platform",
    description: "Designed and implemented platform used to manage device inventory across franchise and partner stores.",
    impact: [
      "Improved visibility of device distribution across stores",
      "Reduced operational friction in device allocation"
    ]
  },
  {
    title: "Sales Incentive Management Platform",
    description: "Architected internal system used to manage partner incentive programs and campaign rewards.",
    impact: [
      "Automated incentive calculations",
      "Improved transparency for partner reward distribution"
    ]
  },
  {
    title: "Retail Campaign & Pre-Order System",
    description: "Designed real-time pre-order platform used during device launches and retail campaigns.",
    impact: [
      "Enabled synchronized nationwide campaign launches",
      "Supported high-volume pre-order transactions"
    ]
  }
]

const webWorks = [
  {
    title: "8Etos.com",
    year: "2014",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14758259.548899436ba99.png",
    link: "https://www.behance.net/gallery/14758259/8Etoscom-2014",
    views: 187187,
    appreciations: 66
  },
  {
    title: "AgungConcern.com",
    year: "2014",
    category: "Corporate Website",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/ea86ff25161029.5524c342c28c9.jpg",
    link: "https://www.behance.net/gallery/25161029/AgungConcerncom-2014",
    views: 4949,
    appreciations: 22
  },
  {
    title: "Promo Desember 2012 : Domain +3",
    year: "2012",
    category: "Banner Design",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543649.545d8d39c269b.jpg",
    link: "https://www.behance.net/gallery/3543649/Promo-Desember-2012-Domain-3",
    views: 3163,
    appreciations: 6
  },
  {
    title: "PSD2HTML : Skunkmonk.com.au",
    year: "2012",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14779815.5488a07951194.png",
    link: "https://www.behance.net/gallery/14779815/PSD2HTML-Skunkmonkcomau-2012",
    views: 2601,
    appreciations: 57
  },
  {
    title: "Garudasentramedika.co.id",
    year: "2008",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3501589.545d5657d2fab.jpg",
    link: "https://www.behance.net/gallery/3501589/Garudasentramedikacoid-2008",
    views: 171,
    appreciations: 0
  },
  {
    title: "portal.wika-intrade.com",
    year: "2007",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3616371.545dec187ac93.jpg",
    link: "https://www.behance.net/gallery/3616371/portalwika-intradecom-2007",
    views: 154,
    appreciations: 1
  },
  {
    title: "MamaPutraStore / store.firmadani.com",
    year: "2012",
    category: "E-commerce",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3506675.545d5cf54ec46.jpg",
    link: "https://www.behance.net/gallery/3506675/MamaPutraStore-storefirmadanicom-2012",
    views: 133,
    appreciations: 1
  },
  {
    title: "Firmadani.com v3",
    year: "2010",
    category: "Portfolio Website",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3503135.545d585851a25.png",
    link: "https://www.behance.net/gallery/3503135/Firmadanicom-v3-2010",
    views: 130,
    appreciations: 1
  },
  {
    title: "Banner design : Promo of Namadomain.com",
    year: "2012",
    category: "Banner Design",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543513.545d8d0c7cb95.jpg",
    link: "https://www.behance.net/gallery/3543513/Banner-design-Promo-of-Namadomaincom-2012",
    views: 132,
    appreciations: 1
  },
  {
    title: "TangCity.com",
    year: "2010",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/1003775.5446f65e0c900.jpg",
    link: "https://www.behance.net/gallery/1003775/TangCitycom-2010",
    views: 187,
    appreciations: 2
  },
  {
    title: "Putrahelm.com",
    year: "2010",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543427.545d8cede6ecc.jpg",
    link: "https://www.behance.net/gallery/3543427/Putrahelmcom-2010",
    views: 102,
    appreciations: 1
  },
  {
    title: "Kuminsommers.com",
    year: "2008",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3507309.545d5dae41d76.jpg",
    link: "https://www.behance.net/gallery/3507309/Kuminsommerscom-2008",
    views: 118,
    appreciations: 2
  },
  {
    title: "Webdesign banner of Namadomain.com",
    year: "2012",
    category: "Banner Design",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543817.545d8d6c94943.jpg",
    link: "https://www.behance.net/gallery/3543817/Webdesign-banner-of-Namadomaincom-2012",
    views: 115,
    appreciations: 2
  },
  {
    title: "PSD2HTML : Zevitzone.com",
    year: "2013",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14774247.54889f47ca0e0.jpg",
    link: "https://www.behance.net/gallery/14774247/PSD2HTML-Zevitzonecom-2013",
    views: 141,
    appreciations: 11
  },
  {
    title: "PSD2HTML : Youtube page of Colgate Australia",
    year: "",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14784029.5488a251b9e90.jpg",
    link: "https://www.behance.net/gallery/14784029/PSD2HTML-Youtube-page-of-Colgate-Australia",
    views: 166,
    appreciations: 2
  },
  {
    title: "Promo gratis domain Namadomain.com",
    year: "2012",
    category: "Banner Design",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543631.545d8d3407bf0.jpg",
    link: "https://www.behance.net/gallery/3543631/Promo-gratis-domain-Namadomaincom-2012",
    views: 117,
    appreciations: 3
  },
  {
    title: "PSD2XHTML: Mitsubishi Development Pyt Ltd",
    year: "",
    category: "PSD to XHTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/960bf734385701.Y3JvcCw5MzQsNzMwLDEwNiwxMDY.jpg",
    link: "https://www.behance.net/gallery/34385701/PSD2XHTML-Mitsubishi-Development-Pyt-Ltd",
    views: 25,
    appreciations: 11
  },
  {
    title: "PSD2HTML : Wall's Delivery",
    year: "2013",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14758683.548899bc86cb0.png",
    link: "https://www.behance.net/gallery/14758683/PSD2HTML-Walls-Delivery-2013",
    views: 108,
    appreciations: 0
  },
  {
    title: "PSD2HTML : indie.tri.co.id",
    year: "2013",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14774483.54889e6b96c93.jpg",
    link: "https://www.behance.net/gallery/14774483/PSD2HTML-indietricoid-2013",
    views: 98,
    appreciations: 1
  },
  {
    title: "PSD2HTML : Sydney Children's Hospital Foundation",
    year: "2012",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14783411.5488a2b9884b0.jpg",
    link: "https://www.behance.net/gallery/14783411/PSD2HTML-Sydney-Childrens-Hospital-Foundation-2012",
    views: 89,
    appreciations: 0
  },
  {
    title: "TangCity.co.id",
    year: "2008",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3611717.545de63db2186.jpg",
    link: "https://www.behance.net/gallery/3611717/TangCitycoid-2008",
    views: 100,
    appreciations: 1
  },
  {
    title: "webmail.garudasentramedika.co.id",
    year: "2008",
    category: "Webmail Interface",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3507527.545d5dffa0d58.jpg",
    link: "https://www.behance.net/gallery/3507527/webmailgarudasentramedikacoid-2008",
    views: 90,
    appreciations: 0
  },
  {
    title: "PSD2HTML : Children's Hospital Foundations Australia",
    year: "",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14783721.5488a1ea1c8fa.jpg",
    link: "https://www.behance.net/gallery/14783721/PSD2HTML-Childrens-Hospital-Foundations-Australia",
    views: 82,
    appreciations: 0
  },
  {
    title: "Erafone's mockup",
    year: "2009",
    category: "Web Mockup",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3502821.545d57ef29fbc.png",
    link: "https://www.behance.net/gallery/3502821/Erafones-mockup-2009",
    views: 79,
    appreciations: 1
  },
  {
    title: "Domain.co.id",
    year: "2009",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3502717.545d57e0b4bd3.png",
    link: "https://www.behance.net/gallery/3502717/Domaincoid-2009",
    views: 77,
    appreciations: 0
  },
  {
    title: "Borneo.co.id's mockup",
    year: "2010",
    category: "Web Mockup",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3502537.545d579143d27.jpg",
    link: "https://www.behance.net/gallery/3502537/Borneocoids-mockup-2010",
    views: 78,
    appreciations: 0
  },
  {
    title: "PSD2XHTML: Ayo! Indonesia Bisa",
    year: "2012",
    category: "PSD to XHTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/b4c20735213057.Y3JvcCw3NjcsNjAwLDAsMA.jpg",
    link: "https://www.behance.net/gallery/35213057/PSD2XHTML-Ayo-Indonesia-Bisa-2012",
    views: 25,
    appreciations: 0
  },
  {
    title: "PSD2XHTML: RCPA Guardian Angel - Australia",
    year: "2012",
    category: "PSD to XHTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/376ee834383343.Y3JvcCwxMDI4LDgwNCwxMTksODI.jpg",
    link: "https://www.behance.net/gallery/34383343/PSD2XHTML-RCPA-Guardian-Angel-Australia-2012",
    views: 26,
    appreciations: 0
  },
  {
    title: "PSD2XHTML : Gispac front page slicing",
    year: "",
    category: "PSD to XHTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3865969.545f324d2250d.png",
    link: "https://www.behance.net/gallery/3865969/PSD2XHTML-Gispac-front-page-slicing",
    views: 73,
    appreciations: 0
  },
  {
    title: "Sriwijayahotel.com's mockup",
    year: "2009",
    category: "Web Mockup",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543457.545d8cf9d03f3.jpg",
    link: "https://www.behance.net/gallery/3543457/Sriwijayahotelcoms-mockup-2009",
    views: 73,
    appreciations: 0
  },
  {
    title: "Trivo.co.id",
    year: "2009",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3510765.545d62132c808.jpg",
    link: "https://www.behance.net/gallery/3510765/Trivocoid-2009",
    views: 73,
    appreciations: 1
  },
  {
    title: "PSD2HTML : Astra Garda Center",
    year: "2013",
    category: "PSD to HTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/14784303.5488a2b09ada9.jpg",
    link: "https://www.behance.net/gallery/14784303/PSD2HTML-Astra-Garda-Center-2013",
    views: 63,
    appreciations: 0
  },
  {
    title: "Infosewa.com",
    year: "2011",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3507075.54b05c256e024.jpg",
    link: "https://www.behance.net/gallery/3507075/Infosewacom-2011",
    views: 89,
    appreciations: 2
  },
  {
    title: "Nusafood.com",
    year: "2006",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3507615.545d5e1a5ae18.jpg",
    link: "https://www.behance.net/gallery/3507615/Nusafoodcom-2006",
    views: 85,
    appreciations: 0
  },
  {
    title: "Lacak.com",
    year: "2009",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3507395.545d5dcb937b0.jpg",
    link: "https://www.behance.net/gallery/3507395/Lacakcom-2009",
    views: 64,
    appreciations: 1
  },
  {
    title: "MKProjector.com",
    year: "2009",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3617371.545ded4f03a1f.png",
    link: "https://www.behance.net/gallery/3617371/MKProjectorcom-2009",
    views: 64,
    appreciations: 0
  },
  {
    title: "Desk1.dotcomindonesia.com",
    year: "2011",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3502563.545d579baa688.jpg",
    link: "https://www.behance.net/gallery/3502563/Desk1dotcomindonesiacom-2011",
    views: 85,
    appreciations: 1
  },
  {
    title: "Professorexpert.com",
    year: "2010",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3532669.545d7e9c23c7d.png",
    link: "https://www.behance.net/gallery/3532669/Professorexpertcom-2010",
    views: 46,
    appreciations: 1
  },
  {
    title: "PSD2XHTML: Blackberry Berbagi THR",
    year: "2012",
    category: "PSD to XHTML",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/404/f4c94735212679.Y3JvcCw0MDQsMzE2LDc2LDA.jpg",
    link: "https://www.behance.net/gallery/35212679/PSD2XHTML-Blackberry-Berbagi-THR-2012",
    views: 26,
    appreciations: 0
  },
  {
    title: "AgaveAzul.org",
    year: "2011",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3502483.545d577a21f94.png",
    link: "https://www.behance.net/gallery/3502483/AgaveAzulorg-2011",
    views: 70,
    appreciations: 0
  },
  {
    title: "Free hosting promotion of Namadomain.com",
    year: "2011",
    category: "Banner Design",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543793.545d8d65aba75.jpg",
    link: "https://www.behance.net/gallery/3543793/Free-hosting-promotion-of-Namadomaincom-2011",
    views: 61,
    appreciations: 0
  },
  {
    title: "10th Anniversary promotion of Namadomain.com",
    year: "2010",
    category: "Banner Design",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543743.545d8d5408a6e.jpg",
    link: "https://www.behance.net/gallery/3543743/10th-Anniversary-promotion-of-Namadomaincom-2010",
    views: 61,
    appreciations: 0
  },
  {
    title: "Promo Ultah ke-9 Namadomain.com",
    year: "2009",
    category: "Banner Design",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3543699.545d8d4cebd28.jpg",
    link: "https://www.behance.net/gallery/3543699/Promo-Ultah-ke-9-Namadomaincom-2009",
    views: 49,
    appreciations: 0
  },
  {
    title: "Ikasmanti.org",
    year: "2011",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3506967.54b05bbe8e58c.png",
    link: "https://www.behance.net/gallery/3506967/Ikasmantiorg-2011",
    views: 49,
    appreciations: 1
  },
  {
    title: "Sandhi.lpknf.or.id",
    year: "2004",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/2519001.54562408c895f.jpg",
    link: "https://www.behance.net/gallery/2519001/Sandhilpknforid-2004",
    views: 70,
    appreciations: 1
  },
  {
    title: "Nurulfikri.web.id",
    year: "2004",
    category: "Web Development",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/original/3511227.545d62a9deb74.jpg",
    link: "https://www.behance.net/gallery/3511227/Nurulfikriwebid-2004",
    views: 53,
    appreciations: 1
  }
]

const techStack = {
  "Architecture & Backend": ["PHP (Laravel, Symfony, CodeIgniter)", "REST API Architecture", "Web Application Architecture", "Modular / Service-Oriented Design"],
  "Data & Infrastructure": ["MySQL / Relational Databases", "Linux Server Infrastructure", "Web Server & Application Server Management", "DNS / Proxy / Mail Infrastructure"],
  "Frontend": ["JavaScript", "HTML5 / CSS3", "UI Integration & Frontend Architecture"]
}

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'creative'
    }
    return 'creative'
  })

  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  const theme = themes[currentTheme]

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>

      <header className="relative pt-20 pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className={`absolute -inset-4 bg-gradient-to-br ${theme.glow} rounded-3xl blur-xl opacity-75`}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="relative w-96 h-96 rounded-3xl border-4 border-white/20 shadow-2xl object-cover transform -rotate-3"
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.div 
              className="text-center lg:text-left flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-4 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Solution Architect
              </motion.div>
              <motion.h1 
                className={`web-title text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {personalInfo.name}
              </motion.h1>
              <motion.p 
                className={`text-xl md:text-2xl ${theme.textMuted} mb-6 max-w-2xl`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {personalInfo.title}
              </motion.p>
              <motion.div 
                className={`flex flex-wrap justify-center lg:justify-start gap-6 ${theme.textMuted2}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="flex items-center gap-2">📍 {personalInfo.location}</span>
                <span className="flex items-center gap-2">📧 {personalInfo.email}</span>
                <span className="flex items-center gap-2">📞 {personalInfo.phone}</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${theme.gradient} to-transparent`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </header>

      <motion.nav 
        className={`sticky top-0 z-50 backdrop-blur-xl ${theme.bg}/80 border-b ${theme.border}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 py-3">
            <div className="flex overflow-x-auto gap-2 scrollbar-hide">
              {['about', 'experience', 'skills', 'projects', 'webworks', 'education'].map(section => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section)
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeSection === section 
                      ? `${theme.navActive} text-white shadow-lg` 
                      : `${theme.textMuted2} ${currentTheme === 'minimal' ? 'hover:text-gray-800 hover:bg-gray-200' : 'hover:text-gray-500 hover:bg-gray-200'}`
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {Object.entries(themes).map(([key, t]) => (
                <motion.button
                  key={key}
                  onClick={() => setCurrentTheme(key)}
                  className={`w-8 h-8 rounded-full transition-all ${
                    currentTheme === key 
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  title={t.name}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ background: key === 'creative' ? '#91e72c' : key === 'ocean' ? '#0ea5e9' : key === 'sunset' ? '#f97316' : key === 'forest' ? '#10b981' : key === 'minimal' ? '#6b7280' : '#06b6d4' }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section id="about" className="mb-16">
          <div className={`bg-gradient-to-br ${theme.bgAlt} backdrop-blur rounded-3xl p-8 md:p-12 border ${theme.border}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`text-white w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradientText} flex items-center justify-center`}>
                <span className="text-2xl">✦</span>
              </div>
              <h2 className="text-3xl font-bold">Executive Profile</h2>
            </div>
            <p className={`${theme.textMuted} leading-relaxed text-lg mb-8 max-w-3xl`}>
              {profile}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "15+ years experience in enterprise software engineering",
                "Strong capability designing and building internal enterprise platforms",
                "Deep hands-on engineering background combined with architecture expertise",
                "Extensive experience translating complex operational workflows into scalable technology systems",
                "Proven track record delivering systems used by nationwide operational teams",
                "Strong Linux infrastructure and backend engineering foundation"
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 ${theme.textMuted} p-3 rounded-xl ${theme.cardBg} border ${theme.border}`}>
                  <span className={`w-2 h-2 bg-gradient-to-r ${theme.gradient} rounded-full`}></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`text-white w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradientText} flex items-center justify-center`}>
              <span className="text-2xl">◆</span>
            </div>
            <h2 className="text-3xl font-bold">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b ${theme.gradient} to-transparent opacity-30`}></div>
                <div className={`bg-gradient-to-r ${theme.bgAlt} backdrop-blur rounded-2xl p-6 md:p-8 border ${theme.border} hover:${theme.accent}/50 transition-all ml-12`}>
                  <div className={`absolute -left-14 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${theme.glow} border-4 ${theme.bg}`}></div>
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${theme.text}`}>{exp.company}</h3>
                      {exp.roles[0]?.period && <span className={`${theme.accent} text-sm`}>{exp.roles[0].period}</span>}
                    </div>
                  </div>
                  <div className="space-y-6 mt-6">
                    {exp.roles.map((role, roleIdx) => (
                      <div key={roleIdx} className={roleIdx > 0 ? "pt-6 border-t border-white/10" : ""}>
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h4 className={`text-lg font-semibold ${theme.accent2}`}>{role.title}</h4>
                          <span className={`text-sm ${theme.textMuted2}`}>{role.period}</span>
                        </div>
                        <p className={`${theme.textMuted2} mb-3`}>{role.description}</p>
                        {role.responsibilities && (
                          <ul className={`space-y-1 ${theme.textMuted}`}>
                            {role.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className={`${theme.accent} mt-1`}>▸</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        )}
                        {role.projects && (
                          <div className="mt-4">
                            <p className={`font-medium ${theme.textMuted} mb-2`}>Major Systems Delivered:</p>
                            <div className="flex flex-wrap gap-2">
                              {role.projects.map((proj, i) => (
                                <span key={i} className={`px-3 py-1 ${theme.accent}/20 ${theme.accent} rounded-full text-sm`}>
                                  {proj}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`text-white w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradientText} flex items-center justify-center`}>
              <span className="text-2xl">⚡</span>
            </div>
            <h2 className="text-3xl font-bold">Core Competencies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(competencies).map(([category, skills]) => (
              <div key={category} className={`bg-gradient-to-br p-6 rounded-2xl border border-white/10 backdrop-blur ${theme.bgAlt}`}>
                <h3 className={`text-lg font-bold ${theme.accent2} mb-4 flex items-center gap-2`}>
                  <span className={`w-3 h-3 bg-gradient-to-r ${theme.gradient} rounded-full`}></span>
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className={`flex items-center gap-2 ${theme.textMuted}`}>
                      <span className={`w-1.5 h-1.5 ${theme.accent} rounded-full`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`text-white w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradientText} flex items-center justify-center`}>
              <span className="text-2xl">★</span>
            </div>
            <h2 className="text-3xl font-bold">Key Architecture Projects & Platforms</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${theme.bgAlt} backdrop-blur rounded-2xl p-6 border border-white/10 hover:${theme.accent}/50 transition-all group`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${theme.accent}/30 flex items-center justify-center ${theme.accent} font-bold`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${theme.text} group-hover:${theme.accent} transition`}>{project.title}</h3>
                    <p className={`${theme.textMuted2} mt-2`}>{project.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className={`text-sm ${theme.accent2} font-medium mb-2`}>Impact:</p>
                  <div className="space-y-1">
                    {project.impact.map((impact, i) => (
                      <div key={i} className={`flex items-start gap-2 ${theme.textMuted} text-sm`}>
                        <span className={theme.accent}>◆</span>
                        {impact}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="webworks" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`text-white w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradientText} flex items-center justify-center`}>
              <span className="text-2xl">◈</span>
            </div>
            <h2 className="text-3xl font-bold">Web Works (Behance Portfolio)</h2>
          </div>
          <p className={`${theme.textMuted2} mb-8`}>Projects from my Behance portfolio showcasing web development and PSD conversion work.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webWorks.map((work, idx) => (
              <motion.a 
                key={idx} 
                href={work.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme.bgAlt} rounded-2xl overflow-hidden transition group border border-white/10`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img 
                    src={work.thumbnail} 
                    alt={work.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-5">
                  <h3 className={`font-bold ${theme.text} mb-2 group-hover:${theme.accent} transition`}>{work.title}</h3>
                  <div className={`flex items-center gap-2 text-sm ${theme.textMuted2} mb-3`}>
                    {work.year && <span>{work.year}</span>}
                    {work.year && work.category && <span>•</span>}
                    {work.category && <span>{work.category}</span>}
                  </div>
                  <div className={`flex justify-between text-xs ${theme.textMuted2} pt-3 border-t border-white/10`}>
                    <span>{work.views.toLocaleString()} views</span>
                    <span>{work.appreciations} ★</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="education" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`text-white w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradientText} flex items-center justify-center`}>
              <span className="text-2xl">❋</span>
            </div>
            <h2 className="text-3xl font-bold">Education & Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`bg-gradient-to-br ${theme.bgAlt} rounded-2xl p-8 border border-white/10`}>
              <h3 className={`text-lg font-bold ${theme.accent2} mb-6 flex items-center gap-2`}>
                <span className={`w-3 h-3 bg-gradient-to-r ${theme.gradient} rounded-full`}></span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className={`absolute left-0 top-2 w-3 h-3 bg-gradient-to-r ${theme.gradient} rounded-full`}></div>
                    <p className={`font-semibold ${theme.text}`}>{edu.degree}</p>
                    <p className={theme.textMuted2}>{edu.school}</p>
                    <p className={`text-sm ${theme.textMuted2}`}>{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`bg-gradient-to-br ${theme.bgAlt} rounded-2xl p-8 border border-white/10`}>
              <h3 className={`text-lg font-bold ${theme.accent2} mb-6 flex items-center gap-2`}>
                <span className={`w-3 h-3 bg-gradient-to-r ${theme.gradient} rounded-full`}></span>
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className={`flex items-center gap-3 ${theme.textMuted} p-3 rounded-xl ${theme.cardBg}`}>
                    <span className={theme.accent2}>✦</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className={`relative py-16 border-t ${theme.border}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute bottom-0 left-1/4 w-96 h-96 ${theme.blob1} rounded-full blur-3xl`}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>
            {personalInfo.name}
          </h3>
          <p className={`${theme.textMuted2} mb-6`}>{personalInfo.title}</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href={`mailto:${personalInfo.email}`} className={`${theme.textMuted2} hover:${theme.accent} transition`}>Email</a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className={`${theme.textMuted2} hover:${theme.accent} transition`}>LinkedIn</a>
            <a href={`https://${personalInfo.portfolio}`} target="_blank" rel="noopener noreferrer" className={`${theme.textMuted2} hover:${theme.accent} transition`}>Portfolio</a>
          </div>
          <p className={`${theme.textMuted2} text-sm`}>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
