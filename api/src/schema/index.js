import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  printSchema,
} from "graphql";

import NumbersInRange from "./types/numbers-in-range";
import { numbersInRangeObject } from "../utils";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root query entry for the API",
  fields: {
    currentTime: {
      type: GraphQLString,
      description: "The current time in ISO UTC",
      resolve: () => {
        const isoString = new Date().toISOString();
        return isoString.slice(11, 19);
      },
    },
    numbersInRange: {
      type: NumbersInRange,
      description:
        "An object representing a range of whole numbers from 'begin' to 'end' inclusive to the edges",
      args: {
        begin: {
          type: new GraphQLNonNull(GraphQLInt),
          description: "The number to begin the range",
        },
        end: {
          type: new GraphQLNonNull(GraphQLInt),
          description: "The number to end the range",
        },
      },
      resolve: function (source, { begin, end }) {
        return numbersInRangeObject(begin, end);
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
});

console.log(printSchema(schema));
