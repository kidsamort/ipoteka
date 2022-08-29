import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface CardsContactProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  icon: IconType;
  contact: string[]
  children?: ReactNode;
}