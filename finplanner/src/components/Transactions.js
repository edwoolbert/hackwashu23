import React from 'react';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import '../styles/Transactions.css';
import '../chartConfig.js'
import Homebar from './HomeBar';

function Transactions() {
    const transactions = [
        { id: 1, date: "2023-01-01", description: "Start", amount: 0 },
        { id: 2, date: "2023-01-02", description: "Groceries", amount: -50 },
        { id: 3, date: "2023-01-05", description: "Salary", amount: 1000 },
        //... add more transaction data as required
    ];

    let balance = 0;
    const dataPoints = transactions.map(trans => {
        balance += trans.amount;
        return balance;
    });

    const segmentColors = transactions.map(trans => trans.amount >= 0 ? 'green' : 'red');

    const data = {
        labels: transactions.map(trans => trans.date),
        datasets: [{
            label: 'Balance Over Time',
            data: dataPoints,
            fill: false,
            borderColor: segmentColors,
            tension: 0.1,
            pointBackgroundColor: segmentColors,
            pointBorderColor: segmentColors,
            segment: {
                borderColor: ctx => segmentColors[ctx.p0DataIndex],
                backgroundColor: ctx => segmentColors[ctx.p0DataIndex]
            }
        }]
    };

    const options = {
        scales: {
            x: {
                type: 'category',
            },
            y: {
                type: 'linear',
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${transactions[context.dataIndex].description}: $${transactions[context.dataIndex].amount}`;
                    }
                }
            }
        }
    };

    const navigate = useNavigate()

    return (
        <div className="transactions-container">
            <Homebar />
            <h2>Balance Evolution</h2>
            <Line data={data} options={options} />
            <button onClick={() => navigate('/add-transaction')}>Add Transaction</button>
        </div>
    );
}

export default Transactions;
