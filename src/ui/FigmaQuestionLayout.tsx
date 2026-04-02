import { useState, type ReactNode } from 'react'
import { FigmaScreen } from './figmaPrimitives'

export function FigmaQuestionLayout({
  titleImg,
  titleFallback,
  children,
}: {
  titleImg?: string
  titleFallback?: string
  children: ReactNode
}) {
  const [titleImgFailed, setTitleImgFailed] = useState(false)

  return (
    <FigmaScreen>
      <div className="relative h-[798px] w-[402px] max-w-full">
        <div className="absolute left-1/2 top-[79px] w-[350px] max-w-full -translate-x-1/2">
          <div className="flex flex-col items-center gap-[36px]">
            <div className="flex h-[80.61px] items-center justify-center">
              {titleImg && !titleImgFailed ? (
                <img
                  src={titleImg}
                  alt=""
                  className="max-h-[80.61px] w-auto"
                  onError={() => setTitleImgFailed(true)}
                />
              ) : (
                <div className="text-[42px] font-black uppercase tracking-wide text-[#d42d78]">
                  {titleFallback ?? 'Travel Log'}
                </div>
              )}
            </div>
            <div className="w-[350px] max-w-full">{children}</div>
          </div>
        </div>
      </div>
    </FigmaScreen>
  )
}

