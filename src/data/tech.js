import react from '../assets/tech/react.svg'
import flutter from '../assets/tech/flutter.svg'
import html5 from '../assets/tech/html5.svg'
import css3 from '../assets/tech/css3.svg'
import csharp from '../assets/tech/csharp.svg'
import java from '../assets/tech/java.svg'
import nodejs from '../assets/tech/nodejs.svg'
import flask from '../assets/tech/flask.svg'
import python from '../assets/tech/python.svg'
import javascript from '../assets/tech/javascript.svg'
import mysql from '../assets/tech/mysql.svg'
import postgresql from '../assets/tech/postgresql.svg'
import sqlite from '../assets/tech/sqlite.svg'

// level = 0–100, edit freely: it drives the animated bars.
export const SKILL_GROUPS = [
  {
    id: 'frontend',
    title: 'Frontend',
    cmd: 'ls ./frontend',
    desc: 'Fast, clean and responsive web and mobile interfaces.',
    items: [
      { name: 'React', icon: react, level: 85 },
      { name: 'Flutter', icon: flutter, level: 80 },
      { name: 'HTML', icon: html5, level: 92 },
      { name: 'CSS', icon: css3, level: 90 },
      { name: 'C#', icon: csharp, level: 65 },
      { name: 'Java', icon: java, level: 65 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    cmd: 'ls ./backend',
    desc: 'Reliable APIs, authentication and business logic.',
    items: [
      { name: 'Node.js', icon: nodejs, level: 80 },
      { name: 'Flask', icon: flask, level: 75 },
      { name: 'Python', icon: python, level: 82 },
      { name: 'JavaScript', icon: javascript, level: 88 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    cmd: 'ls ./database',
    desc: 'Data modeling, queries and relational databases.',
    items: [
      { name: 'MySQL', icon: mysql, level: 82 },
      { name: 'PostgreSQL', icon: postgresql, level: 78 },
      { name: 'SQLite', icon: sqlite, level: 80 },
    ],
  },
]

export const ALL_TECH = SKILL_GROUPS.flatMap((g) => g.items)
