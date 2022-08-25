import { EmptyProps } from 'components/empty/empty.props'
import styles from './empty.module.css'

const Empty = ({}: EmptyProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>

    </div>
  )
}

export default Empty
