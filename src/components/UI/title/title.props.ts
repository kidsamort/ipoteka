import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface TitleProps extends ComponentPropsWithoutRef<'div'> {
  size: 'sm'| 'md';
  children?: ReactNode;
}