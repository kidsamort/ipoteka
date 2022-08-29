import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { IReview } from 'contentfuls/types/contentful'

export interface ReviewProps extends ComponentPropsWithoutRef<'div'> {
  data: IReview[];
  children?: ReactNode;
}