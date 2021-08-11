/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent {
    onCreateAgent {
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
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent {
    onUpdateAgent {
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
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent {
    onDeleteAgent {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateApiUser = /* GraphQL */ `
  subscription OnCreateApiUser {
    onCreateApiUser {
      id
      apiKey
      apiUsername
      role
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateApiUser = /* GraphQL */ `
  subscription OnUpdateApiUser {
    onUpdateApiUser {
      id
      apiKey
      apiUsername
      role
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteApiUser = /* GraphQL */ `
  subscription OnDeleteApiUser {
    onDeleteApiUser {
      id
      apiKey
      apiUsername
      role
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
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
