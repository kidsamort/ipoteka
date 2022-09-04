import styles from 'components/footer/footer.module.css'
import { FooterProps } from 'components/footer/footer.props'
import cn from 'classnames'
import Link from 'next/link'
import { loadContacts, loadFooter } from 'contentfuls/lib/footer'
import {
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer'
import { useEffect, useState } from 'react'
import {
  IContacts,
  IContactsFields,
  IFooterFields,
} from 'contentfuls/types/contentful'

const sites = [
  {
    link: '#home',
    title: 'Домашняя',
  },
  {
    link: '#services',
    title: 'Услуги',
  },
  {
    link: '#about',
    title: 'О нас',
  },
  {
    link: '#contacts',
    title: 'Контакты',
  },
]

const information = [
  {
    title: ' Политика конфиденциальности',
    url: '/privacy',
  },
  {
    title: ' ИП: Пивоварова Анна Сергеевна',
    url: '#footer',
  },
  {
    title: ' ИНН: 503113605694',
    url: '#footer',
  },
  {
    title: 'ОГРНИП: 322508100419700',
    url: '#footer',
  },
]

const Footer = ({}: FooterProps): JSX.Element => {
  const [dataFooter, setDataFooter] = useState<IFooterFields>()
  const [dataContacts, setDataContacts] = useState<IContacts[]>()

  useEffect(() => {
    loadFooter().then(data => setDataFooter(data.items[0].fields))
    loadContacts().then(data => setDataContacts(data.items as IContacts[]))

  }, [])
  return (
    <div className={cn('section', styles.section)}>
      <div className={cn('container', styles.container)}>
        <div className={styles.main_content}>
          <h4 className={cn('body-bold', styles.title)}>Ипотека здесь</h4>
          <div className={cn('caption', styles.subtitle)}>
            {dataFooter && documentToReactComponents(dataFooter.text!)}
          </div>

          <div>
            {/*<p style={{ color: 'black' }}*/}
            {/*   className={cn('body-2-bold')}>{dataFooter && dataFooter.action}</p>*/}
            {/*<div className={styles.newsletter}>*/}
            {/*  <input*/}
            {/*    className={cn('caption', styles.input)}*/}
            {/*    placeholder='Ваша почта'*/}
            {/*    type={'email'}*/}
            {/*  />*/}
            {/*  <button*/}
            {/*    className={cn('button')}>{dataFooter && dataFooter.button}</button>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className={styles.sub_content}>
          <div className={styles.content}>
            <h4 className={cn('body-2-bold', styles.title)}>Сайт</h4>
            <div className={styles.links}>
              {sites.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a className={cn('button-small', styles.button)}>
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <h4 className={cn('body-2-bold', styles.title)}>Информация</h4>
            <div className={styles.links}>
              {information.map((item, index) => (
                <button
                  key={index}
                  className={cn('button-small', styles.button)}
                >
                  <Link href={item.url}>
                    {item.title}
                  </Link>
                </button>
              ))}
            </div>
          </div>
          <div className={cn(styles.content, styles.contentFill)}>
            <h4 className={cn('body-2-bold', styles.title)}>Контакты</h4>
            <div className={styles.links}>
              {dataContacts && dataContacts.map((item, index) => (
                <button
                  key={index}
                  className={cn('button-small', styles.button)}
                >
                  {`${item.fields.title} ${item.fields.description?.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, (s, code, n1, n2, n3, n4) => `+7 (${code}) ${n1}-${n2}-${n3}`)}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
