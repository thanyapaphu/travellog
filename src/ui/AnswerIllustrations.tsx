import earthboatPhoto from '../assets/trip-photos/earthboat-custom.png?url'
import mikuriyaPhoto from '../assets/trip-photos/mikuriya-custom.png?url'
import sanuPhoto from '../assets/trip-photos/sanu-custom.png?url'
import tokyoTowerPhoto from '../assets/trip-photos/tokyo-tower-custom.png?url'
import tsugaikePhoto from '../assets/trip-photos/tsugaike-custom.png?url'
import yoronikuPhoto from '../assets/trip-photos/yoroniku-custom.png?url'

type BoxProps = { children: React.ReactNode }

function IllustrationBox({ children }: BoxProps) {
  return (
    <div className="relative h-[240px] w-[272px] overflow-hidden rounded-[8px] border border-[rgba(194,61,119,0.2)] bg-white">
      {children}
    </div>
  )
}

// Answer 2 - Tokyo Tower
export function IllustrationTokyoTower() {
  return (
    <IllustrationBox>
      <img src={tokyoTowerPhoto} alt="Tokyo Tower" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 2 - Yoroniku
export function IllustrationYoroniku() {
  return (
    <IllustrationBox>
      <img src={yoronikuPhoto} alt="Yoroniku Ebisu" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 3 - Sanu
export function IllustrationSanu() {
  return (
    <IllustrationBox>
      <img src={sanuPhoto} alt="Sanu 2nd Home" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 3 - Mikuriya
export function IllustrationMikuriya() {
  return (
    <IllustrationBox>
      <img src={mikuriyaPhoto} alt="Mikuriya" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 4 - Tsugaike
export function IllustrationTsugaike() {
  return (
    <IllustrationBox>
      <img src={tsugaikePhoto} alt="Tsugaike" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 4 - Earthboat
export function IllustrationEarthboat() {
  return (
    <IllustrationBox>
      <img src={earthboatPhoto} alt="Earthboat" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

