import { ComponentPropsWithoutRef, LegacyRef, ReactNode } from 'react'
import { IService } from 'contentfuls/types/contentful'

export interface ServicesProps extends ComponentPropsWithoutRef<'div'> {
  data: IService[];
  ref: LegacyRef<HTMLDivElement> | undefined

  children?: ReactNode;
}