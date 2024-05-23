import { Link } from '@/types/Link/types';

export type FooterMenuLink = {
  appearance?: 'primary' | 'secondary' | 'tertiary'
  label?: string
  useLink?: boolean
  link?: Link
}

export type Footer = {
  column1?: FooterMenuLink[]
  column2?: FooterMenuLink[]
}
