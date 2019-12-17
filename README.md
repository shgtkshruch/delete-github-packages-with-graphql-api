# github-graphql-client-sample

Delete GitHub Package through [GitHub GraphQL API v4](https://developer.github.com/v4/).

## Set up

Set [GiHub personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) to environment variables.

Add scopes below.
- `repo`
- `read:packages`
- `delete:packages`

## Command

```sh
# Get package version ID
node get.js [owner] [repository name]

# Delete specific version package
node delete.js [package version ID]
```
