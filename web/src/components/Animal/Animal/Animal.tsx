import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteAnimalMutationVariables,
  FindAnimalById,
} from 'types/graphql'

const DELETE_ANIMAL_MUTATION = gql`
  mutation DeleteAnimalMutation($id: String!) {
    deleteAnimal(id: $id) {
      id
    }
  }
`

interface Props {
  animal: NonNullable<FindAnimalById['animal']>
}

const Animal = ({ animal }: Props) => {
  const [deleteAnimal] = useMutation(DELETE_ANIMAL_MUTATION, {
    onCompleted: () => {
      toast.success('Animal deleted')
      navigate(routes.animals())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAnimalMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete animal ' + id + '?')) {
      deleteAnimal({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Animal {animal.id} Detalle
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{animal.id}</td>
            </tr>
            <tr>
              <th>Nombre</th>
              <td>{animal.name}</td>
            </tr>
            <tr>
              <th>Tamaño</th>
              <td>{animal.size}</td>
            </tr>
            <tr>
              <th>Edad</th>
              <td>{animal.age}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{animal.color}</td>
            </tr>
            <tr>
              <th>Especie</th>
              <td>{animal.specie}</td>
            </tr>
            <tr>
              <th>URL Fotografía</th>
              <td>{animal.photo_url}</td>
            </tr>
            <tr>
              <th>Cuidador</th>
              <td>{animal.keeper}</td>
            </tr>
            <tr>
              <th>Vacunas</th>
              <td>{animal.vacunas}</td>
            </tr>
            <tr>
              <th>Observaciones</th>
              <td>{animal.observaciones}</td>
            </tr>
            <tr>
              <th>Alimentacion</th>
              <td>{animal.alimentacion}</td>
            </tr>
            <tr>
              <th>Genero</th>
              <td>{animal.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAnimal({ id: animal.id })}
          className="rw-button rw-button-blue"
        >
          Editar
        </Link>

        <Link
          to={routes.home()}
          className="rw-button rw-button-blue"
        >
          Home
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(animal.id)}
        >
          Borrar
        </button>
      </nav>
    </>
  )
}

export default Animal
