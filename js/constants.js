var DOMAIN_URI = "https://immense-waters-91788.herokuapp.com/";

async function getData(url = ''){
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'omit',
    headers:{
      'Content-Type': 'application/json'
    },
    redirect:'follow',
    referrerPolicy: 'no-referrer'
  });
  return response.json();

}
