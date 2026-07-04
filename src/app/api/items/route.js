export async function POST(request) {
    console.log("Request received");
  const items = await request.json();

  console.log("Items: ", items);

  return Response.json({
    message: "Data received successfully!",
  });
}