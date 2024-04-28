function fn() {
  var env = karate.env;

  var config = {
    env: env,
    urlBase: 'https://jsonplaceholder.typicode.com'
  }

  return config;
}