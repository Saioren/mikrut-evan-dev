import { RichText } from "@/types/Fields/RichText/types";
import { Link } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";
import { Padding } from "../Padding/types";

type HeroTypes = 'standard'

export type Hero = {
    type?: HeroTypes;
    standardHero?: StandardHero; 
}

export type StandardHero = {
    type?: 'standard';
    padding: Padding;
    heading: string;
    content: {
        richText?: RichText;
        links?: Link[];
    }
    heroImage: Media;
}
