const { mergeTypeDefs } = require('@graphql-tools/merge')
const postType = require('./typeDefs/postTypeDefs')
const postresolver = require('./resolvers/postResolvers')
const types = [postType]
const typeDefs = mergeTypeDefs(types)
const resolvers={...postresolver}
module.exports ={typeDefs,resolvers}