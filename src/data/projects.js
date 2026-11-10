import makla from '../assets/makla-zaman.webp'
import registre from '../assets/registre-cancer.png'
import vacci from '../assets/vaccitrack.webp'
import atelier from '../assets/atelier.png'
import portfolio from '../assets/portfolio.png'


// type: 'web' | 'mobile' | 'desktop'
export const PROJECTS = [
  {
    id: 'makla-zaman',
    name: 'Makla Zaman',
    type: 'mobile',
    img: makla,
    bg: '#fcead9',
    tagline: 'Algerian cuisine mobile app',
    desc:
      "A mobile app that brings authentic Algerian cuisine to your fingertips: sign-up and login, recipe categories and search, detailed recipe pages with ingredients, and a calendar to plan your daily meals.",
    stack: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 'registre-cancer',
    name: 'RegistreCancer.dz',
    type: 'web',
    img: registre,
    bg: '#eff4fd',
    tagline: 'National cancer registry',
    desc:
      "A web platform for national cancer epidemiological surveillance, compliant with the CanReg5 (IARC/WHO) standard: dashboard, patient records, diagnoses, treatments and an interactive GIS map.",
    stack: ['React', 'Django', 'PostgreSQL'],
  },
  {
    id: 'vaccitrack',
    name: 'VacciTrack',
    type: 'desktop',
    img: vacci,
    bg: '#fcfdfe',
    tagline: 'Vaccination tracking system',
    desc:
      "A secure desktop application for an epidemiology department: patient records, vaccination follow-up, automatic alerts and reminders, Excel import and statistics dashboards.",
    stack: ['React', 'Node.js', 'MySQL', 'Electron'],
  },
   {
    id: 'portfolio',
    name: 'Portfolio',
    type: 'web',
    img: portfolio,
    bg: '#fcfdfe',
    tagline: 'Personal portfolio website',
    desc:
      "A personal portfolio website showcasing my projects, skills, and experience, built with modern web technologies.",
    stack: ['React', 'CSS', 'JavaScript'],
  },
   {
    id: 'ateliermanager',
    name: 'Atelier Manager',
    type: 'desktop',
    img: atelier,
    bg: '#fcfdfe',
    tagline: 'Atelier Manager System',
    desc:
      "A secure desktop application for an atelier management system: client records, project tracking, inventory management, and reporting dashboards.",
    stack: ['C#', '.NET 10', 'WinForms', 'SQLite'],
  },
   {
    id: 'registredesplaqueimmatriculation',
    name: 'Registre des Plaques d\'Immatriculation',
    type: 'mobile',
    img: atelier,
    bg: '#fcfdfe',
    tagline: 'Register of Vehicle License Plates',
    desc:
      "A mobile application for managing and tracking vehicle license plates, including registration, renewal, and notifications.",
    stack: ['Flutter','Dart','MySQL','PHP'],
  },
  {
    id: 'ecommerceplatform',
    name: 'E-commerce Platform',
    type: 'web',
    img: atelier,
    bg: '#fcfdfe',
    tagline: 'A comprehensive e-commerce platform for online shopping',
    desc:
      "A web application that allows users to browse products, add items to their cart, and complete purchases securely. It includes features like user authentication, product management, and order tracking.",
    stack: ['React', 'Node.js', 'SQLite', 'Express'],
  },
   {
    id: 'gestiondeclinique',
    name: 'Clinic Management',
    type: 'desktop',
    img: atelier,
    bg: '#fcfdfe',
    tagline: 'Clinic Management System',
    desc:
      "A desktop application for managing clinic operations, including patient records, appointment scheduling, and billing.",
    stack: ['React', 'Node.js', 'MySQL', 'Express','Electron'],
  },
]

export const TYPE_LABEL = { web: 'Web', mobile: 'Mobile', desktop: 'Desktop' }
