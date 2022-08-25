import styles from 'components/UI/button/button.module.css'
import { ButtonProps } from 'components/UI/button/button.props'

const Button = ({children}: ButtonProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>{children}</button>
    </div>
  )
}

export default Button
