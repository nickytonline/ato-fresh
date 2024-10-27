export function Stars({ rating }: { rating: number }) {
  return <>{new Array(rating).fill("⭐").join("")}</>;
}
