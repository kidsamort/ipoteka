import { WelcomeProps } from 'components/welcome/welcome.props'
import styles from './welcome.module.css'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Welcome = ({
                   title,
                   subtitle,
                   action,
                   info,
                   bg,
                   tel,
                   buttons,
                 }: WelcomeProps): JSX.Element => {
  return (
    <div className={'container'}>
      <div className={styles.wrapper}>
        <div style={{ height: '60px' }}></div>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <div className={styles.headingWrapper}>
              <h1 className={styles.headingText}>{title}</h1>
              <div
                className={styles.text}>{documentToReactComponents(subtitle)}</div>
            </div>
            <div className={styles.contactsWrapper}>
              <p className={styles.text}>{info}</p>
              <h2>{action}</h2>
              <ul className={styles.contacts}>
                {tel.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className={styles.contactsIcon}>
                        <a href={`https://wa.me/7${item}`}>
                          <Image
                            src={`/whatsapp.png`}
                            width={32}
                            height={32} alt={'Ватсап'} />
                        </a>
                        <a href={`https://t.me/+7${item}`}>
                          <Image
                            src={`/telegram.png`}
                            width={32}
                            height={32} alt={'Ватсап'} />
                        </a>
                      </div>
                      <a href={`tel:+7${item}`}
                         className={styles.contactNumber}>
                        {item.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, (s, code, n1, n2, n3) => `+7 (${code}) ${n1}-${n2}-${n3}`)}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            {buttons.map((data, index) => {
              return (
                <a key={index} className={['replain-link', styles.button].join(' ')} href='#replain'
                   data-title={data.fields.text}
                   data-border=''
                   style={{maxWidth: '500px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                   data-background=''
                   data-color=''></a>
              )
            })}
          </div>
        </div>

        <div className={styles.wrapperImage}>
          <div className={styles.image_container}>
            <Image
              priority={true}
              className={styles.image}
              src={`http:${bg}`}
              layout='fill'
              placeholder='blur'
              sizes='(min-width: 812px)'
              blurDataURL={`http:${bg}`}
              alt={'welcome image'}
            />
            <div className={styles.overlay} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Welcome
