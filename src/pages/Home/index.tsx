import { useForm } from 'react-hook-form'
import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { Countdown } from './Components/Coundown'
import { NewCycleForm } from './Components/NewCycleForm'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo minimo deve ser maior que 5 minutos')
    .max(60, 'O ciclo máximo deve ser menor que 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  // Responsável por interromper um ciclo ativo //
  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
    document.title = 'Ignite timer'
  }

  // Tarefa - controlled //
  const task = watch('task')



  // Variaveis auxiliares //
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <CyclesProvider>
        <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
          <NewCycleForm />

          <Countdown />

          {activeCycle ? (
            <StopCountdownButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </CyclesProvider>
    </HomeContainer>
  )
}
