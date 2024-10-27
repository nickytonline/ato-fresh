interface MovieLinkProps {
  id: string;
  name: string;
}

export function MovieLink({ id, name }: MovieLinkProps) {
  return <a href={`/movies/${id}`}>{name}</a>;
}
