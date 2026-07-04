"use client";

import { useState } from "react";

export default function ItemForm() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(text);

    const items = text
    .trim()
    .split("\n")
    .map((line) => {
      const [name, price] = line.split(",");

      return {
        name: name.trim(),
        price: Number(price),
      };
    });

    console.log(items);


  const response = await fetch("/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  });
    
  const data = await response.json()
  console.log(data);


  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Item Analyzer</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border p-3 rounded"
          rows="6"
          placeholder={`Apple,2\nLaptop,1000\nBook,15`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {result && (
        <div className="mt-6 border-t pt-4">
          <h2 className="font-bold">Result</h2>

          <p>Total: {result.total}</p>

          <p>
            Most Expensive: {result.mostExpensive.name} ($
            {result.mostExpensive.price})
          </p>
        </div>
      )}
    </div>
  );
}