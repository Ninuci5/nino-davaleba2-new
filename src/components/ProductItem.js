export default function ProductItem({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={product.title}
        style={{ height: 160, objectFit: "contain" }}
      />
      <h3 style={{ fontSize: 16 }}>{product.title}</h3>
      <p style={{ fontSize: 12 }}>{product.category}</p>
      <strong>${product.price}</strong>
    </div>
  );
}
