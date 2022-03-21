import Image from 'next/image'
import { ICard } from '@/interface/index'

import css from './card.module.scss'

export default function Card({
  name,
  title,
  description,
  mail,
  image,
  options
} = ICard) {
  return (
    <figure
      className={css.card}
      style={{ gridColumnEnd: !image ? 'span 12' : null }}
    >
      <div className={css.card_content}>
        <figcaption className={css.card_caption}>
          <h4 className={css['card_caption-title']}>{name}</h4>
          {title && (
            <small className={css['card_caption-subtitle']}>{title}</small>
          )}
          <p
            className={`${css.card_description} ${
              options?.max_content && css['is-max-content']
            }`}
          >
            {description}
          </p>
          <div>
            <small>
              <a className={css['card_link-email']} href={`mailto:${mail}`}>
                {mail}
              </a>
            </small>
          </div>
        </figcaption>
      </div>
      {image && (
        <picture className={css.card_image}>
          <Image
            layout="fixed"
            objectFit="cover"
            className={css['card_image-img']}
            width={image.width}
            height={image.height}
            src={image.url}
            alt={name}
          />
        </picture>
      )}
    </figure>
  )
}
