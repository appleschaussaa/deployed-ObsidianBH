// const KEY = "searchedCities";

// export const getFromLocalStorage = () => {
//   const storedCities = localStorage.getItem(KEY);
//   return storedCities ? JSON.parse(storedCities) : [];
// };

// export const storeInLocalStorage = (city) => {
//   const storedCities = getFromLocalStorage();
//   if (!storedCities.includes(city)) {
//     const updatedCities = [...storedCities, city];
//     localStorage.setItem(KEY, JSON.stringify(updatedCities));
//   }
// };

// export const removeFromLocalStorage = (city) => {
//   const storedCities = getFromLocalStorage();
//   const updatedCities = storedCities.filter((storedCity) => storedCity !== city);
//   localStorage.setItem(KEY, JSON.stringify(updatedCities));
// };