import { ComponentPropsWithoutRef, LegacyRef, ReactNode } from 'react'

export interface RatingProps extends ComponentPropsWithoutRef<'div'> {
  rating: number;
  children?: ReactNode;
}