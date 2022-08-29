import { ComponentPropsWithoutRef, LegacyRef, ReactNode } from 'react'
import { IService } from 'contentfuls/types/contentful'

export interface ServicesProps extends ComponentPropsWithoutRef<'div'> {
  data: IService[];

  children?: ReactNode;
}