import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { IServicesCard } from 'contentfuls/types/contentful'

export interface ProblemsProps extends ComponentPropsWithoutRef<'div'> {
  data: IServicesCard[];
  heading: string;
  children?: ReactNode;
}