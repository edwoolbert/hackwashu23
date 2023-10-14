import React, { useState } from 'react';
import '../styles/AddTransaction.css';
import { useNavigate } from 'react-router-dom';
import Homebar from './HomeBar';


function AddTransaction() {

    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add the logic here to save the transaction data
        console.log({ date, description, amount });
        navigate('/transactions')
    }

    return (
        <div className="add-transaction-container">
            <Homebar />
            <h2>Add New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter transaction description" />
                </div>
                <div className="input-group">
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
