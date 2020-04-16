import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './user';
import { RecipeQuery, RecipeMutation } from './recipe';

schemaComposer.Query.addFields({
    ...UserQuery,
    ...RecipeQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...RecipeMutation,
});

export default schemaComposer.buildSchema();
