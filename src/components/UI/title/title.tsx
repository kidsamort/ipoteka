import styles from 'components/UI/title/title.module.css'
import { TitleProps } from 'components/UI/title/title.props'
import cn from 'classnames'

const Title = ({ size, children }: TitleProps): JSX.Element => {
  return (
    <h2 className={cn({ [styles.title]: size === 'md', [styles.subtitle]: size === 'sm' })}>{children}</h2>
  )
}

export default Title
