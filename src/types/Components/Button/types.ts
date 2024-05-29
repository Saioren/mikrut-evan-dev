import { Link } from "@/types/Fields/Link/types";

export type ButtonProps = {
    className?: string;
    linkFromCMS: Link;
    link?: Link;
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
    buttonType?: 'submit' | 'button'
}