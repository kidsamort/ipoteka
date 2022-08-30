import styles from 'components/UI/button/button.module.css'
import { ButtonProps } from 'components/UI/button/button.props'

const Button = ({children, ...props}: ButtonProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} {...props}>{children}</button>
    </div>
  )
}

export default Button
