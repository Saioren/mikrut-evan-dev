export type RichTextNode = {
  type: string;
  children: RichTextNode[];
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  small?: boolean;
  code?: boolean;
  format?: string;
  direction?: string;
  indent?: number;
  version?: number;
  url?: string;
  relationTo?: string;
  newTab?: boolean;
};

export type RichText = {
  root: RichTextNode;
};
