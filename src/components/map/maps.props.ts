import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { IMap } from 'contentfuls/types/contentful'

export interface MapsProps extends ComponentPropsWithoutRef<'div'> {
  loc: string[];
  children?: ReactNode;
}