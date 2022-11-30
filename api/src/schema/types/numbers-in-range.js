import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from "graphql";

const NumbersInRange = new GraphQLObjectType({
  name: "NumbersInRange",
  description: "Aggregate info on a range of numbers",
  fields: () => ({
    sum: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Sum of all whole numbers in the range",
    },
    count: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Count of all whole numbers in the range",
    },
  }),
});

export default NumbersInRange;
