# github-graphql-client-sample

Delete GitHub Package through [GitHub GraphQL API v4](https://developer.github.com/v4/).

## Set up

1. Get [GiHub personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

Add scopes below.
- `repo`
- `read:packages`
- `delete:packages`

2. Set environment variables.
```sh
# bash
export GITHUB_API_TOKEN="xxx"

# fish
set -x GITHUB_API_TOKEN xxx
```

## Command

```sh
# Get package version ID
node get.js [owner] [repository name]

# Delete specific version package
node delete.js [package version ID]
```
