const baseUrl = import.meta.env.BASE_URL

export const FIGMA_ASSETS = {
  home: {
    cover: `${baseUrl}cover-custom-2.png`,
    title: `${baseUrl}title-page-custom.png`,
  },
  titles: {
    tokyo: `${baseUrl}title-tokyo.svg`,
    karuizawa: `${baseUrl}title-karuizawa.svg`,
    hakuba: `${baseUrl}title-hakuba.svg`,
  },
  end: {
    centerStamp: `${baseUrl}end-stamp.svg`,
  },
} as const
