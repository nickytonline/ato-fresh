interface SocialMetaProps {
  description: string;
  imageUrl: string;
  imageAltText: string;
}

export const SocialMeta = ({
  description,
  imageUrl,
  imageAltText,
}: SocialMetaProps) => {
  return (
    <>
      <meta property="og:site_name" content={description} />
      <meta property="og:title" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fresh-confoo-demo.deno.dev/" />
      <meta name="twitter:creator" content="@nickytonline" />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAltText} />
      <meta name="twitter:image:alt" content={imageAltText} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
