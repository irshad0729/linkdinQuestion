import React from "react";
import { useRouter } from "next/router";
// useRouter hook is used to access the params value

const ProductDetails = () => {
  const router = useRouter();
  //   useRouter return router object
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product Id is {productId}</h1>
    </div>
  );
};

export default ProductDetails;

// note
// next js try to match the given router rather than dynamic route
// localhost:3000/product/sweater
// it will route the sweater page rather than dynamic
