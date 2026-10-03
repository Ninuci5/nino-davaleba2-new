"use client";

import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>იტვირთება</p>;
  if (error) return <p>მოხდა შეცდომა</p>;

  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
        padding: 24,
      }}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </main>
  );
}
