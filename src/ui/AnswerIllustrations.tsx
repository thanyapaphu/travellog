const baseUrl = import.meta.env.BASE_URL

type BoxProps = { children: React.ReactNode }

function IllustrationBox({ children }: BoxProps) {
  return (
    <div className="relative h-[240px] w-[272px] overflow-hidden rounded-[8px] border border-[rgba(194,61,119,0.2)] bg-white">
      {children}
    </div>
  )
}

// Answer 2 - Tokyo Tower
const tokyoTowerPhoto =
  `${baseUrl}tokyo-tower-custom.png`

export function IllustrationTokyoTower() {
  return (
    <IllustrationBox>
      <img src={tokyoTowerPhoto} alt="Tokyo Tower" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 2 - Yoroniku
const yoronikuPhoto =
  `${baseUrl}yoroniku-custom.png`

export function IllustrationYoroniku() {
  return (
    <IllustrationBox>
      <img src={yoronikuPhoto} alt="Yoroniku Ebisu" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 3 - Sanu
const sanuPhoto =
  `${baseUrl}sanu-custom.png`

export function IllustrationSanu() {
  return (
    <IllustrationBox>
      <img src={sanuPhoto} alt="Sanu 2nd Home" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 3 - Mikuriya
const mikuriyaPhoto =
  `${baseUrl}mikuriya-custom.png`

export function IllustrationMikuriya() {
  return (
    <IllustrationBox>
      <img src={mikuriyaPhoto} alt="Mikuriya" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 4 - Tsugaike
const tsugaikePhoto =
  `${baseUrl}tsugaike-custom.png`

export function IllustrationTsugaike() {
  return (
    <IllustrationBox>
      <img src={tsugaikePhoto} alt="Tsugaike" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 4 - Earthboat
const earthboatPhoto =
  `${baseUrl}earthboat-custom.png`

export function IllustrationEarthboat() {
  return (
    <IllustrationBox>
      <img src={earthboatPhoto} alt="Earthboat" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

