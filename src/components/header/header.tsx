import styles from './header.module.css'
import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Image from 'next/image'
import { HeaderProps } from 'components/header/header.props'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'


const white = '#fcfcfd'
const links = [
  { name: 'Главная', href: '#hash-section-1' },
  { name: 'Услуги', href: '#hash-section-2' },
  { name: 'О нас', href: '#hash-section-3' },
  { name: 'Контакты', href: '#hash-section-4' },
]

const Header = ({ nav, tel }: HeaderProps): JSX.Element => {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [contact, setContact] = useState<any>()
  const openMenu = () => {
    setMenu(!menu)
  }
  console.log(router.asPath)


  const closeMenu = () => {
    setMenu(false)
  }

  const colorChange = () => {
    if (window.scrollY >= 666) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    colorChange()
    window.addEventListener('scroll', colorChange)
  })
  // useEffect(() => {
  //   loadContacts().then(data => data.items.map(data => {
  //     if (data.fields.title === "Телефон") {
  //       setContact(data.fields.description)
  //     }
  //   }))
  // }, []);
  return (
    <header
      style={{
        position: navbar ? 'fixed' : 'absolute',
        background: navbar ? white : 'none',
        borderBottom: navbar ? '1px solid rgba(35, 38, 47, 0.1)' : '0',
      }}
      className={styles.section}
    >
      <div style={{}} className={cn('container', styles.container)}>
        <Link href={'/'}>
          <a
            className={cn(
              'body-bold',
              navbar ? styles.active_logo : styles.logo,
            )}
            style={{
              color:
                router.pathname == '/' ? (navbar ? 'red' : 'rgba(0,0,0,0)') : '',
            }}
          >
            <div style={{}} className={styles.logoWrapper}>
              {nav && <Image className={styles.logoImage}
                             src={`http:${nav.fields.logo?.fields.file.url}`}
                             layout={'fill'} alt={'logo'} />
              }
            </div>
          </a>
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <div className={menu ? styles.responsive_links : styles.links}>
            {links.map((item, index) => (
              <Link key={index} href={item.href}>
                <a onClick={() => item.href}
                   style={{ color: navbar ? (router.asPath == ('/' + item.href) ? 'red' : 'gray') : (router.asPath == ('/' + item.href) ? 'red' : 'gray') }}
                   className={cn(
                     'button-small',
                   )}
                >
                  {item.name}
                </a>
              </Link>
            ))}

            <button
              className={cn('button-svg', styles.close_button)}
              onClick={closeMenu}
            >
              <GrClose style={{ width: '20px', height: '20px' }} />
            </button>


            {/*<button className={cn('button-small', styles.menu_link)}>*/}
            {/*  <span>Позвони:</span>{`${contact}`}*/}
            {/*</button>*/}
          </div>
        </OutsideClickHandler>
        {!navbar && <div style={{ width: '250px' }} />}

        {/*{!navbar && <div className={styles.jobTime}>*/}
        {/*  <a href={`tel:${tel[0]}`}*/}
        {/*     style={{ color: navbar ? 'black' : 'white' }}*/}
        {/*     className={styles.contactNumber}>*/}
        {/*    Работаем: с <span style={{ color: 'red' }}>9:00</span> до <span*/}
        {/*    style={{ color: 'red' }}>23:00</span>*/}
        {/*  </a>*/}
        {/*</div>}*/}
        <ul style={{ display: navbar ? 'grid' : 'none' }}
            className={styles.contacts}>
          {tel.map((item, index) => {
            return (
              <li key={index}>
                <div className={styles.contactsIcon}>
                  <a href={`https://wa.me/7${item}`}>
                    <img
                      src={`/whatsapp.png`}
                      width={32}
                      height={32} alt={'Ватсап'} />
                  </a>
                  <a href={`https://t.me/+7${item}`}>
                    <img
                      src={`/telegram.png`}
                      width={32}
                      height={32} alt={'Ватсап'} />
                  </a>
                </div>
                <a href={`tel:+7${item}`}
                   style={{ color: navbar ? 'black' : 'white' }}
                   className={styles.contactNumber}>
                  {item.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, (s, code, n1, n2, n3, n4) => `+7 (${code}) ${n1}-${n2}-${n3}`)}
                </a>
              </li>
            )
          })}
        </ul>
        {/*<Link href='/contact'>*/}
        {/*  <a className={cn('button-small', styles.link)}><span style={{*/}
        {/*    color: 'var(--p1)',*/}
        {/*    marginRight: '5px',*/}
        {/*  }}>Телефон:</span>{`${contact}`}</a>*/}
        {/*</Link>*/}

        <button
          className={cn('button-svg', styles.open_button)}
          onClick={openMenu}
        >
          <GiHamburgerMenu style={{ width: '20px', height: '20px' }} />
        </button>
      </div>
    </header>

  )
}

export default Header