export async function fetchData(url:string){
   const jsonResponse: string[] = await getRemoteData(url);
   return jsonResponse;
}

async function getRemoteData(url: string) {
    const response = await fetch(url);
    const body = await response.json();
    return body.results;
}
