import type { ReactNode } from 'react'
import { FigmaScreen } from './figmaPrimitives'

export function FigmaQuestionLayout({
  titleImg,
  children,
}: {
  titleImg: string
  children: ReactNode
}) {
  return (
    <FigmaScreen>
      <div className="relative h-[798px] w-[402px] max-w-full">
        <div className="absolute left-[26px] top-[79px] w-[350px]">
          <div className="flex flex-col items-center gap-[36px]">
            <div className="flex h-[80.61px] items-center justify-center">
              <img src={titleImg} alt="" className="max-h-[80.61px] w-auto" />
            </div>
            <div className="w-[350px]">{children}</div>
          </div>
        </div>
      </div>
    </FigmaScreen>
  )
}

