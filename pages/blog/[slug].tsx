import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function article() {
  const router = useRouter();

  // console.log(router);

  // console.log(router.route);
  // console.log(router.asPath);
  // console.log(router.query);

  const pushFunction = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </Head>
      <div>
        {/* <h1>10 plats savoureux</h1> */}
        <h1>{router.query.slug}</h1>
        <button onClick={pushFunction} className="btn btn-primary">
          Push to Home
        </button>
      </div>
    </>
  );
}
