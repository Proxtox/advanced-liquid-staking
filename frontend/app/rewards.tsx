"use client";

export default function RewardsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">Staking Rewards</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Claim and view your staking rewards.</p>
        <button className="w-full bg-blue-600 text-white py-3 rounded-2xl">Claim Rewards</button>
      </div>
    </div>
  );
}