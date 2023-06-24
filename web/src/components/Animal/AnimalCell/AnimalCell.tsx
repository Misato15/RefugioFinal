import type { FindAnimalById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Animal from 'src/components/Animal/Animal/'

export const QUERY = gql`
  query FindAnimalById($id: String!) {
    animal: animal(id: $id) {
      id
      name
      size
      age
      color
      specie
      photo_url
      keeper
      vacunas
      observaciones
      alimentacion
    }
  }
`

export const Loading = () => <div>Cargando...</div>

export const Empty = () => <div>Animal no encontrado</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ animal }: CellSuccessProps<FindAnimalById>) => {
  return <Animal animal={animal} />
}
