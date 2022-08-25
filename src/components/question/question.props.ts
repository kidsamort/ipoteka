import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface QuestionProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  children?: ReactNode;
}