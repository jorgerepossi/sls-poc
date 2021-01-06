import { SectionProps, DisplayProps } from "./types.d";

declare global {
  // Types

  export type DisplayProps = {
    Flex?: any;
    Grid?: any;
    DirectionColumn?: any;
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
    subtitle?: string;
    content?: string;
    title?: string;
    value?: number;
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
    imagen?: string | undefined;
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
    styleinline?: any;
  }

  export interface SectionProps {
    id?: string;
    className?: string;
    children: any;
    styleinline?: any;
    bg?: string;
    Flex?: any;
    color?: string, 
  background?: string
  }

  export interface TypeProps extends Partial<DisplayProps> {
    data: Array<ListProps>;
    className?: string;
    listClass?: string;
    id?: string;
    name?: string;
    onClick?:any}
  export interface InfoProps extends HTMLAttributes<T> {
    infoContentFirst?: string;
    infoContentSecond?: string;
    iconimg?: any;
    data: Array<>;
    bg?: string | undefined;
    background?: string;

  }

 

  export interface SectionProps extends Partial<DisplayProps> {}
  export interface SectionCenterProps extends Partial<DisplayProps> {}
}

export {};
