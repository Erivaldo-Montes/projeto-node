export function buildRoutePath(path) {
  // identifica se o path contem o paramentro que comença com : (/users/:id)
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  // substitui o parementro encontrado por outra regex do uuid
  // ?<$1> no regex nomeia o match com o nome do parametro encontrado na rota
  const pathWithParams = path.replaceAll(
    routeParametersRegex,
    `(?<$1>[a-z0-9\-_]+)`
  );

  const regextest = /(?<query>\?(.*)?)/;
  // verifica se a url
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?`);

  return pathRegex;
}
