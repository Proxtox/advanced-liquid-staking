"use client";

import { useState } from 'react';

export default function LiquidStaking() {
  const [amount, setAmount] = useState('');

  const handleStake = () => {
    alert(`Staking ${amount} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Advanced Liquid Staking</h1>

      <div className="space-y-4">
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Amount to Stake" />
        <button onClick={handleStake} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Stake & Receive LST
        </button>
      </div>
    </div>
  );
}