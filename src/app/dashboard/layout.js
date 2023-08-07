import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
      <div>
        {children}
        <ul>
          <Link href={"/dashboard/manage-products"}>Manage Products</Link>
        </ul>
      </div>
    );
};

export default layout;