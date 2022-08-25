import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface ReviewProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
}