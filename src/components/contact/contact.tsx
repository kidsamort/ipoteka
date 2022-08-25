import { EmptyProps } from 'components/empty/empty.props'
import styles from 'components/contact/contact.module.css'
import CardsContact from 'components/UI/cardsContact'
import Title from 'components/UI/title'


const Contact = ({ tel, mail, loc }: EmptyProps): JSX.Element => {


  return (
    <div className={styles.wrapper}>
      <Title size={'md'}>Контакты</Title>
      <CardsContact title={'Телефоны'} contact={tel} />
      <CardsContact title={'Email Адрес'}
                    contact={mail} />
      <CardsContact title={'Адрес офиса'}
                    contact={loc} />
    </div>
  )
}

export default Contact
