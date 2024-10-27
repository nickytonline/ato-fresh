import { asset, Head } from "$fresh/runtime.ts";
import type { VNode } from "preact";
import { TopNavigation } from "../components/TopNavigation.tsx";
import { SocialMeta } from "../components/SocialMeta.tsx";

interface LayoutProps {
  title: string;
  children: VNode | VNode[];
}

export default function Layout(props: LayoutProps) {
  const description = "Demo site for Nick Taylor's talk on Fresh";
  const imageUrl = "https://fresh-confoo-demo.deno.dev/images/og-image.png";
  const imageAltText =
    "Demo site for Nick Taylor's talk on Fresh";

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <SocialMeta
          description={description}
          imageUrl={imageUrl}
          imageAltText={imageAltText}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css"
        />
        <link rel="stylesheet" href={asset("/styles.css")} />
      </Head>
      <a class="skip-link" href="#main-content">
        Skip to content
      </a>
      <header>
        <TopNavigation />
      </header>
      <main id="main-content">
        {props.children}
      </main>
    </>
  );
}
