import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

const CardInvoice = (props) => {
    const {id, name,date, notes, payment_type,total_amount} = props
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-black">Invoice ID: {id} </h5>
    </a>
    <p className="mb-3  text-gray-700">Name: {name}</p>
    <Button onClick={handleOpenModal}>Detail</Button>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
                <p><strong>ID:</strong> {id}</p>
                <p><strong>Customer:</strong> {name}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Notes:</strong> {notes}</p>
                <p><strong>Payment Type:</strong> {payment_type}</p>
                <p><strong>Total Amount:</strong> {total_amount}</p>
        <Button onClick={handleCloseModal} className="mt-4">Close</Button>
      </Modal>
</div>

  );
};

export default CardInvoice;
