import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface CardsContactProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  icon?: string;
  contact: string[]
  children?: ReactNode;
}