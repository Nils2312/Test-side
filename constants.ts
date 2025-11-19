import { NavItem, View, BeltLevel, Instructor } from './types';

export const JJN_ORANGE = '#e34b17';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hjem', view: View.HOME },
  { label: 'Pensum', view: View.CURRICULUM },
  { label: 'Instruktører', view: View.INSTRUCTORS },
  { label: 'Inspirasjon', view: View.INSPIRATION },
  { label: 'Om Oss', view: View.ABOUT },
  { label: 'Kontakt', view: View.CONTACT },
];

export const LOGO_URL = "https://i.imgur.com/WdF1yqI.png";

export const BELT_LEVELS: BeltLevel[] = [
  {
    color: 'bg-white text-black',
    name: 'Hvitt Belte',
    description: 'Starten på reisen. Fokus på fallteknikk, grunnleggende bevegelser og respekt.',
    techniques: ['Fallteknikk (Ukemi)', 'Grunnleggende frigjøringer', 'Enkle kast']
  },
  {
    color: 'bg-yellow-400 text-black',
    name: 'Gult Belte',
    description: 'Det første steget videre. Forståelse av balansebrudd og mer komplekse låser.',
    techniques: ['Hoftekast (O Goshi)', 'Håndleddslåser', 'Blokkeringer']
  },
  {
    color: 'bg-orange-500 text-black',
    name: 'Oransje Belte',
    description: 'Kroppskontroll og hurtighet. Kombinasjoner av slag, spark og kast.',
    techniques: ['Skulderkast (Seoi Nage)', 'Kvelninger', 'Avanserte frigjøringer']
  },
  {
    color: 'bg-green-600 text-white',
    name: 'Grønt Belte',
    description: 'Presisjon og flyt. Overganger mellom stående kamp og bakkekamp.',
    techniques: ['Offensive kombinasjoner', 'Forsvar mot våpen (kniv)', 'Avansert bakkekamp']
  },
  {
    color: 'bg-blue-600 text-white',
    name: 'Blått Belte',
    description: 'Dypere forståelse av prinsipper. Lederskap og instruksjon begynner å forme seg.',
    techniques: ['Sutemi Waza (Offerkast)', 'Komplekse kontringer', 'Taktisk forståelse']
  },
  {
    color: 'bg-stone-900 text-white border border-white',
    name: 'Svart Belte',
    description: 'En ny begynnelse. Mestring av grunnleggende teknikker og evnen til å improvisere.',
    techniques: ['Alle pensumteknikker', 'Kata', 'Instruksjonsferdigheter']
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: "Sensei Tor",
    rank: "4. Dan",
    bio: "Hovedinstruktør med over 25 års erfaring. Spesialist på kast og bakkekamp.",
    image: "https://picsum.photos/id/338/400/500"
  },
  {
    id: 2,
    name: "Sensei Linda",
    rank: "2. Dan",
    bio: "Tidligere norgesmester. Fokus på selvforsvar for kvinner og teknisk presisjon.",
    image: "https://picsum.photos/id/64/400/500"
  },
  {
    id: 3,
    name: "Senpai Erik",
    rank: "1. Dan",
    bio: "Leder for barne- og ungdomspartiet. Entusiastisk og motiverende.",
    image: "https://picsum.photos/id/91/400/500"
  }
];
