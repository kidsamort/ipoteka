import React from 'react'
import styles from './empty.module.css'
import { RatingProps } from 'components/UI/rating/rating.props'
import { useEffect, useState } from 'react'
import { ReactComponent as StarIcon } from 'components/UI/rating/star.svg'

const Rating = ({ rating }: RatingProps): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(0).fill(<></>))

  useEffect(() => {
    const ratingCreate = (rate: number) => {
      const updateArray = ratingArr.map((item, index) => {
        return (
          <StarIcon key={index} style={{ fill: index < rate ? 'red' : 'gray' }}
          />
        )
      })
      setRatingArr(updateArray)
    }
    ratingCreate(rating)
  }, [rating, ratingArr])


  return (
    <div
      className={styles.rating}>{ratingArr.map((item, index) =>
      <span key={index}>{item}</span>)}
    </div>
  )
}

export default Rating
