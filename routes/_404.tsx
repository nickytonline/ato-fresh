import { UnknownPageProps } from "$fresh/server.ts";
import { CitrusFruit } from "../components/CitrusFruit.tsx";
import Layout from "../layouts/Layout.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  // Just having some fun with the 404 page
  const fruit = Math.random() > 0.5 ? "lemon" : "lime";

  return (
    <Layout title="Page Not Found">
      <div class="_404">
        <h1>Page Not Found</h1>
        <CitrusFruit fruit={fruit} />
        <p>Looks like we couldn't find that page.</p>
      </div>
    </Layout>
  );
}
