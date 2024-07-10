# azure-resume

## Structure
- Frontend folder contains the website
- main.js contains the visitor counter code


## High Level Steps

Create a blank project called azure-resume in GitHub.

Clone it into /repo/azure

Clone the source starter project into /repo/azure
[- Link to Starter project](https://github.com/ACloudGuru-Resources/acg-project-azure-resume-starter)

Copy both backend and frontend projects from the cloned starter project into your azure-resume project

Edit the index.html in the frontend folder in the azure-resume project

Create main.js in the frontend folder of your project

Create the Azure Function using the steps outlined in the video

Add the AzureResumeConnectionString variable to local.settings.json

Create the Counter.cs file

Update GetResumeCounter.cs

## Issues and updates

1. Functions Core Tools - you will need to install the core tools from here [Functions Core Tools](https://github.com/Azure/azure-functions-core-tools#installing).
I used the v4 the self-contained platform image on my Mac, and it worked just fine.

2. Dotnet SDK v6 - updates required to the CosmosDB HTTP trigger
![Note the update to containerName and Connection](/pics/dotnet6-functionsv2.png)

3. Function Core Tools flaky behaviour - I experienced some intermittent behaviour on my Mac when running the function locally using Functions Core Tools. It would on occaision not work, reporting a host configuration change error, usually because a file change had been detected. Even when it hadn't. ![Example error](/pics/assembly-error.png)
If this happens to you, try running
dotnet restore, followed by dotnet build.
And here is an example of the function running OK locally, you should see something similar ![Locally running function](/pics/function_working_locally.png)
With the browser showing..
![function running locally in browser](/pics/function_executing_locally.png)

### And if you are still having trouble, try the following..

Uninstall and reinstall Azure Functions Core Tools

`# Uninstall Azure Functions Core Tools`   
`npm uninstall -g azure-functions-core-tools@4`

`#Clear the NPM cache`  
`npm cache clean --force`

`#Install Azure Functions Core Tools`  
`npm i -g azure-functions-core-tools@4 --unsafe-perm true`

`# Install dependencies`    
`npm install`

`# Start function with verbose logging` 

`func start --verbose`  
Note your version of azure-functions-core-tools may be different to the latest at the time of writing *@4
