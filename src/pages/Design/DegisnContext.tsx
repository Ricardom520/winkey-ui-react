import { createContext } from 'react'

export interface DegisnContextProps {
  isMovingDom: boolean
  setIsMovingDom: (val: boolean) => void
  setElement: (e: any, type: string) => void
}

const DegisnContext: React.Context<DegisnContextProps> = createContext({
  isMovingDom: false,
  setIsMovingDom: null,
  setElement: null
})

export default DegisnContext
