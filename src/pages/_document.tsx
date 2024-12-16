import Document, { Head, Html, Main, NextScript } from "next/document";
import { JSX } from "react/jsx-runtime";

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}