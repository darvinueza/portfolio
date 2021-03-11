const resolvers = {
     Query: {
         // User
          getUser: () => {
              console.log("Obteniendo Usuario");
              return null;
          }
     }
}

module.exports = resolvers;