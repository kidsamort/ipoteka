import styles from 'components/services/services.module.css'
import { ServicesProps } from 'components/services/services.props'
import Title from 'components/UI/title'
import Card from 'components/UI/card'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Services = ({ data }: ServicesProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <Title size={'md'}>Наши услуги</Title>
        <div  className={styles.cardsWrapper}>

          {data.map((item, index) => {
            return (
              <Card key={index} title={item.fields.title!}
                    image={`http:${item.fields.image?.fields.file.url}`}>
                {documentToReactComponents(item.fields.text!)}
              </Card>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Services
