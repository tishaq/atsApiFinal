/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      agent {
        id
        name
        email
        password
        phone
        type
        createdAt
        updatedAt
      }
      device {
        id
        name
        deviceId
        location
        lga
        state
        community
        createdAt
        updatedAt
      }
      item {
        id
        code
        category
        name
        measure
        unit
        withQuantity
        withFromTo
        createdAt
        updatedAt
      }
      customer {
        id
        name
        phone
        code
        createdAt
        updatedAt
      }
      amount
      quantity
      date
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      agent {
        id
        name
        email
        password
        phone
        type
        createdAt
        updatedAt
      }
      device {
        id
        name
        deviceId
        location
        lga
        state
        community
        createdAt
        updatedAt
      }
      item {
        id
        code
        category
        name
        measure
        unit
        withQuantity
        withFromTo
        createdAt
        updatedAt
      }
      customer {
        id
        name
        phone
        code
        createdAt
        updatedAt
      }
      amount
      quantity
      date
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      agent {
        id
        name
        email
        password
        phone
        type
        createdAt
        updatedAt
      }
      device {
        id
        name
        deviceId
        location
        lga
        state
        community
        createdAt
        updatedAt
      }
      item {
        id
        code
        category
        name
        measure
        unit
        withQuantity
        withFromTo
        createdAt
        updatedAt
      }
      customer {
        id
        name
        phone
        code
        createdAt
        updatedAt
      }
      amount
      quantity
      date
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const createAgent = /* GraphQL */ `
  mutation CreateAgent(
    $input: CreateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    createAgent(input: $input, condition: $condition) {
      id
      name
      customers {
        nextToken
      }
      Transactions {
        nextToken
      }
      email
      password
      phone
      type
      createdAt
      updatedAt
    }
  }
`;
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent(
    $input: UpdateAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    updateAgent(input: $input, condition: $condition) {
      id
      name
      customers {
        nextToken
      }
      Transactions {
        nextToken
      }
      email
      password
      phone
      type
      createdAt
      updatedAt
    }
  }
`;
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent(
    $input: DeleteAgentInput!
    $condition: ModelAgentConditionInput
  ) {
    deleteAgent(input: $input, condition: $condition) {
      id
      name
      customers {
        nextToken
      }
      Transactions {
        nextToken
      }
      email
      password
      phone
      type
      createdAt
      updatedAt
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      Transactions {
        nextToken
      }
      items {
        nextToken
      }
      name
      deviceId
      location
      lga
      state
      community
      createdAt
      updatedAt
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      Transactions {
        nextToken
      }
      items {
        nextToken
      }
      name
      deviceId
      location
      lga
      state
      community
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      Transactions {
        nextToken
      }
      items {
        nextToken
      }
      name
      deviceId
      location
      lga
      state
      community
      createdAt
      updatedAt
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      code
      device {
        id
        name
        deviceId
        location
        lga
        state
        community
        createdAt
        updatedAt
      }
      Transactions {
        nextToken
      }
      category
      name
      measure
      unit
      withQuantity
      withFromTo
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      code
      device {
        id
        name
        deviceId
        location
        lga
        state
        community
        createdAt
        updatedAt
      }
      Transactions {
        nextToken
      }
      category
      name
      measure
      unit
      withQuantity
      withFromTo
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      code
      device {
        id
        name
        deviceId
        location
        lga
        state
        community
        createdAt
        updatedAt
      }
      Transactions {
        nextToken
      }
      category
      name
      measure
      unit
      withQuantity
      withFromTo
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      agent {
        id
        name
        email
        password
        phone
        type
        createdAt
        updatedAt
      }
      transactions {
        nextToken
      }
      phone
      code
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      agent {
        id
        name
        email
        password
        phone
        type
        createdAt
        updatedAt
      }
      transactions {
        nextToken
      }
      phone
      code
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      agent {
        id
        name
        email
        password
        phone
        type
        createdAt
        updatedAt
      }
      transactions {
        nextToken
      }
      phone
      code
      createdAt
      updatedAt
    }
  }
`;
export const createApiUser = /* GraphQL */ `
  mutation CreateApiUser(
    $input: CreateApiUserInput!
    $condition: ModelApiUserConditionInput
  ) {
    createApiUser(input: $input, condition: $condition) {
      id
      apiKey
      apiUsername
      role
      createdAt
      updatedAt
    }
  }
`;
export const updateApiUser = /* GraphQL */ `
  mutation UpdateApiUser(
    $input: UpdateApiUserInput!
    $condition: ModelApiUserConditionInput
  ) {
    updateApiUser(input: $input, condition: $condition) {
      id
      apiKey
      apiUsername
      role
      createdAt
      updatedAt
    }
  }
`;
export const deleteApiUser = /* GraphQL */ `
  mutation DeleteApiUser(
    $input: DeleteApiUserInput!
    $condition: ModelApiUserConditionInput
  ) {
    deleteApiUser(input: $input, condition: $condition) {
      id
      apiKey
      apiUsername
      role
      createdAt
      updatedAt
    }
  }
`;
