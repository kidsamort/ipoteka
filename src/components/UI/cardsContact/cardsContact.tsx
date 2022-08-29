import styles from 'components/UI/cardsContact/cardsContact.module.css'
import {
  CardsContactProps,
} from 'components/UI/cardsContact/cardsContact.props'

const CardsContact = ({
                        title,
                        contact,
                        icon,
                      }: CardsContactProps): JSX.Element => {
  const Icon = icon
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <ul>
        {contact.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default CardsContact
