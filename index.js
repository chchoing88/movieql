import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./graphql/resolvers";
import resolvers from "./graphql/apiResolver";

// 스키마 네가 받거나 줄 정보에 대한 서술 즉, 설명.. 무엇을 줄지에 대한

// Query는 네가 정보를 받을 때만 쓰인다.
// Mutation은 네가 정보를 변형할 때 쓰인다.
// GraphQL 서버에 할건 어떤 Mutations 그리고 어떤 Query 들을 우리가 가졌는지 알려주는 것이다.

// 실제로 이름 Query의 기능성을 프로그래밍 해야합니다.
// 이 Query 들을 어떤 방식으로 resolve(해결) 해야 한다.
//

// 스키마에서 너의 데이터가 어떻게 보일지를 정의하고
// 그 질문을 resolve에서 해결하는 함수를 만드는 것이다
// resolvers는 어떤 것도 될수 있다. 다른 API에 갈 수도있고 Database에 갈 수도 있다
const server = new GraphQLServer({
  typeDefs: "graphql/apiSchema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running hou!!!"));
