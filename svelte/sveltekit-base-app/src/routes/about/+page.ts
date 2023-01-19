export async function load({ fetch }) {
  let res = await fetch('https://dummyjson.com/products/1');
  let result = await res.json();
  console.log(result);
  return result;
}