async function getRemoteData(url: string) {
    const response = await fetch(url);
    const body = await response.json();
    return body.results;
}
  
async function manageData(){
   const jsonResponse: string[] = await getRemoteData('https://randomuser.me/api?results=100');
   return processData(jsonResponse, 'gender');
}

function processData(jsonResponse:string[], property:string){
    let map: Map<string,number> = new Map();
    jsonResponse.forEach(element => {
        if(map.has(element[property])){
            map.set(element[property], map.get(element[property]) + 1);
        } else{
            map.set(element[property],1);
        }
    });
}

manageData();
