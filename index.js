const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {

    const inputs = {
      token: core.getInput('repo-token', {required: true}),
    }

    const title = github.context.payload.pull_request.title;
    core.info(title);
    const isAdhoc = title.includes('ADHOC') || title.includes('STORYBOOK');
    if (isAdhoc) {
      core.info("PR is adhoc or storybook -- no updates made"); 
      return;
    }

    core.info(title);
    const matches = title.match(/(\w+-\d+)/)
    if (!(matches)) {
      core.warning("Jira ticket not in PR title");
      return;
    }
    const jiraTicketKey = matches[0];
    core.info(`Jira Ticket Key: ${jiraTicketKey}`);
    let body = github.context.payload.pull_request.body;
    // core.info(body);
    if (!body) {
      core.warning('Body is blank.  Jira ticket will over-write any previous body.');
      body = ""
    }
    if (body.includes(jiraTicketKey)) {
      core.info('PR body is prefixed already - no updates made');
      return;
    }

    const request = {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: github.context.payload.pull_request.number,
    }

    const linkRegex = /^(?=.*?\bJIRA\b)(?=.*?\bticket\b).*$/m
    let lineToAdd = `:ticket: [JIRA ticket: ${jiraTicketKey}](https://notarize.atlassian.net/browse/${jiraTicketKey}) :ticket:`
    const lineExists = body.match(linkRegex)
    if (lineExists) {
      core.info("'JIRA ticket' exists in PR body without ticket number; replacing that line.");
      request.body = body.replace(linkRegex, lineToAdd)
    } else {
      core.info("'JIRA ticket' not found.  Adding line to PR body.");
      request.body = lineToAdd.concat('\n', body);
    }

    core.debug(`new body: ${request.body}`)

    const client = github.getOctokit(inputs.token);
    const response = await client.rest.pulls.update(request);

    core.info(`response: ${response.status}`);
    if (response.status !== 200) {
      core.error('Updating the pull request has failed');
    }
  }
  catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run()
