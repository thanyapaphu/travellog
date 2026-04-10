const coverImg =
  'https://www.figma.com/api/mcp/asset/fa8fa837-f65d-49a6-91f1-85c18d74cce8'

export function LogbookIllustration({ name }: { name: string }) {
  return (
    <div className="tl-card w-[335.713px] max-w-full overflow-hidden rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px]">
      <div className="relative h-[551px] w-[305.184px] max-w-full">
        <div className="absolute left-1/2 top-[25px] h-[355px] w-[255px] -translate-x-1/2 overflow-hidden bg-[#d42d78]">
          <img
            src={coverImg}
            alt=""
            className="absolute left-[-21.79px] top-[-26.2px] h-[397.539px] w-[298.154px] object-cover"
          />
        </div>

        <div className="absolute left-[25px] top-[390px] text-center">
          <div className="text-[34px] font-bold leading-[1] tracking-tight">
            SNOWBOARDING
          </div>
          <div className="mt-1 text-[34px] font-bold leading-[1] tracking-tight">
            TRIP
          </div>
          <div className="mt-2 text-[12px] font-bold text-[#d42d78]">
            Tokyo - Hakuba - Karuizawa
          </div>
        </div>

        <div className="absolute left-[25px] top-[505px] h-px w-[255px] bg-[#d42d78]/50" />
        <div className="absolute left-[25px] top-[515px] text-[15px] font-bold text-[#d42d78]">
          Name :{' '}
          <span className="font-bold text-[#d42d78]">
            {name.length ? name : ''}
          </span>
        </div>
      </div>
    </div>
  )
}

