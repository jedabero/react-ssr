function timeout(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

async function getItems() {
  await timeout(1000);
  return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
}

const get = () => async (dispatch) => {
  dispatch({ type: 'LOADING_ITEMS' });
  const data = await getItems();
  console.log("data", data);
  return dispatch({
    type: 'LOADED_ITEMS',
    data
  });
};

export { get }
export default getItems;