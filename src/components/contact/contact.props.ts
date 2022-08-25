import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ContactProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}