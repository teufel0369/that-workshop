const { ApolloServer, gql } = require("apollo-server-micro");

// must have a query type
const schema = gql`
  type Speaker {
    id: ID!
    firstname: String!
    lastname: String!
    title: String!
    company: String!
    biography: String!
  }
  
   type Query {
    aboutMessage: String
    speakers: [Speaker!]!
  }
`;

const resolvers = {
  Query: {
    aboutMessage: () => "THAT Conference was founded by Clark Sell",
    speakers: () => [
        {
          id: 1,
          firstname: "Matt",
          lastname: "Reetz",
          title: "Software Engineer",
          company: "Headway",
          biography: "Matt is a coding ninja."
        },
        {
          id: 2,
          firstname: "Tim",
          lastname: "Gremore",
          title: "Software Engineer",
          company: "Headway",
          biography: "Tim is a coding wizard."
        }
    ]
  }
};

const apolloServer = new ApolloServer({ typeDefs: schema, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
