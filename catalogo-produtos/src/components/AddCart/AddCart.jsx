/* eslint-disable */
import React from 'react';
import './AddCart.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

export default function Addcart({ onClick }) {
  return (
    <button type="button" className="addcart" onClick={onClick}>
      <BsFillCartPlusFill/>
    </button>
  );
}