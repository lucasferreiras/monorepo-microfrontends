import MicroFrontend from "./MicroFrontend";

const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
  REACT_APP_TESTE_HOST: testeHost,
} = process.env;

export function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

export function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

export function Teste({ history }) {
  return <MicroFrontend history={history} host={testeHost} name="Teste" />;
}
