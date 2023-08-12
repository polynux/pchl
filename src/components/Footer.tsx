import { css } from '../../styled-system/css';

import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={css({ width: 'full', backgroundColor: 'neutral.800' })}>
      <div
        className={css({
          width: 'container',
          maxWidth: 'container',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '8',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            md: { flexDirection: 'row' },
          })}
        >
          <Link className={css({ display: 'flex', alignItems: 'center' })} href="/">
            <Image src="/logo.png" alt="Logo photo club haute lozère" width={128} height={77} />
          </Link>
          <div className={css({ marginLeft: '4', display: 'flex', flexDirection: 'column', alignItems: 'center' })}>
            <span className={css({ color: 'neutral.300' })}>© 2023 Photo Club de Haute Lozère</span>
            <span className={css({ color: 'neutral.300' })}>Tous droits réservés</span>
          </div>
          <div className={css({ marginLeft: '4', display: 'flex' })}>
            <span className={css({ color: 'neutral.300' })}>
              Développé par{' '}
              <a href="https://github.com/polynux" target="_blank" rel="noreferrer">
                polynux <FaGithub className={css({ display: 'inline' })} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
