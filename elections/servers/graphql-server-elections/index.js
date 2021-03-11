const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");

require("dotenv").config({ path: ".env" });

mongoose.connect(process.env.BBDD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}, (err, _) => {
  if(err) {
    console.log("Error de conexión.");
  } else {
    server();
  }
});

function server() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  apolloServer.listen().then(({ url }) => {
    console.log("###################################");
    console.log(`Servidor listo en la url: ${url}`);
    console.log("###################################");
  });
}