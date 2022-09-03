import styles from './card.module.css'
import { CardProps } from './card.props'
import Image from 'next/image'

const Card = ({ title, subtitle, children, image }: CardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image blurDataURL={image}
               width={'340px'} height={'300px'} layout={'intrinsic'}
               className={styles.imageD} src={image} alt={'обложка'} />
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
