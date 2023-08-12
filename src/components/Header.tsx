import { css } from '../../styled-system/css';

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header
      className={css({
        display: 'flex',
        width: 'full',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'gray.800',
        padding: '8',
        color: 'white',
      })}
    >
      <Link href="/">
        <Image src="/logo.png" alt="My Site Logo" width={128} height={77} />
      </Link>
      <nav>
        <ul className={css({ display: 'flex', alignItems: 'center', gap: '2', marginRight: '4', marginLeft: '4' })}>
          <li>
            <Link href="/le-club" className={css({ fontSize: 'xl', lineHeight: 'xl' })}>
              Le club
            </Link>
          </li>
          <li>
            <Link href="/galeries" className={css({ fontSize: 'xl', lineHeight: 'xl' })}>
              Galeries
            </Link>
          </li>
          <li>
            <Link href="/contact" className={css({ fontSize: 'xl', lineHeight: 'xl' })}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/espace-membres"
              className={css({
                backgroundColor: 'white',
                paddingLeft: '6',
                paddingRight: '6',
                paddingTop: '2',
                paddingBottom: '2',
                fontSize: 'xl',
                lineHeight: 'xl',
                color: 'stone.900',
              })}
            >
              Espace membres
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
