const baseUrl = "https://api.giphy.com/v1/gifs";
const apiKey = process.env.REACT_APP_API_KEY;

// search gif by query
export async function searchGif(query) {
  try {
    const response = await fetch(
      `${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=25`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("api call failes" + error.message);
  }
}

// load more gifs based on search results
export async function loadMoreResultsGifs(query, offset) {
  try {
    const response = await fetch(
      `${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=25&offset=${offset}&limit=25`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("api call failed" + error.mesagge);
  }
}

//suggestions based on the search input
export async function autocompleteSearch(query) {
  try {
    const response = await fetch(
      `${baseUrl}/search/tags?api_key=${apiKey}&q=${query}&limit=3`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("api call failed" + error.message);
  }
}

// get the trending gifs
export async function getTrendingGifs() {
  try {
    const response = await fetch(
      `${baseUrl}/trending?api_key=${apiKey}&limit=25`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Api call failed" + error.message);
  }
}

// load more gifs based on search results
export async function loadMoreTrendingGifs(offset) {
  try {
    const response = await fetch(
      `${baseUrl}/trending?api_key=${apiKey}&offset=${offset}&limit=25`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("api call failed" + error.mesagge);
  }
}

// load user's favorites gifs by id
export async function loadUserFavorites(list) {
  try {
    const response = await fetch(`${baseUrl}?api_key=${apiKey}&ids=${list}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Api call failed" + error);
  }
}

export async function getGifbyId(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Api call failed" + error);
  }
}
