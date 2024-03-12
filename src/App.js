import "./App.css";
import { Helmet } from "react-helmet";

import RouterPage from "./Router";
import ReactGa from "react-ga"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    ReactGa.initialize('G-ZTK7M863ND');

    // Send a pageview event for the current page
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
 
  return (
    <> 
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://techcreator.co/",
            "@type": "Service",
            serviceType: "Web Development",
            provider: {
              "@type": "Organization",
              name: "techcreator",
              "@id": "https://techcreator.co/",
            },

            description:
              "At TechCreator, we offer a wide range of products and services in the fields of software development, data analytics, embedded systems, and artificial intelligence. Our goal is to use technology to create a better future for everyone.",
            potentialAction: {
              "@type": "Continue the Conversation",
              name: "Continue the Conversation",
              serviceOutput: {
                "@type": "Organization",
                name: "techcreator",
                "@id": "https://techcreator.co/",
              },

              url: "https://techcreator.co/",
              "@id": "https://techcreator.co/",
            },
          })}
        </script>
        {/* <title data-react-helmet="true">Techcreator Software Company</title>
        <meta
          name="description"
          content="techcreator, we offer a wide range of products and services in the fields of software development, data analytics, embedded systems, and artificial intelligence. Our goal is to use technology to create a better future for everyone."
          data-rh="true"
        />
        <meta
          name="keywords"
          content="software development, data analytics, embedded systems, artificial intelligence, technology solutions"
        />
        <meta name="robots" content="index,follow"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="canonical" href="techcreator.co/" /> */}
      </Helmet>
      <div className="App">
        <RouterPage />
      </div>
    </>
  );
}

export default App;
