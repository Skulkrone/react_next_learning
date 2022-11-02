import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {

  // Création de la structure de base des pages créées par NextJS 
  // Permet de gérer des choses qui ne peuvent pas être gérée par le _app.js

  render() {
    return (
      // <Html lang="de">
      <Html>
        <Head></Head>
        <body className="loader-on">
          <Main></Main>
          <NextScript></NextScript>
          </body>
      </Html>
    )
  }


}

export default MyDocument;