import { SectionProps, DisplayProps } from './types.d';
declare global {
  // Interfaces
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
  }

  export interface InfoProps {
    infoContentFirst?: string;
    infoContentSecond?: string;
  }

  export interface DisplayProps {
    Flex?: any;
    Grid?: any;
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

  export interface SectionProps extends DisplayProps{}

  //export interface BaseSectionProps extends SectionProps, DisplayProps {}
  export interface BaseSectionCenterProps
    extends SectionCenterProps,
      DisplayProps {}

  // Types
  export type TypeProps = {
    data: Array<ListProps>;
    className?: string;
    id?: string;
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
  };
}

export {};
