import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}