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
  '/@fs/Users/newaccount/.cursor/projects/Users-newaccount-Documents-Travel-log-vibe-coding/assets/tokyo_tower-69c07042-b93a-4111-9cfb-e4ce5e4618fb.png'

export function IllustrationTokyoTower() {
  return (
    <IllustrationBox>
      <img src={tokyoTowerPhoto} alt="Tokyo Tower" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 2 - Yoroniku
const yoronikuPhoto =
  '/@fs/Users/newaccount/.cursor/projects/Users-newaccount-Documents-Travel-log-vibe-coding/assets/Property_1_yoro-ff5a9dfc-7193-468b-a2db-1516d2ce6541.png'

export function IllustrationYoroniku() {
  return (
    <IllustrationBox>
      <img src={yoronikuPhoto} alt="Yoroniku Ebisu" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 3 - Sanu
const sanuPhoto =
  '/@fs/Users/newaccount/.cursor/projects/Users-newaccount-Documents-Travel-log-vibe-coding/assets/Property_1_Sanu-c0ed66be-5a37-4b16-8ce3-73d8903de967.png'

export function IllustrationSanu() {
  return (
    <IllustrationBox>
      <img src={sanuPhoto} alt="Sanu 2nd Home" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 3 - Mikuriya
const mikuriyaPhoto =
  '/@fs/Users/newaccount/.cursor/projects/Users-newaccount-Documents-Travel-log-vibe-coding/assets/Property_1_Mikuriya-3f7ffef9-dd4c-4db6-abc6-e41c9125b21a.png'

export function IllustrationMikuriya() {
  return (
    <IllustrationBox>
      <img src={mikuriyaPhoto} alt="Mikuriya" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 4 - Tsugaike
const tsugaikePhoto =
  '/@fs/Users/newaccount/.cursor/projects/Users-newaccount-Documents-Travel-log-vibe-coding/assets/Property_1_tsugaike-b44323b5-8a8c-4ae2-9740-f92b212623b8.png'

export function IllustrationTsugaike() {
  return (
    <IllustrationBox>
      <img src={tsugaikePhoto} alt="Tsugaike" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

// Answer 4 - Earthboat
const earthboatPhoto =
  '/@fs/Users/newaccount/.cursor/projects/Users-newaccount-Documents-Travel-log-vibe-coding/assets/Property_1_Earthboat-4dbcf582-c63c-4b2f-a1df-f0f3a4619ce7.png'

export function IllustrationEarthboat() {
  return (
    <IllustrationBox>
      <img src={earthboatPhoto} alt="Earthboat" className="h-full w-full object-cover" />
    </IllustrationBox>
  )
}

