import { Head, Html, Main, NextScript } from "next/document";
import { THEME_INIT_SCRIPT, THEME_LIGHT } from "../lib/theme";

export default function Document() {
  return (
    <Html lang="en" className={THEME_LIGHT}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
