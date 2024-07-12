window.addEventListener('DOMContentLoaded', (Event) => {
    getVisitCount();
})

// local function var for use with Azure Functions Core Tools
const functionApiUrl = 'https://darrenscv.azurewebsites.net/api/GetResumeCounter?code=UKM3sOLs49fUddTtBfnGdMAH2-Na0j67VD6pbfPZTEpKAzFuRUDhZw%3D%3D'
const localFunctionApi   = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(Response => {
        return Response.json()
    }).then(Response => {
        console.log("Website called function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    });
    return count;
}