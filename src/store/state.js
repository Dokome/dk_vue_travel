let default_city = "北京";
try {
  if (localStorage.city) {
    default_city = localStorage.city;
  }
} catch (error) {}

export default {
  city: default_city
};
