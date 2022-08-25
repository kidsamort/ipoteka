import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { IComands, IService } from 'contentfuls/types/contentful'

export interface ComandsProps extends ComponentPropsWithoutRef<'div'> {
  data: IComands[];
  children?: ReactNode;
}