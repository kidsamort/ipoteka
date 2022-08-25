import styles from 'components/review/review.module.css'
import { ReviewProps } from 'components/review/review.props'
import Title from 'components/UI/title'

const Review = ({}: ReviewProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <Title size={'sm'}>Наши отзывы</Title>
        <div className={styles.card}>
          <div className={styles.heading}>
            <div className={styles.avatar}></div>
            <div className={styles.user}>
              <p className={styles.name}>Лиза Попова<span
                className={styles.city}>г. Новороссийск</span></p>
              <div className={styles.rating}>*****</div>
            </div>
          </div>
          <div className={styles.text}>После нескольких отказов банков, при
            попытке
            подать на ипотеку самостоятельно, обратились к специалисту в ипотека
            здесь и получили самые выгодные предложения от банков!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
