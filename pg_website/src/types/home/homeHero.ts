// src/types/home/homeHero.ts
export interface Hero {
  id: number;
  index: number;
  title: string;
  description: string;
  images: string[];
}

export interface Impact {
  id: number;
  title: string;
  number: string;
  description: string;
}

export interface HomeHeroProps {
  heroes: Hero[];
  impacts: Impact[];
  onBusinessClick?: () => void;
  onAboutClick?: () => void;
}

export interface TitleFormat {
  firstPart: string;
  lastPart: string;
}