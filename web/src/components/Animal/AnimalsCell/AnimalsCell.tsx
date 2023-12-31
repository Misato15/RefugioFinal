import type { FindAnimals } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Animals from 'src/components/Animal/Animals/'

export const QUERY = gql`
  query FindAnimals {
    animals {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No animals yet. '}
      <Link to={routes.newAnimal()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ animals }: CellSuccessProps<FindAnimals>) => {
  return <Animals animals={animals} />
}
