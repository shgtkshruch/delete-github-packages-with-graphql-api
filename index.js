const util = require("util");
const { graphql } = require("@octokit/graphql");

(async () => {
  const { repository } = await graphql(
    `
      {
        repository(owner: "shgtkshruch", name: "esquisse") {
          packages(first: 3) {
            edges {
              node {
                id
                name
                latestVersion {
                  id
                  platform
                  summary
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        Accept: "application/vnd.github.packages-preview+json"
      }
    }
  );
  console.log(util.inspect(repository, { depth: 5 }))
})()
