import { createContext } from 'react'

export interface DegisnContextProps {
  isMovingDom: boolean
}

const DegisnContext: React.Context<DegisnContextProps> = createContext({
  isMovingDom: false
})

export default DegisnContext
