import { ComponentPropsWithoutRef, LegacyRef, ReactNode } from 'react'

export interface EmptyProps extends ComponentPropsWithoutRef<'div'> {
  tel: string[];
  mail: string[];
  loc: string[];
  ref: LegacyRef<HTMLDivElement> | undefined

  children?: ReactNode;
}