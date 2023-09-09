import "normalize.css/normalize.css";
import "~/ui/styles/global.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Wrapper } from "~/ui/provider/Wrapper";
import NextNProgress from "nextjs-progressbar";
import { Roboto } from "@next/font/google";

// https://stackoverflow.com/questions/57609931/next-js-with-fortawesome-and-ssr
config.autoAddCss = false;

const roboto = Roboto({
  weight: "400",
  subsets: ["cyrillic"],
  variable: "--font-roboto-400",
});

type Props = AppProps<{ dehydratedState: unknown }>;
const Page: NextPage<Props> = (props) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1.0" />
    </Head>
    <NextNProgress />
    <Wrapper {...props.pageProps}>
      <style jsx global>{`
        :root {
          --font-roboto-400: ${roboto.style.fontFamily};
        }
      `}</style>
      <props.Component {...props.pageProps} />
    </Wrapper>
  </>
);

export default Page;
