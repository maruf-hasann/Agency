import React from 'react';

const loadblogs = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/maruf-hasann/Agency/main/src/data.json",
      {
        cache: "force-cache",
      }
    );
    return res.json()

   
};

export default loadblogs;