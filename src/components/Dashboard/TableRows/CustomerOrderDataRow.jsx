import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
const CustomerOrderDataRow = () => {
  const handlePayment = async () => {
    console.log("clicked");
    
  };


  return (
    <tr>
      <td className="font-medium">Desert</td>

      <td>
        <span className="badge badge-warning capitalize">pending</span>
      </td>

      <td>৳180</td>

      <td>1</td>

      <td>30 min</td>

      <td>Chef John</td>

      <td>chef-2116</td>

      <td>
        <span className="badge badge-outline capitalize">pending</span>
      </td>

      <td className="text-right">
        <button onClick={handlePayment} className="btn btn-xs btn-primary">Pay</button>
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
