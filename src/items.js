function timeout(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export default async function getItems() {
  await timeout(1000);
  return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
}