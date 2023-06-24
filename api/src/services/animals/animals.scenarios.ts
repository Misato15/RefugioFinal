import type { Prisma, Animal } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimalCreateArgs>({
  animal: {
    one: {
      data: {
        name: 'String',
        size: 'String',
        age: 1405278,
        color: 'String',
        specie: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        size: 'String',
        age: 3004456,
        color: 'String',
        specie: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Animal, 'animal'>
