// components/PreLoad.js

import React from "react";
import Head from "next/head";

const PreLoad = () => {
  return (
    <Head>
      {/* Example of preloading fonts */}
      <link
        rel="preload"
        href="/_next/static/media/b27868729ad8c262-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Example of preloading images */}
      <link
        rel="preload"
        href="/path/to/image.jpg"
        as="image"
      />
      
      {/* Example of preloading scripts */}
      <link
        rel="preload"
        href="/path/to/script.js"
        as="script"
      />
      
      {/* Add more resources as needed */}
    </Head>
  );
};

export default PreLoad;
