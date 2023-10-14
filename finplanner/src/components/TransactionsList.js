import React, { useState } from 'react';
import '../styles/TransactionsList.css';
import HomeBar from './HomeBar';
import { useNavigate } from 'react-router-dom';

function TransactionsList() {
    const [transactions, setTransactions] = useState([
        // Sample data for demo purposes, replace with actual data from a backend or app state.
        { id: 1, name: 'Groceries', amount: -20 },
        { id: 2, name: 'Salary', amount: 500 },
        // ... more transactions
    ]);

    const navigate = useNavigate()

    function addTrans() {
        navigate('add-transaction');
    }

    const handleRemoveTransaction = (id) => {
        const newTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(newTransactions);
    };

    return (
        <div className="transactions-list-container">
            <HomeBar />
            <h2>Your Transactions</h2>
            <div className="transaction-actions">
                <button className="add-transaction-btn" onClick={addTrans}>Add New Transaction</button>
            </div>
            <ul className="transactions-list">
                {transactions.map(transaction => (
                    <li key={transaction.id} className="transaction-item">
                        <span className="transaction-name">{transaction.name}</span>
                        <span className={`transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                            {transaction.amount}
                        </span>
                        <button className="remove-btn" onClick={() => handleRemoveTransaction(transaction.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionsList;
