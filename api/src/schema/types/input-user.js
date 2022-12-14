import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const UserInput = new GraphQLInputObjectType({
  name: "UserInput",
  fields: () => ({
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  }),
});

export default UserInput;
