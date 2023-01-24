import Favicon from "../components/Favicon";
import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";
import config from "../../portfolio.json";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<Record<string, unknown> & { html: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <title>{config.name + " | " + config.tagline}</title>
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
