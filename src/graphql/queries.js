/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        quantity
        date
        timeStamp
        createdAt
        updatedAt
        item{
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
        agent{
          id
          name
          email
          password
          phone
          type
          createdAt
          updatedAt  
        }
        device{
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
      }
      nextToken
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($id: ID!) {
    getAgent(id: $id) {
      id
      name
      customers {
        nextToken
      }
      Transactions {
        nextToken
      }
      Organization {
        id
        name
        description
        logoUrl
        phone
        createdAt
        updatedAt
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
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        phone
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      Transactions {
        nextToken
      }
      items {
        nextToken
      }
      Organization {
        id
        name
        description
        logoUrl
        phone
        createdAt
        updatedAt
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApiUser = /* GraphQL */ `
  query GetApiUser($id: ID!) {
    getApiUser(id: $id) {
      id
      apiKey
      apiUsername
      role
      createdAt
      updatedAt
    }
  }
`;
export const listApiUsers = /* GraphQL */ `
  query ListApiUsers(
    $filter: ModelApiUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApiUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apiKey
        apiUsername
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      Agents {
        nextToken
      }
      Devices {
        nextToken
      }
      name
      description
      logoUrl
      phone
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        logoUrl
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
