const util = require("util");
const { graphql } = require("@octokit/graphql");

(async () => {
  const { repository } = await graphql(
    `
      {
        repository(owner: "${process.argv[2]}", name: "${process.argv[3]}") {
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
