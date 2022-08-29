import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { INav } from 'contentfuls/types/contentful'

export interface HeaderProps extends ComponentPropsWithoutRef<'div'> {
  tel: string[];
  nav: INav;
  // mail: string[];
  // loc: string[];
  children?: ReactNode;
}