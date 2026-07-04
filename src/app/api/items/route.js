export async function POST(request) {
    // console.log("Request received");
  const items = await request.json();

  console.log("Items: ", items);

  const  total = items.reduce((sum ,item)=> sum + item.price ,0)
//   console.log (total)

  const mostExpensiveItem = items.reduce((max, item) => item.price > max.price ? item : max, items[0]);
//   console.log(mostExpensiveItem)

  return Response.json({
    message: "Data received successfully!",
    total: total,
    mostExpensiveItem: mostExpensiveItem
  });
}