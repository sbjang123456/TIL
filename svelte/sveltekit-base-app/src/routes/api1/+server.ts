export async function GET({ fetch, request }) {
  return new Response(JSON.stringify({ name: 'jang' }));
}

export async function POST({ fetch, request }) {
  return new Response(JSON.stringify({ name: 'post jang' }));
}