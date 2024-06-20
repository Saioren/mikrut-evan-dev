import { Link, LinkAppearances } from "@/types/Fields/Link/types";

export type ButtonProps = {
    className?: string;
    linkFromCMS: Link;
    link?: Link;
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
    buttonType?: 'submit' | 'button'
    customUrl?: string
    appearance?: LinkAppearances
    gradient?: boolean
    centered?: boolean
}