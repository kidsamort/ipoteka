import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { IBank } from 'contentfuls/types/contentful'

export interface PartnerProps extends ComponentPropsWithoutRef<'div'> {
  data: IBank[];
  children?: ReactNode;
}