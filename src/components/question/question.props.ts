import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { IFeedback } from 'contentfuls/types/contentful'

export interface QuestionProps extends ComponentPropsWithoutRef<'div'> {
  data: IFeedback;
  action: string;
  title: string;
  children?: ReactNode;
}