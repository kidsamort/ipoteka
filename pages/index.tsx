import Welcome from 'components/welcome'
import Problems from 'components/problems'
import Partner from 'components/partner'
import Services from 'components/services'
import Review from 'components/review'
import Contact from 'components/contact'
import Maps from 'components/map'
import {
  loadBankLogo, loadFeedback,
  loadHome,
  loadHomeButtons,
  loadHomeComands,
  loadHomeNav,
  loadHomeServ,
  loadHomeServices,
  loadHomeServicesCards, loadMap, loadReview,

} from 'contentfuls/lib/home'
import {
  IBank, IComands, IContacts, IFeedback,
  IHome, IHomeButton, IMap,
  INav,
  IPartner, IReview, IService, IServices, IServicesCard,
} from 'contentfuls/types/contentful'
import { loadContacts } from 'contentfuls/lib/footer'
import { useEffect, useState } from 'react'
import Comands from 'components/comands/comands'
import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import { GetStaticProps } from 'next'
import Question from 'components/question'

interface HomeProps {
  mapLoc: IMap,
  banks: IBank[],
  partner: IPartner,
  home: IHome,
  buttons: IHomeButton[],
  services: IServices,
  service: IService[],
  contacts: IContacts[],
  servicesCards: IServicesCard[],
  comands: IComands[],
  navigation: INav,
  review: IReview[],
  feedback: IFeedback[],
}

const Home = ({
                home,
                buttons,
                services,
                servicesCards,
                service,
                banks,
                contacts,
                navigation,
                mapLoc,
                comands,
                review,
                feedback,
              }: HomeProps) => {
  const [phones, setPhones] = useState<string[]>([])
  const [mails, setMails] = useState<string[]>([])
  const [location, setLocations] = useState<string[]>([])
  const [contact, setContact] = useState<string[]>([])

  useEffect(() => {
    const phone: string[] = []
    contacts.map(data => data.fields.slug === 'telefon' && phone.push(data.fields.description!))
    setPhones(phone)
    const email: string[] = []
    contacts.map(data => data.fields.slug === 'pochta' && email.push(data.fields.description!))
    setMails(email)
    const addres: string[] = []
    contacts.map(data => data.fields.slug === 'adres' && addres.push(data.fields.description!))
    setLocations(addres)
    const con: string[] = []
    contacts.map(data => data.fields.slug === 'telefon' && con.push(data.fields.description!.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, (s, code, n1, n2, n3) => `+7 (${code}) ${n1}-${n2}-${n3}`)))
    setContact(con)
  }, [contacts])
  return (
    <>
      <Head>
        <meta name='viewport'
              content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <script type='text/javascript' src={'/replan.js'} async />
        <title>?????????????? ??????????</title>
      </Head>

      <Header
        nav={navigation} tel={phones} />

      <div id='home'>
        <Welcome title={home.fields.title!}
                 subtitle={home.fields.subtitle!}
                 info={home.fields.info!} action={home.fields.action!}
                 bg={home.fields.background!.fields.file.url}
                 tel={phones} buttons={buttons} nav={navigation} />
      </div>
      <Problems data={servicesCards} heading={services.fields.heading!} />
      <Question
        data={feedback[0]}
        action={feedback[0].fields.block!}
        title={feedback[0].fields.title!} />
      <Partner data={banks} />

      <div id='services'>
        <Services data={service} />
      </div>

      <Question
        data={feedback[1]}
        action={feedback[1].fields.block!}
        title={feedback[1].fields.title!} />

      <div className='container'>
        <Review data={review} />
      </div>
      <Question
        data={feedback[2]}
        action={feedback[2].fields.block!}
        title={feedback[2].fields.title!} />

      <div id='about'>
        <Comands data={comands} />
      </div>

      <div id='contacts'>
        <div className='container'>
          <Contact tel={contact} mail={mails} loc={location} />
        </div>
      </div>


      <Maps loc={mapLoc.fields.once?.split(',')!} />
      <div id='footer'>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [homeItem] = await loadHome().then(data => data.items)
  const buttons = await loadHomeButtons().then(data => data.items)
  const [services] = await loadHomeServices().then(data => data.items)
  const service = await loadHomeServ().then(data => data.items)
  const servicesCards = await loadHomeServicesCards().then(data => data.items)
  const banks = await loadBankLogo().then(data => data.items)
  const contacts = await loadContacts().then(data => data.items)
  const comands = await loadHomeComands().then(data => data.items)
  const [navigation] = await loadHomeNav().then(data => data.items)
  const [mapLoc] = await loadMap().then(data => data.items)
  const review = await loadReview().then(data => data.items)
  const feedback = await loadFeedback().then(data => data.items)


  return {
    props: {
      home: homeItem,
      feedback,
      review,
      comands,
      mapLoc,
      buttons,
      services,
      servicesCards,
      banks,
      service,
      contacts,
      navigation,
    },
    revalidate: 300,
  }
}

export default Home
