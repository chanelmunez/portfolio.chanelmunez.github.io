
export default function onRequest() {
  console.log(arguments)
  return new Response("stuff!")
}

