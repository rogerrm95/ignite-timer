import { createContext, ReactNode, useState } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  cycles: Cycle[]
  markCurrentCycleAsFinished: () => void
}

interface CyclesProviderType {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export default function CyclesProvider({ children }: CyclesProviderType) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycle, setActiveCycle] = useState<Cycle>({} as Cycle)
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  return (
    <CyclesContext.Provider
      value={{ activeCycle, activeCycleId, cycles, markCurrentCycleAsFinished }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
