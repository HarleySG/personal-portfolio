import types from "prop-types"
import style from './_index.module.scss'

const IMenu = [{ link: '', text: '', id: '' }]

export default function Header({ menu = IMenu }) {
  return (
    <header className={style['o-header']}>
      <div className={style['o-header_wrapper']}>
        <span className={`${style['o-logo']}`}>
          <LogoSvg />
        </span>
        <nav className={style['o-menu']}>
          <button className={style['o-menu_btn']}>
            <BurguerSvg />
          </button>
          <Menu menu={menu} />
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  menu: types.arrayOf(types.shape({
    [IMenu[0].link]: types.string.isRequired,
    [IMenu[0].text]: types.string,
    [IMenu[0].id]: types.string,
  }))
}

function Menu({ menu = IMenu }) {
  return (
    menu && (
      <ul className={`${style['o-menu_options']}`}>
        {menu.map(({ link, text }, i) => (
          <li key={i} className={`${style['o-menu_options-item']} js-menu`}>
            <a className={style['o-menu_options-link']} href={link}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    )
  );
}

Menu.propTypes = {
  menu: types.arrayOf(types.shape({
    [IMenu[0].link]: types.string.isRequired,
    [IMenu[0].text]: types.string,
    [IMenu[0].id]: types.string,
  }))
}

function LogoSvg(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 57.2 52.7' {...props}>
      <title>{'logo'}</title>
      <path d='M6.2 50.6H55V6.2H6.2v44.4zM30.6 20l.3-2.4v-.1c1.1 0 1.8.3 1.6 1.4-.3 1.1-.6 1.3-1.9 1.1zm17.6 14.2v1.1c0 .5-.1 4.1-.1 4.6 0 .8-.5 1.2-1.3 1.2h-.4v-.2-2.2-4.9s0-.1.1-.1c.2-.1.5-.1.8-.1.7-.3.8 0 .9.6zM32.6 23.3c.2 1.1 0 1.8-1.4 2h-.1l-.1-.1-.2-1c0-.3-.1-.6-.2-.9v-.4s-.1-.7-.1-.8c.5-.1.9 0 1.4.2.5.2.7.6.7 1zm10.2-3.5l-.1 4.4c0 .6-.1 1.2-.8 1.2-1.1 0-.8-1.4-.8-1.6 0-1.5-.1-3-.1-4.4V19s0-.5.1-.6.2-.4.4-.4h.5c.8-.1.9 1 .8 1.8zm-23.7 4.1c0 .8-.1 1.5-.3 2.3v.2c-.4.7-1.2 2-2.4 2h-1.9c-1.1-.1-2.1-.9-2.4-2-.1-.5-.1-.9-.2-1.4l.1-7.2v-.2c.1-.7.4-1.3.9-1.8.8-.8 1.9-1.2 3-1 .6 0 1.3.2 1.8.5.8.6 1.3 1.5 1.2 2.5 0 .5-.1 1-.1 1.5l-.1.1-2-.1c-.1 0-.2-.1-.2-.2s.1-.7.1-.8v-.1c0-.8-.3-1.3-1.2-1.3-.5 0-1.1.2-1.1 1.4v4.9c0 .2-.1.5-.1.7 0 .8.2 1.9 1.1 2.3h.7l.2-.1c.5-.3.4-1 .4-1.4l.1-.2v-1c0-.1 0-.1-.1-.2 0-.1.1-.1.2-.1H19l.1.1s0 .4.1.5l-.1.1zm7.7-7.6c0 1.5 0 3-.1 4.5 0 .9-.1 1.7-.1 2.6v.7c-.1 2-.3 4-2.8 4.2h-.5c-.5 0-1-.1-1.4-.3-.3-.1-.5-.3-.7-.5-.6-.7-.9-1.6-.9-2.5v-.1c0-.4-.1-2.4-.1-2.8V19c0-.5.1-3.1.2-3.6 0-.1 0-.1.1-.2 0-.1.1-.1.2-.1h.5c.5.1 1.1.1 1.6.1v.2c0 1-.2 1.9-.2 2.9v6.4c0 .4.1 1.1.6 1.2h.4c1.4 0 1.1-4.4 1.1-8.9 0-.3-.1-1.6-.1-2v-.1c0-.1.2-.1.3-.1.6 0 1.2.1 1.8.1 0 0 .1 0 .1.1l.1.9-.1.4zm8.9 9c-.8 2.6-2.7 3-5.3 3h-2V27v-1.5c0-.2-.1-1.3-.1-1.4v-.3c0-.2-.1-2.2-.1-2.5v-2.9c0-.9-.1-2.1 0-3.1l-.1-.1c0-.2.3-.2.4-.2 6.2-.8 8.7 1.9 5.4 6 1.3.9 2 2.3 2 3.8 0 .1-.1.3-.2.5zm3.3 2.4c0 .1 0 .4-.2.5l-.6.1h-.1c-.3 0-.6-.1-.8-.1s-.5.1-.6-.1v-4.4c0-.1-.1-1-.1-1.1 0-1 0-2.1-.1-3.1v-3c0-.6-.2-1.5.7-1.5h.1c.1 0 .9.1 1.1.1.1 0 .3 0 .3.1 0 .6-.1 1.1-.1 1.6 0 1.3.1 2.5.1 3.8 0 .5-.1 1-.1 1.5 0 1.2.1 2.5.1 3.7l.3 1.9zm7.5-3c0 .8-.1 1.6-.4 2.3-.5.9-1.5 1.4-2.6 1.4h-.4l-1-.1c-.9-.4-1.6-1.3-1.8-2.3 0-.2 0-1-.1-1.2v-1.2-1.4c0-1.5 0-3.2.1-4.8.2-.8.4-1.8 1.3-2.2.6-.2 1.2-.4 1.8-.4.5 0 .9.1 1.4.2.2.1.5.2.7.3l.2.2c.5.6.9 1.4.9 2.3.1 1.6.2 3.2.2 4.8-.1.6-.2 1.4-.3 2.1zM16.8 41.5c-.4 1.2-1.5 2.1-2.8 2.2-1.1.1-2.2-.4-2.7-1.4-.3-.7-.5-1.4-.4-2.2v-.6c0-.1.1-.1.2-.1.5 0 1.1-.1 1.6-.1.1 0 .1.2.1.2v.2c0 .7 0 1.8.9 1.8.5 0 .9-.4 1-.9v-.1c0-.2-.1-.4-.1-.7l-.3-.9c-.3-.5-.8-1-1.2-1.4-.4-.4-.8-.7-1.1-1-.8-.9-1.3-2.1-1.2-3.3 0-1 .4-2 1.2-2.8 1.1-.6 2.4-.6 3.5 0h.2c1.3.8 1.3 1.7 1.3 3.1 0 .2-.3.2-.5.2h-1.6l-.1-1.1c0-.2-.2-.6-.4-.7h-.3c-.4-.1-.8.3-.9.7v.2c.1.8.6 1.6 1.2 2.2l.1.1.2.2.2.2c1.2 1.3 2.5 2.7 2.5 4.5-.4.7-.6 1.1-.6 1.5zm6.8-8.9c0 .1-.1.1-.2.2h-2.1v.5c-.1.8 0 1.7 0 10l-.1.2-1.4.2c-.2 0-.4 0-.5-.2v-.8c.1-3.2 0-6.3-.1-9.5 0 0 0-.2-.1-.3-.2 0-.3-.1-.5-.1h-1.2s-.1-.1-.1-.2v-1.7c0-.2.1-.3.3-.4l.8-.1h.4c1.4 0 2.8.2 4.1.2h.1l.6-.1h.1c.1 0 .1 0 .1.1v.2c0 .1-.1.7-.1.8-.2.4-.1.7-.1 1zm7.4-.8c0 1.5 0 3-.1 4.5 0 .9-.1 1.7-.1 2.6v.7c-.1 2-.3 4-2.8 4.2h-.5c-.5 0-1-.1-1.4-.3-.3-.1-.5-.3-.7-.5-.6-.7-.9-1.6-.9-2.5v-.1c0-.4-.1-2.4-.1-2.8v-3.1c0-.5.1-3.1.2-3.6 0-.1.1-.3.2-.3h.5c.5.1 1.1.1 1.6.1v.2c0 1-.2 1.9-.2 2.9v6.4c0 .4.1 1.1.6 1.2h.4c1.4 0 1.1-4.4 1.1-8.8 0-.3-.1-1.6-.1-2v-.1c0-.1.2-.1.3-.1.6 0 1.2.1 1.8.1 0 0 .1 0 .1.1l.1.9v.3zm8.3 4.3c0 1.8-.2 3.6-.6 5.3-.4 1.7-1.6 1.9-3.4 2.2-.8.1-1.5.2-2.3.2h-.5c-.1-.1-.2-.2-.2-.3v-1.7-1.3c0-1.2.1-2.4.1-3.5 0-2.1-.1-4.1-.1-6.2v-.2l.1-.1v-.1c0-.1.2-.1.2-.1h1.2c1.2-.1 2.5 0 3.7.3.3.2.6.3.9.5 1 .7 1.1 1.9 1.1 2.9v1.8l-.2.3zm3.5 7c0 .1 0 .4-.2.5l-.6.1c-.3 0-.6-.1-.8-.1s-.5.1-.6-.2V39c0-.1-.1-1-.1-1.1 0-1 0-2.1-.1-3.1v-3c0-.6-.2-1.5.7-1.5h.1c.1 0 .9.1 1.1.1.1 0 .3 0 .3.1 0 .5-.1 1.1-.1 1.6 0 1.3.1 2.5.1 3.8 0 .5-.1 1-.1 1.5 0 1.2.1 2.5.1 3.7l.2 2zm7.5-3c0 .8-.1 1.6-.4 2.3-.5.9-1.5 1.4-2.6 1.4H47l-1-.1c-1-.4-1.7-1.3-1.9-2.3 0-.2 0-1-.1-1.2 0-.1 0-.1-.1-.2v-1-1.4c0-1.5 0-3.2.1-4.8.2-.8.4-1.8 1.3-2.2.6-.2 1.2-.4 1.8-.5.5 0 .9.1 1.4.2.2.1.5.2.7.3l.2.2c.5.6.9 1.4.9 2.3.1 1.6.2 3.2.2 4.8 0 .8-.1 1.5-.2 2.2zm-11.8-4.8l-.2 4.4c0 .6-.1 1.2-1.1 1.2-1.5 0-1.2-1.4-1.2-1.7 0-1.5-.1-3-.1-4.4v-.4s.1-.5.1-.6c.1-.2.3-.4.5-.4h.8c1.2 0 1.3 1.1 1.2 1.9z' />
      <path d='M4.4 35.2H2.2V2.1h37.1v2.1H4.4z' />
    </svg>
  );
}

function BurguerSvg(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 37.32 30.32'
      {...props}
    >
      <title>{'menu'}</title>
      <g data-name='Capa 3'>
        <path d='M2.66 2.16h32v4h-32zM2.66 13.16h32v4h-32zM2.66 24.16h32v4h-32z' />
      </g>
    </svg>
  );
}