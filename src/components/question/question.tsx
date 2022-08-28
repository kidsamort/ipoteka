import styles from 'components/question/question.module.css'
import { QuestionProps } from 'components/question/question.props'
import Title from 'components/UI/title'
import Button from 'components/UI/button'

const Question = ({ title }: QuestionProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <Title size={'sm'}>{title}</Title>
      </div>
      <div className='container'>
        <form className={styles.questionInputWrapper} action=''>
          <img className={styles.image}  src='/female.png' alt='девушка думает' />
          <textarea className={styles.questionInput} style={{ height: '127px' }}
                    placeholder={'Ваш вопрос или комментарий'}
                    name='text'></textarea>
          <input className={styles.questionInput} type='name'
                 placeholder={'Имя*'} />
          <input className={styles.questionInput} type='tel'
                 placeholder={'Телефон*'} />
          <div className={styles.confirm}>
            <input className={styles.confirmCheckbox} type='checkbox' />
            <p className={styles.confirmText}>Нажимая
              кнопку &quot;Отправить&quot;, я подтверждаю свою
              дееспособность, даю согласие на обработку моих
              персональных данных в соответствии с условиями</p>
          </div>
          <Button>Отправить</Button>
        </form>
      </div>
    </div>
  )
}

export default Question
