import { Media } from '@/types/Media/types';
import { Meta } from '@/types/Meta/types';
import { HeroType as Hero } from '@/types/Hero/types';
import { Blocks } from '@/types/Blocks/types'
import { User } from '@/types/User/types';

export type Page = {
  id: string
  title: string
  hero: Hero
  showBreadcrumbs?: boolean,
  slug: string
  image?: Media
  layout: Blocks
  meta: Meta
  excerpt?: string
  parent?: Page | string
  author: User
  updatedAt?: string
  appUrl?: string
  isPasswordProtected?: boolean
}
