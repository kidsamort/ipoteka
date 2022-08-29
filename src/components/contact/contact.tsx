import { EmptyProps } from 'components/empty/empty.props'
import styles from 'components/contact/contact.module.css'
import CardsContact from 'components/UI/cardsContact'
import Title from 'components/UI/title'
import {AiFillPhone,} from 'react-icons/ai'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


const Contact = ({ tel, mail, loc }: EmptyProps): JSX.Element => {


  return (
    <div className={styles.wrapper}>
      <Title size={'md'}>Контакты</Title>
      <div className={styles.contactsWrapper}>
        <CardsContact icon={AiFillPhone} title={'Телефоны'} contact={tel} />
        <CardsContact icon={MdEmail} title={'Email Адрес'}
                      contact={mail} />
        <CardsContact icon={FaMapMarkedAlt} title={'Адрес офиса'}
                      contact={loc} />
      </div>
    </div>
  )
}

export default Contact
