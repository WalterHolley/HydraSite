var DOMAIN_URI = "https://immense-waters-91788.herokuapp.com/";
//var DOMAIN_URI ="http://localhost:8080/";

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
    referrerPolicy: 'origin-when-cross-origin'
  });
  return response.json();

}

async function postData(url = '', data = {}){
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers:{
      'Content-Type': 'application/json'
    },
    redirect:'follow',
    referrerPolicy: 'origin-when-cross-origin',
    body: JSON.stringify(data)
  });
  return response.json();

}
