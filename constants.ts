
import { NavItem, View, Instructor, CurriculumItem } from './types';

export const JJN_ORANGE = '#e34b17';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hjem', view: View.HOME },
  { label: 'Om oss', view: View.ABOUT },
  { label: 'Om Ju Jitsu', view: View.ABOUT_JUJITSU },
  { label: 'Klubber', view: View.CLUBS },
  { label: 'Arrangement', view: View.EVENTS },
  { label: 'Pensum', view: View.CURRICULUM },
  { label: 'Kontakt', view: View.CONTACT },
];

export const LOGO_URL = "https://i.postimg.cc/gjwxz2wk/logo.png";

export const INSTRUCTORS: Instructor[] = [
  {
    id: 1,
    name: "Rune Schou Henrichsen",
    rank: "8. Dan",
    bio: "Leder av Ju jitsu Norge. Til daglig underviser han i Oslo Ju jitsuklubb og Bærum Ju jitsuklubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Karl Fredrik Skjørshammer",
    rank: "7. Dan",
    bio: "Bærum Ju Jutsu Klubb",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Jan Erik Karlsen",
    rank: "5. Dan",
    bio: "Sentrum Kampsport - Sarpsborg",
    image: "https://images.unsplash.com/photo-1684909927604-8b3fbc21146a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const CURRICULUM_KIDS: CurriculumItem[] = [
  { label: "Hvitt til Gult belte" },
  { label: "Fra Gult til Blått belte" },
  { label: "Fra Blått til 2. Brunt belte" },
  { label: "Sort 1. og Sort 2. belte" }
];

export const CURRICULUM_ADULTS: CurriculumItem[] = [
  { label: "Graderingssystemet 2020", subLabel: "Generell info" },
  { label: "Pensum til 5. kyu", subLabel: "GULT BELTE" },
  { label: "Pensum til 4. kyu", subLabel: "ORANSJE BELTE" },
  { label: "Pensum til 3. kyu", subLabel: "GRØNT BELTE" },
  { label: "Pensum til 2. kyu", subLabel: "BLÅTT BELTE" },
  { label: "Pensum til 1. kyu", subLabel: "BRUNT BELTE" },
  { label: "Pensum til 1. Dan", subLabel: "SORT BELTE" }
];