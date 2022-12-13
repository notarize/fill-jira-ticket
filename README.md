
##Thisactionwasoriginallycreatedhere:https://github.com/Jasmeet107/fill-jira-ticketandmovedtonotarizeorgon3/10

<palign="center">
<ahref="https://github.com/actions/javascript-action"><imgalt="GitHubActionsstatus"src="https://github.com/actions/javascript-action/workflows/test-local/badge.svg"></a>
</p>

#CreateaJavaScriptAction

UsethistemplatetobootstrapthecreationofaJavaScriptaction.:rocket:

Thistemplateincludestests,linting,avalidationworkflow,publishing,andversioningguidance.

Ifyouarenew,there'salsoasimplerintroduction.Seethe[HelloWorldJavaScriptAction](https://github.com/actions/hello-world-javascript-action)

##Createanactionfromthistemplate

Clickthe`UsethisTemplate`andprovidethenewrepodetailsforyouraction

##CodeinMaster

Installthedependencies
```bash
$npminstall
```

Runthetests:heavy_check_mark:
```bash
$npmtest

PASS./index.test.js
✓throwsinvalidnumber(3ms)
✓wait500ms(504ms)
✓testruns(95ms)

...
```

##Changeaction.yml

Theaction.ymlcontainsdefinestheinputsandoutputforyouraction.

Updatetheaction.ymlwithyourname,description,inputsandoutputsforyouraction.

Seethe[documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

##ChangetheCode

MosttoolkitandCI/CDoperationsinvolveasyncoperationssotheactionisruninanasyncfunction.

```javascript
constcore=require('@actions/core');
...

asyncfunctionrun(){
try{
...
}
catch(error){
core.setFailed(error.message);
}
}

run()
```

Seethe[toolkitdocumentation](https://github.com/actions/toolkit/blob/master/README.md#packages)forthevariouspackages.

##Publishtoadistributionbranch

ActionsarerunfromGitHubrepos.Wewillcreateafeaturebranchandonlycheckinproductionmodules.

```bash
$gitcheckout-b$feature_branch
$gitcommit-a-m"proddependencies"
```

```bash
$bin/rebuild-for-deploy.sh
$gitaddnode_modulespackage-lock.json
$gitcommit-a-m"proddependencies"
$gitpushorigin$feature_branch
```

Now,openaPR,getitreview,mergeitandthentagtherelease.

Seethe[versioningdocumentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

##Validate

Youcannowvalidatetheactionbyreferencingthereleases/v1branch

```yaml
uses:actions/javascript-action@releases/v1
with:
milliseconds:1000
```

Seethe[actionstab](https://github.com/actions/javascript-action/actions)forrunsofthisaction!:rocket:

##Usage:

Aftertestingyoucan[createav1tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)toreferencethestableandtestedaction

```yaml
uses:actions/javascript-action@v1
with:
milliseconds:1000
```
