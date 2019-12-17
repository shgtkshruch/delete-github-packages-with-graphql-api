const util = require("util");
const { graphql } = require("@octokit/graphql");

(async () => {
  const { repository } = await graphql(
    `
      mutation {
        deletePackageVersion(input: {
          packageVersionId: "${process.argv[2]}",
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
