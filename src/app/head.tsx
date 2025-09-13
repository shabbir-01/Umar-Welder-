// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Umar Welder – Professional Welding Services in Riyadh, Saudi Arabia</title>
      <meta
        name="description"
        content="Umar Welder provides top-quality iron welding, repairing, custom metal work, and shed making services in Riyadh, Saudi Arabia. Contact us today!"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://umar-welder.vercel.app/" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Umar Welder",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressCountry": "SA"
          },
          "telephone": "+966537060492",
          "email": "umarua847@gmail.com",
          "url": "https://umar-welder.vercel.app"
        }
        `}
      </script>
    </>
  );
}
