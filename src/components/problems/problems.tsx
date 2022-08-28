import { ProblemsProps } from 'components/problems/problems.props'
import styles from './problems.module.css'
import Card from 'components/UI/card'
import Title from 'components/UI/title'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const Problems = ({ data, heading }: ProblemsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <Title size={'md'}>{heading}</Title>
      </div>
      <div className='container'>
        <div className={styles.cardsWrapper}>
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

export default Problems
