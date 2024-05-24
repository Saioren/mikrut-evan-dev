import { HeroType as Hero } from '@/types/Hero/types';
import { Blocks } from '@/types/Blocks/types'
import { Meta } from '../Meta/types';

export type PageType = {
  meta: Meta;
  id: string;
  title: string;
  hero: Hero;
  layout: Blocks;
  slug: string;
  author: {
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    loginAttempts: number;
  };
  _status: string;
  createdAt: string;
  updatedAt: string;
}
