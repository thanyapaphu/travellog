const baseUrl = import.meta.env.BASE_URL

export const FIGMA_ASSETS = {
  home: {
    cover: `${baseUrl}cover-custom-2.png`,
    title: `${baseUrl}title-page-custom.png`,
  },
  icons: {
    downArrow: 'https://www.figma.com/api/mcp/asset/7394c55f-bafd-4a5f-b6f6-9b460a358f00',
    checkboxYes: 'https://www.figma.com/api/mcp/asset/da33ffff-93b1-40b8-8a71-51c1411f43d4',
    checkboxNo: 'https://www.figma.com/api/mcp/asset/a99bfa07-6c22-44a2-8df1-e09c9a23aaa2',
  },
  titles: {
    tokyo: `${baseUrl}title-tokyo.png`,
    karuizawa: `${baseUrl}title-karuizawa.png`,
    hakuba: `${baseUrl}title-hakuba.png`,
  },
  end: {
    centerStamp: 'https://www.figma.com/api/mcp/asset/d3e7bd21-f801-4e5e-a461-c59322d673ec',
  },
} as const

