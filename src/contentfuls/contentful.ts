import { createClient, EntryCollection } from 'contentful'
import * as G from './types/contentful'

type ContentType =
  G.IHome
  | G.IHomeButton
  | G.IServices
  | G.IServicesCard
  | G.IPartner
  | G.IBank
  | G.IFooter
  | G.IContacts
  | G.INav
  | G.IService
  | G.IComands
  | G.IMap;


type ContentEntry<ID extends G.CONTENT_TYPE> = Pick<ContentType, 'fields'> & {
  sys: {
    contentType: {
      sys: {
        id: ID;
      };
    };
  };
};
type ContentTypeID<CT extends ContentType = ContentType> = CT['sys']['contentType']['sys']['id'];
type ContentEntryByID<ID extends G.CONTENT_TYPE> = Extract<ContentType, ContentEntry<ID>>;
const contentfulClient = createClient({
  space: 'yg61iih4r5cb',
  accessToken: '3e48Tzln37HaNN_dqbpLasQ2DTWYvhwwh6bjRNd5ifU',
  environment: 'master',
})
export const getLinkEntry = async <CTID extends ContentTypeID, CE extends ContentEntryByID<CTID>>(
  contentTypeID: CTID,
): Promise<EntryCollection<CE['fields']>> => {
  return contentfulClient.getEntries({
    content_type: contentTypeID,
  })
}