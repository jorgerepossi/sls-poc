import { SectionProps, DisplayProps } from "./types.d";
declare global {
  // Types

  export type DisplayProps = {
    Flex?: any;
    Grid?: any;
    JustifyCenter?: any;
    Display?:
      | "flex"
      | "flex-inline"
      | "block"
      | "inline-block"
      | "grid"
      | "none";
    Direction?: "row" | "row-reverse" | "column" | "column-reverse";
    JustifyContent?:
      | "flex-start"
      | "center"
      | "flex-end"
      | "space-between"
      | "space-around"
      | "space-evenly";
    AlignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    AlignContent?:
      | "flex-start"
      | "center"
      | "flex-end"
      | "stretch"
      | "baseline";
  };

  export type DynamicType = {
    subtitle: string;
    content: string;
    title: string;
  };

  export type InfoType = {
    data: Array<InfoProps>;
    className?: string;
    id?: string;
    iconimg?: string;
  };

  export type Tema = "blanco" | "negro";

  // Interfaces

  export interface Uno<P = {}> {
    props: P &
      Partial<Record<Tema>> & {
        blanco?: "#fff";
        negro?: "#000";
      };
  }

  export interface NavbarProps {
    to?: string;
    className?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    exact?: string;
    sitelink?: string;
    alt?: string;
    title?: string;
    target?: string;
    onClick?: Function;
  }

  export interface ListProps {
    to?: string;
    className?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    exact?: string;
    sitelink?: string;
    alt?: string;
    title?: string;
    target?: string;
    seo?: string;
    name?: string;
    iconimg?: any;
  }

  export interface HeadingProps extends Partial<DisplayProps> {
    className?: string;
    id?: string;
    subtitle?: string;
    title?: string;
    content?: string;
  }

  export interface SectionCenterProps {
    id?: string;
    className?: string;
    children: any;
    props?: any;
    display?: string;
  }

  export interface SectionProps {
    id?: string;
    className?: string;
    children: any;
  }

  export interface TypeProps extends Partial<DisplayProps> {
    data: Array<ListProps>;
    className?: string;
    listClass?: string;
    id?: string;
    name?: string;
  }
  export interface InfoProps {
    infoContentFirst?: string;
    infoContentSecond?: string;
    iconimg?: any;
    data: Array<>;
  }

  export interface SectionProps extends Partial<DisplayProps> {}
  export interface SectionCenterProps extends Partial<DisplayProps> {}
}

export {};
