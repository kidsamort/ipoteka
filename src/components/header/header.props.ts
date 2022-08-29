import { ComponentPropsWithoutRef, LegacyRef, ReactNode } from 'react'
import { INav } from 'contentfuls/types/contentful'

export interface HeaderProps extends ComponentPropsWithoutRef<'div'> {
  refs: LegacyRef<HTMLDivElement>[];
  tel: string[];
  nav: INav;
  // mail: string[];
  // loc: string[];
  children?: ReactNode;
}