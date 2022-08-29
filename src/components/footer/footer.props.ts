import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface FooterProps extends ComponentPropsWithoutRef<'div'> {
  // tel: string[];
  // mail: string[];
  // loc: string[];
  children?: ReactNode;
}