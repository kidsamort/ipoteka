import {getLinkEntry} from "contentfuls/contentful";

export const loadFooter = async () => {
  return await getLinkEntry('footer')
}
export const loadContacts = async () => {
  return await getLinkEntry('contacts')
}