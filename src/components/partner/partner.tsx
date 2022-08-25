import styles from 'components/partner/partner.module.css'
import { PartnerProps } from 'components/partner/partner.props'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'
import Title from 'components/UI/title'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 70,
  },
}

const Partner = ({ data }: PartnerProps): JSX.Element => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <Title size={'md'}>Банки партнеры</Title>
        <Carousel responsive={responsive} showDots={true} ssr
                  partialVisible
        >
          <div className={styles.wrapperBank}>
            {data.map((item, index) => {
              return (
                index <= 2 && (
                  <div key={index} className={styles.bank}><Image
                    src={`http:${item.fields.logo?.fields.file.url}`}
                    width={item.fields.logo?.fields.file.details.image?.width}
                    height={item.fields.logo?.fields.file.details.image?.height}
                    layout='fixed'
                    alt={item.fields.name} />
                  </div>
                )
              )
            })}
          </div>
          <div className={styles.wrapperBank}>
            {data.length > 2 && data.map((item, index) => {
              return (
                index > 2 && index <= 5 && (
                  <div key={index} className={styles.bank}><Image
                    src={`http:${item.fields.logo?.fields.file.url}`}
                    width={item.fields.logo?.fields.file.details.image?.width}
                    height={item.fields.logo?.fields.file.details.image?.height}
                    alt={item.fields.name} />
                  </div>
                )
              )
            })}
          </div>
          <div className={styles.wrapperBank}>
            {data.length > 5 && data.map((item, index) => {
              return (
                index > 5 && index <= 8 && (
                  <div key={index} className={styles.bank}><Image
                    src={`http:${item.fields.logo?.fields.file.url}`}
                    width={item.fields.logo?.fields.file.details.image?.width}
                    height={item.fields.logo?.fields.file.details.image?.height}
                    alt={item.fields.name} />
                  </div>
                )
              )
            })}
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Partner
