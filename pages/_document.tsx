// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
//         <link rel="icon" href="/favicon/icon.svg" />
//       </Head>
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#777777" />
        <link rel="apple-touch-icon" href="/favicon/icon.svg" />
        <link rel="icon" href="/favicon/icon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
