export enum View {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ABOUT_JUJITSU = 'ABOUT_JUJITSU',
  CLUBS = 'CLUBS',
  EVENTS = 'EVENTS',
  CURRICULUM = 'CURRICULUM',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  label: string;
  view: View;
}

export interface Instructor {
  id: number;
  name: string;
  rank: string;
  bio: string;
  image: string;
}

export interface CurriculumItem {
  label: string;
  subLabel?: string;
  pdfUrl?: string; // Placeholder for future PDF links
}