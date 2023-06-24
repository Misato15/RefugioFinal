export const schema = gql`
  type Animal {
    id: String!
    name: String!
    size: String!
    age: Int!
    color: String!
    specie: String!
    photo_url: String
    keeper: String
    vacunas: String
    observaciones: String
    alimentacion: String
  }

  type Query {
    animals: [Animal!]! @requireAuth
    animal(id: String!): Animal @requireAuth
  }

  input CreateAnimalInput {
    name: String!
    size: String!
    age: Int!
    color: String!
    specie: String!
    photo_url: String
    keeper: String
    vacunas: String
    observaciones: String
    alimentacion: String
  }

  input UpdateAnimalInput {
    name: String
    size: String
    age: Int
    color: String
    specie: String
    photo_url: String
    keeper: String
    vacunas: String
    observaciones: String
    alimentacion: String
  }

  type Mutation {
    createAnimal(input: CreateAnimalInput!): Animal! @requireAuth
    updateAnimal(id: String!, input: UpdateAnimalInput!): Animal! @requireAuth
    deleteAnimal(id: String!): Animal! @requireAuth
  }
`
