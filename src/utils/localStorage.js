// set current theme in local storage
export const setItemLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//get current theme from local storage
export const getItemLocalStorage = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
