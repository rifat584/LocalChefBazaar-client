import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PaymentSuccess = () => {
  // console.log();
   const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);
  // const res = axios.get(`${import.meta.env.VITE_API_BASE_URL}/session-status`)
  console.log(status, customerEmail);



  return (
    <div>
      Payment Succesfull!
    </div>
  );
};

export default PaymentSuccess;