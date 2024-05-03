
## This action was originally created here: https://github.com/Jasmeet107/fill-jira-ticket and moved to notarize org on 3/10

<p align="center">
  <a href="https://github.com/notarize/fill-jira-ticket"><img alt="GitHub Actions status" src="https://github.com/notarize/fill-jira-ticket/workflows/fill-jira-ticket/badge.svg"></a>
</p>

## Code in Master

Install the dependencies
```bash
$ npm install
```

Run the tests :heavy_check_mark:
```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

## Change action.yml

The action.yml contains defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Change the Code

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Publish to a distribution branch

Actions are run from GitHub repos.  We will create a feature branch and only checkin production modules.

```bash
$ git checkout -b $feature_branch
$ git commit -a -m "prod dependencies"
```

```bash
$ bin/rebuild-for-deploy.sh
$ git add node_modules package-lock.json
$ git commit -a -m "prod dependencies"
$ git push origin $feature_branch
```

Now put in a PR, merge, and tag the release.


See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Validate

You can now validate the action by referencing the releases/v1 branch

```yaml
uses: notarize/fill-jira-ticket@v9
with:
  repo-token: ${{ secrets.github_token }}
```

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:

## Usage:

After testing you can [create a tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and tested action

```yaml
uses: notarize/fill-jira-ticket@v9
with:
  repo-token: ${{ secrets.github_token }}
```
