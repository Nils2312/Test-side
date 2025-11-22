
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
    image: "./rune.jpg"
  },
  {
    id: 2,
    name: "Karl Fredrik Skjørshammer",
    rank: "7. Dan",
    bio: "Bærum Ju Jutsu Klubb",
    image: "https://picsum.photos/id/64/400/500"
  },
  {
    id: 3,
    name: "Jan Erik Karlsen",
    rank: "5. Dan",
    bio: "Sentrum Kampsport - Sarpsborg",
    image: "https://picsum.photos/id/91/400/500"
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
