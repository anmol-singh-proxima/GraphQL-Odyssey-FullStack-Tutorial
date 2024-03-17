const resolvers = {
    // Every field(function) in Query contains 4 parameters: (parent, args, contextValue, info)

    Query: {
        // Returns an Array of Tracks
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
}

module.exports = resolvers;