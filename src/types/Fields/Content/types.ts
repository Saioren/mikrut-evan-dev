import { LinkGroup } from "../Link/types";
import { RichText } from "../RichText/types"

export type Content = {
    richText: RichText;
    links?: LinkGroup;
}