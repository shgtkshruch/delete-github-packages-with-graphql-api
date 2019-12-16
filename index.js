const util = require("util");
const { graphql } = require("@octokit/graphql");

(async () => {
  const { repository } = await graphql(
    `
      {
        repository(owner: "octokit", name: "graphql.js") {
          issues(last: 3) {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${process.env.GITHUB_API_TOKEN}`
      }
    }
  );
  console.log(util.inspect(repository, { depth: 5 }))
})()
