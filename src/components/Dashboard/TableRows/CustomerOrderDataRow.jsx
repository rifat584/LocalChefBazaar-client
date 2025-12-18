import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
const CustomerOrderDataRow = ({order}) => {
  // console.log(order);
  const handlePayment = async () => {
    console.log("clicked");
    
  };

const {estimatedDeliveryTime, chefName, mealName, orderStatus, orderTime, paymentStatus, price, quantity, userAddress, userEmail, _id}= order;

  return (
    <tr>
      <td className="font-medium">{mealName}</td>

      <td>
        <span className="badge badge-warning capitalize">{orderStatus}</span>
      </td>

      <td>{price} TK</td>

      <td>{quantity}</td>

      <td>{estimatedDeliveryTime?.minTime} - {estimatedDeliveryTime?.maxTime} mins</td>

      <td>{chefName}</td>

      <td>chef-2116</td>

      <td>
        <span className="badge badge-outline capitalize">{paymentStatus}</span>
      </td>

      <td className="text-right">
        <button onClick={handlePayment} className="btn btn-xs btn-primary">Pay</button>
      </td>
    </tr>
  );
};

export default CustomerOrderDataRow;
