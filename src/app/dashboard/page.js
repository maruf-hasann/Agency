import Link from 'next/link';
import React from 'react';

const DashboardPage = () => {
    return (
      <div>
        <ul>
          <Link href={'/dashboard/manage-products'}>Manage Products</Link>
        </ul>
      </div>
    );
};

export default DashboardPage;