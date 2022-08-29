import styles from './card.module.css'
import { CardProps } from './card.props'

const Card = ({ title, subtitle, children, image }: CardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.imageD} src={image} alt={'обложка'} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <div className={styles.text}>
        {children}
      </div>
    </div>
  )
}

export default Card
