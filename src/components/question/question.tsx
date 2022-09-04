import styles from 'components/question/question.module.css'
import { QuestionProps } from 'components/question/question.props'
import Title from 'components/UI/title'
import Button from 'components/UI/button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'


const Question = ({ data, title, action }: QuestionProps): JSX.Element => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)
  const [privacy, setPrivacy] = useState<boolean>(false)
  const [succes, setSucces] = useState<boolean>(false)
  const [errLicense, setErrLicense] = useState(false)
  const [buttonText, setButtonText] = useState('')

  async function sendMessage() {
    if (privacy === true) {
      setSucces(true)
      setErrLicense(false)
      setButtonText('Идет отправка...')
      await axios.post('https://ipotekazdes.ru/api/send', {
        action,
        name,
        tel,
        message,
        rating,
        privacy,
      }).then(data => {
        setPrivacy(false)
        setMessage('')
        setTel('')
        setName('')
        setButtonText('Успешно отправленно!')
      })
    } else {
      setErrLicense(true)
    }

  }

  useEffect(() => {
    privacy && setErrLicense(false)
  }, [privacy])


  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <Title size={'sm'}>{title}</Title>
      </div>
      <div className='container'>
        <div className={styles.questionInputWrapper}>
          <div className={styles.imageContainer}>
            <Image className={styles.image}
                   priority
                   layout={'fill'}
                   src={`http:${data.fields.image?.fields.file.url!}`}
                   alt='девушка думает' />
          </div>
          <textarea onChange={e => setMessage(e.target.value)}
                    value={message}
                    className={styles.questionInput} style={{ height: '127px' }}
                    placeholder={data.fields.inputText!}
                    name='text'></textarea>
          <input onChange={e => setName(e.target.value)}
                 value={name}
                 className={styles.questionInput} type='name'
                 placeholder={data.fields.inputName!} />
          <input onChange={e => setTel(e.target.value)}
                 value={tel}
                 className={styles.questionInput} type='tel'
                 placeholder={data.fields.InputTel!} />
          <div className={styles.confirm}>
            <input onChange={e => setPrivacy(e.target.checked)}
                   className={styles.confirmCheckbox} type='checkbox' />

            <div
              className={styles.confirmText}>{documentToReactComponents(data.fields.license!)}</div>

          </div>
          {errLicense ?
            <p style={{ color: 'red' }}>Пожалуйста подтвердите
              условия</p> : <></>}
          <Button
            onClick={sendMessage}>{succes ? buttonText : data.fields.buttons!}</Button>

        </div>
      </div>
    </div>
  )
}

export default Question
