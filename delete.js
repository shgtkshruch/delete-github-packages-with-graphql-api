const util = require("util");
const { graphql } = require("@octokit/graphql");

(async () => {
  const { repository } = await graphql(
    `
      mutation {
        deletePackageVersion(input: {
          packageVersionId: "MDE0OlBhY2thZ2VWZXJzaW9uNDU4NzAw",
        }) {
          clientMutationId,
          success
        }
      }
    `,
    {
      headers: {
        authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        Accept: "application/vnd.github.package-deletes-preview+json"
      }
    }
  );
  console.log(util.inspect(repository, { depth: 5 }))
})()
