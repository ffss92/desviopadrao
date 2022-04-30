import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Calculadora on-line de desvio padrão populacional e amostral. 
          O desvio padrão é uma medida utilizada para indicar uma medida de
          dispersão dos dados em torno de média amostral, amplamente utilizada
          tanto no campo da estatística quanto da probabilidade."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Desvio Padrão" />
        <meta
          property="og:description"
          content="Calculadora on-line de desvio padrão populacional e amostral."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-MY9YZ2S6QR`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', G-MY9YZ2S6QR, {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
