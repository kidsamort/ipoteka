import {getLinkEntry} from "contentfuls/contentful";

export const loadHome = async () => {
  return await getLinkEntry('home')
}

export const loadHomeButtons = async () => {
  return await getLinkEntry('homeButton')
}
export const loadHomeServices = async () => {
  return await getLinkEntry('services')
}
export const loadHomeServicesCards = async () => {
  return await getLinkEntry('servicesCard')
}

export const loadPartner = async () => {
  return await getLinkEntry('partner')
}
export const loadBankLogo = async () => {
  return await getLinkEntry('bank')
}

export const loadHomeNav = async () => {
  return await getLinkEntry('nav')
}
export const loadHomeServ = async () => {
  return await getLinkEntry('service')
}

export const loadHomeComands = async () => {
  return await getLinkEntry('comands')
}
export const loadMap = async () => {
  return await getLinkEntry('map')
}