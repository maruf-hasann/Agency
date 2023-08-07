"use client";

import Modal from "@/components/Modal/Modal";
import allProducts from "@/util/allProducts";
import { validateConfig } from "next/dist/server/config-shared";
import React from "react";

const ManageProducts = async () => {
  const products = await allProducts();

  return (
    <div className="my_container">
      <h3>Manage Products</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>$ {p.price}</td>
                <td>
                  <button>
                    <a href="#my_modal_8" className="btn">
                      Update
                    </a>
                  </button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal />
      </div>
    </div>
  );
};

export default ManageProducts;
