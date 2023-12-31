import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Animal/AnimalsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteAnimalMutationVariables, FindAnimals } from 'types/graphql'

const DELETE_ANIMAL_MUTATION = gql`
  mutation DeleteAnimalMutation($id: String!) {
    deleteAnimal(id: $id) {
      id
    }
  }
`

const AnimalsList = ({ animals }: FindAnimals) => {
  const [deleteAnimal] = useMutation(DELETE_ANIMAL_MUTATION, {
    onCompleted: () => {
      toast.success('Animal Borrado')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAnimalMutationVariables['id']) => {
    if (confirm('¿Seguro quiere borrar el animal ' + id + '?')) {
      deleteAnimal({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Tamaño</th>
            <th>Edad</th>
            <th>Color</th>
            <th>Especie</th>
            <th>URL fotografía</th>
            <th>Cuidador</th>
            <th>Vacunas</th>
            <th>Observaciones</th>
            <th>Alimentación</th>
            <th>Género</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{truncate(animal.id)}</td>
              <td>{truncate(animal.name)}</td>
              <td>{truncate(animal.size)}</td>
              <td>{truncate(animal.age)}</td>
              <td>{truncate(animal.color)}</td>
              <td>{truncate(animal.specie)}</td>
              <td>{truncate(animal.photo_url)}</td>
              <td>{truncate(animal.keeper)}</td>
              <td>{truncate(animal.vacunas)}</td>
              <td>{truncate(animal.observaciones)}</td>
              <td>{truncate(animal.alimentacion)}</td>
              <td>{truncate(animal.gender)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.animal({ id: animal.id })}
                    title={'Show animal ' + animal.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Mostrar
                  </Link>
                  <Link
                    to={routes.editAnimal({ id: animal.id })}
                    title={'Edit animal ' + animal.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Editar
                  </Link>
                  
                  <button
                    type="button"
                    title={'Delete animal ' + animal.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(animal.id)}
                  >
                    Borrar
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav className="rw-button-group">
        <Link
    
          to={routes.home()}
          className="rw-button rw-button-blue"
        >
          Home
        </Link>
        </nav>
    </div> 

    
  )
}

export default AnimalsList
