export enum View {
  HOME = 'HOME',
  CURRICULUM = 'CURRICULUM',
  INSTRUCTORS = 'INSTRUCTORS',
  INSPIRATION = 'INSPIRATION',
  ABOUT = 'ABOUT',
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

export interface BeltLevel {
  color: string;
  name: string;
  description: string;
  techniques: string[];
}
