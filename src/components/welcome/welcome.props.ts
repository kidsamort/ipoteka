import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Document } from "@contentful/rich-text-types";
import { IContacts, IHomeButton, INav } from 'contentfuls/types/contentful'

export interface IPhoneNumber {
  icon: string;
  number: string;
}

export interface WelcomeProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  subtitle: Document;
  info: string;
  action: string;
  tel: string[];
  bg: string;
  buttons: IHomeButton[];
  nav: INav;
  children?: ReactNode;
}