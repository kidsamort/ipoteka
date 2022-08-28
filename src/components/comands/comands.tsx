import styles from './comands.module.css'
import { ComandsProps } from './comands.props'
import Title from 'components/UI/title'
import Card from 'components/UI/card'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Comands = ({ data }: ComandsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <Title size={'md'}>Наша команда</Title>
        <div  className={styles.cardsWrapper}>

          {data.map((item, index) => {
            return (
              <Card key={index} title={item.fields.name!} subtitle={item.fields.job!}
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

export default Comands
