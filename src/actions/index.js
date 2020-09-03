export const RECEIVE_MEMES = "RECEIVE_MEMES";

// // regular action creator
function receiveMemes(json) {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    memes
  };
}

// // assynchronous function - handle in a foreseen amount of time
function fetchMemesJson() {
  return fetch("https://api.imgflip.com/get_memes").then(response =>
    response.json()
  );
}

// // dispatch will work at the moment fetchMemesJson receive the data
// // for handle the assynchronous behavior of the API
export function fetchMemes() {
  return function(dispath) {
    return fetchMemesJson().then(json => dispath(receiveMemes(json)));
  };
}

// // MIDDLEWARE THUNK- ALLOW ASSYNC ACTIONSTO - ALLOW RETURNING FUNCTIONS
