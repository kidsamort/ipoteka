import styles from 'components/UI/cardsContact/cardsContact.module.css'
import {
  CardsContactProps,
} from 'components/UI/cardsContact/cardsContact.props'

const CardsContact = ({
                        title,
                        contact,
                        icon,
                      }: CardsContactProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{icon}</div>
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
