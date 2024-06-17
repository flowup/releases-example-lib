# Example library for GitHub releases workshop

A simple Node.js library (with math-related utility functions). Serves to demonstrate **automated releases using semantic versioning**.

## Workflows

- [**CI** workflow](./.github/workflows/ci.yml) runs tests on push to any branch
- [**Release** workflow](./.github/workflows/release.yml) runs on every push to `main` branch
  - determines next version from conventional commit messages
  - if there aren't any changes impacting library consumers (`feat`, `fix` or `BREAKING CHANGE` commits), release is skipped
  - new library version is published to GitHub Packages registry
  - a new release commit is tagged with `vX.Y.Z` and pushed to `main` branch
    - updates [`CHANGELOG.md`](./CHANGELOG.md) (generated from commit messages)
    - updates `version` field in [`package.json`](./package.json)
  - a new GitHub release is created with appropriate release notes

## Links

- [Package](https://github.com/flowup/releases-example-lib/pkgs/npm/releases-example-lib)
- [Releases](https://github.com/flowup/releases-example-lib/releases)
- [Actions](https://github.com/flowup/releases-example-lib/actions)
