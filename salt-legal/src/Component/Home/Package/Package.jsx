
import React from 'react';
import './Package.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue, useRecoilState } from 'recoil';
import { jwtTokenState, userIdState } from '../../auth/atoms';



function Package() {


  const navigate = useNavigate();
  const jwtToken = useRecoilValue(jwtTokenState);
  const userId = useRecoilValue(userIdState)
  const [cardDetails, setCardDetails] = useState([])
  const [book, setbook] = useState({
    name: "The Road to be taken",
    author: "C.S Tylor",
    img: "https://th.bing.com/th?id=OIP.O8X2cM_d8XTou4d3_YlbgAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    price: 1500,
  });
  const initPayment = (data,title,cardId) => {
    const options = {
      key: "rzp_test_UH0rkDW0Rkm44R",
      amount: data.amount,
      currency: data.currency,
      name: title,
      description: "Test Transaction",
      img: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          console.log("dataishere",jwtToken,userId);
          const verifyUrl = `https://the-salt-legal-backend.onrender.com/verify/${userId}/${cardId}`;
          const token = jwtToken
      
          const headers = {
              'Authorization': `Bearer ${token}`
          };
      
          const { data } = await axios.post(verifyUrl, response, { headers });
          console.log("verifyData", data);
          if (data.status === true) navigate('/category-pay');
      } catch (error) {
          console.log(error);
      }
      
      },
      theme: {
        color: "#3399cc"
      },
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  const handlePayment = async (title,id) => {
    try {
      if (jwtToken) {
        console.log(jwtToken);
        console.log("order payment")
        const orderUrl = 'https://the-salt-legal-backend.onrender.com/orders';
        const { data } = await axios.post(orderUrl, {
          cardId : id
        });
        console.log("orderData", data);
        initPayment(data.data ,title,id);
      }
      else {
        navigate('/login');

      }
    } catch (error) {
      console.log(error)
    }
  }

  const getCardDetails = async () => {
    try {
      
      const response = await fetch('https://the-salt-legal-backend.onrender.com/getPaymentCard');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log("data", data);
      setCardDetails(data.data);
      console.log("carddetails", cardDetails)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getCardDetails();
  }, []);





  
  return (
    <div className='pakage-container'>
      <h2>Choose a <span>Right plan</span> for you</h2>
      <p>Our template packages are tailored to your needs, with flexible pricing for a wide range of pre-written templates that streamline your business communication.</p>

      <div className="package">
          {cardDetails.map((detail, index) => (
        <div className="package-card">
          <h2>{detail.title}</h2>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div>
                
                <h3>Price ₹{detail.price}/ month</h3>
              </div>
              <button onClick={() => handlePayment(detail.title, detail._id)}>SELECT</button>
            </div>
          ))}
        {/* <div className="package-card">
          <h2>10 Categories</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>

          <div>
                
                <h3>Price ₹{detail.price}/ month</h3>
              </div>
              <button onClick={() => handlePayment(detail.title, detail._id)}>SELECT</button>

        </div> */}
        {/* <div className="package-card">
          <h2>Full Access</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>Ideal for larger teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>Ideal for larger teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>Ideal for larger teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'green', marginTop: '5px' }} /><p>Ideal for larger teams </p>

          </div>
          <div>
                
                <h3>Price ₹{detail.price}/ month</h3>
              </div>
              <button onClick={() => handlePayment(detail.title, detail._id)}>SELECT</button>
        </div> */}
      </div>
    </div>
  );
}

export default Package;