import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function CartScreen(props) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const qty = searchParams.get("qty") ? Number(searchParams.get("qty")) : 1;

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {id} Qty: {qty}
      </p>
    </div>
  );
}
