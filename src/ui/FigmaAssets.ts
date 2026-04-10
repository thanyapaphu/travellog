import coverCustom from '../assets/trip-photos/cover-custom-2.png?url'
import titlePageCustom from '../assets/trip-photos/title-page-custom.png?url'
import endStamp from '../assets/trip-photos/end-stamp.svg?url'

const baseUrl = import.meta.env.BASE_URL

export const FIGMA_ASSETS = {
  home: {
    cover: coverCustom,
    title: titlePageCustom,
  },
  titles: {
    tokyo: `${baseUrl}title-tokyo.svg`,
    karuizawa: `${baseUrl}title-karuizawa.svg`,
    hakuba: `${baseUrl}title-hakuba.svg`,
  },
  end: {
    centerStamp: endStamp,
  },
} as const

