workflow "Pull Request" {
  on = "pull_request"
  resolves = ["ESLint"]
}

action "ESLint" {
  uses = "hallee/eslint-action@master"
  secrets = ["19555a1d99e072c0bdfed8bd03a0f40e8e0b570c"]
}
