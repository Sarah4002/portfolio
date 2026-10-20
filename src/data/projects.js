import makla from '../assets/makla-zaman.webp'
import registre from '../assets/registre-cancer.webp'
import vacci from '../assets/vaccitrack.webp'

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
]

export const TYPE_LABEL = { web: 'Web', mobile: 'Mobile', desktop: 'Desktop' }
