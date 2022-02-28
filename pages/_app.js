import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
    return <>
    <NextNProgress
        color="#fff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        />
    <Component {...pageProps} />
    <style>{`
        * {
            font-family: 'Roboto Slab', serif;
            list-style: none;
        }
    `}</style>
    </>
  }