import styles from 'components/review/review.module.css'
import { ReviewProps } from 'components/review/review.props'
import Title from 'components/UI/title'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Carousel from 'react-multi-carousel'
import Image from 'next/image'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 627, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
}
const Review = ({ data }: ReviewProps): JSX.Element => {

  return (
    <div className={styles.wrapper}>
      <Title size={'sm'}>Наши отзывы</Title>
      <Carousel responsive={responsive} showDots={true} ssr
      >
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.heading}>
                <Image className={styles.avatar}
                       width={'32px'}
                       height={'32px'}
                       layout={'fixed'}
                       blurDataURL={`http:${item.fields.avatar?.fields.file.url}`}
                       src={`http:/${item.fields.avatar?.fields.file.url}`}
                       alt='' />
                <div className={styles.user}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                    <p className={styles.name}>{item.fields.name}</p><span
                    className={styles.city}>г. {item.fields.town}</span>
                  </div>
                  {/*<div*/}
                  {/*  className={styles.rating}><Rating rating={item.fields.rating!}/></div>*/}
                </div>
              </div>
              <div className={styles.text}>
                {documentToReactComponents(item.fields.text!)}
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Review
