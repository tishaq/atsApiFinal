// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transaction, Agent, Customer, Organization, Device, Item, ApiUser } = initSchema(schema);

export {
  Transaction,
  Agent,
  Customer,
  Organization,
  Device,
  Item,
  ApiUser
};