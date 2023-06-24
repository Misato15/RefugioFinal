import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

import type { EditAnimalById, UpdateAnimalInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAnimal = NonNullable<EditAnimalById['animal']>

interface AnimalFormProps {
  animal?: EditAnimalById['animal']
  onSave: (data: UpdateAnimalInput, id?: FormAnimal['id']) => void
  error: RWGqlError
  loading: boolean
}

const AnimalForm = (props: AnimalFormProps) => {
  const onSubmit = (data: FormAnimal) => {
    props.onSave(data, props?.animal?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAnimal> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nombre
        </Label>

        <TextField
          name="name"
          defaultValue={props.animal?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tamaño
        </Label>

        <TextField
          name="size"
          defaultValue={props.animal?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="age"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Edad
        </Label>

        <NumberField
          name="age"
          defaultValue={props.animal?.age}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="age" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.animal?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />

        <Label
          name="specie"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Especie
        </Label>

        <SelectField name="specie" multiple={false}>
        <option>Perro</option>
        <option>Gato</option>
  
        </SelectField>

        <FieldError name="specie" className="rw-field-error" />

        <Label
          name="photo_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          URL Fotografía
        </Label>

        <TextField
          name="photo_url"
          defaultValue={props.animal?.photo_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="photo_url" className="rw-field-error" />

        <Label
          name="keeper"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cuidador
        </Label>

        <SelectField name="keeper" multiple={false}>
        <option>Juan Martínez</option>
        <option>Pedro Gracía</option>
        <option>Shadia Nassar</option>
        <option>Daniel Morales</option>
        <option>Juan Carlos Lagos</option>
  
        </SelectField>

        <FieldError name="keeper" className="rw-field-error" />

        <Label
          name="vacunas"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vacunas
        </Label>

        <TextField
          name="vacunas"
          defaultValue={props.animal?.vacunas}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="vacunas" className="rw-field-error" />

        <Label
          name="observaciones"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Observaciones
        </Label>

        <TextField
          name="observaciones"
          defaultValue={props.animal?.observaciones}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="observaciones" className="rw-field-error" />

        <Label
          name="alimentacion"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Alimentación
        </Label>

        <TextField
          name="alimentacion"
          defaultValue={props.animal?.alimentacion}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="alimentacion" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Guardar
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AnimalForm
