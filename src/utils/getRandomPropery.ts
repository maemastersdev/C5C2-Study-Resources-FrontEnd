// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const getRandomProperty = (object: any): string => {
  const keys = Object.keys(object);
  return keys[Math.floor(Math.random() * keys.length)];
};

export default getRandomProperty;
