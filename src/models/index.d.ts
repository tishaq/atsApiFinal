import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AgentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrganizationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DeviceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ApiUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Transaction {
  readonly id: string;
  readonly agent: Agent;
  readonly device: Device;
  readonly item: Item;
  readonly customer: Customer;
  readonly amount: string;
  readonly quantity: string;
  readonly date: string;
  readonly timeStamp: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Transaction, TransactionMetaData>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction, TransactionMetaData>) => MutableModel<Transaction, TransactionMetaData> | void): Transaction;
}

export declare class Agent {
  readonly id: string;
  readonly name: string;
  readonly customers?: (Customer | null)[];
  readonly Transactions?: (Transaction | null)[];
  readonly Organization: Organization;
  readonly email?: string;
  readonly password: string;
  readonly phone: string;
  readonly type: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Agent, AgentMetaData>);
  static copyOf(source: Agent, mutator: (draft: MutableModel<Agent, AgentMetaData>) => MutableModel<Agent, AgentMetaData> | void): Agent;
}

export declare class Customer {
  readonly id: string;
  readonly name: string;
  readonly agent?: Agent;
  readonly transactions?: (Transaction | null)[];
  readonly phone: string;
  readonly code: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Organization {
  readonly id: string;
  readonly Agents?: (Agent | null)[];
  readonly Devices?: (Device | null)[];
  readonly name: string;
  readonly description?: string;
  readonly logoUrl: string;
  readonly phone: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Organization, OrganizationMetaData>);
  static copyOf(source: Organization, mutator: (draft: MutableModel<Organization, OrganizationMetaData>) => MutableModel<Organization, OrganizationMetaData> | void): Organization;
}

export declare class Device {
  readonly id: string;
  readonly Transactions?: (Transaction | null)[];
  readonly items?: (Item | null)[];
  readonly Organization: Organization;
  readonly name: string;
  readonly deviceId: string;
  readonly location: string;
  readonly lga?: string;
  readonly state?: string;
  readonly community?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Device, DeviceMetaData>);
  static copyOf(source: Device, mutator: (draft: MutableModel<Device, DeviceMetaData>) => MutableModel<Device, DeviceMetaData> | void): Device;
}

export declare class Item {
  readonly id: string;
  readonly code: string;
  readonly device: Device;
  readonly Transactions?: (Transaction | null)[];
  readonly category: string;
  readonly name: string;
  readonly measure: string;
  readonly unit?: string;
  readonly withQuantity: boolean;
  readonly withFromTo: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class ApiUser {
  readonly id: string;
  readonly apiKey: string;
  readonly apiUsername: string;
  readonly role: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ApiUser, ApiUserMetaData>);
  static copyOf(source: ApiUser, mutator: (draft: MutableModel<ApiUser, ApiUserMetaData>) => MutableModel<ApiUser, ApiUserMetaData> | void): ApiUser;
}