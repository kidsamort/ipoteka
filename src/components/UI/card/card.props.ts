import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}