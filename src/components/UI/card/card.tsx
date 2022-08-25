import styles from './card.module.css'
import { CardProps } from './card.props'
import Image from 'next/image'

const Card = ({ title, subtitle, children, image }: CardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} src={image} alt={'обложка'} width={274} height={196} />
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <div className={styles.text}>
        {children}
      </div>
    </div>
  )
}

export default Card
