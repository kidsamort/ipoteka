import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface EmptyProps extends ComponentPropsWithoutRef<'div'> {
  tel: string[];
  mail: string[];
  loc: string[];
  children?: ReactNode;
}