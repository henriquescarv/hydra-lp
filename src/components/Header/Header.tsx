'use client'
import TextLogo from '@/assets/utils/icons/TextLogo/TextLogo';
import './Header.styles.scss'
import Logo from '@/assets/utils/icons/Logo/Logo';
import locales from '@/locales/locales.br';
import Button from '@/assets/utils/components/Button/Button';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Logo />
        <TextLogo />
      </div>
      <div className="nav-links">
        <Link href='/'>{locales.header.about}</Link>
        <Link href='/'>{locales.header.services}</Link>
        <Link href='/'>{locales.header.techs}</Link>
        <Link href='/'>{locales.header.howTo}</Link>
      </div>
      <div className="contact-buttons">
        <Button label={locales.header.contactUs} onClick={() => null} type='secondary' />
        <Button label={locales.header.join} onClick={() => null} />
      </div>
    </header>
  )
}

export default Header;
