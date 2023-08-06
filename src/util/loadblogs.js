import React from 'react';

const loadblogs = async () => {
    const res = await fetch("http://localhost:5000/posts");
    return res.json()

   
};

export default loadblogs;