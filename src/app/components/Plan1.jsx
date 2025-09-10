import Link from 'next/link'
import React from 'react'

const Plan1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20 mt-10">
      
      <div className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-gray-700">
        <h1 className="text-2xl font-bold">FREE</h1>
        <img
          src="https://algorooms.com/images/by3.svg"
          alt="Free Plan"
          className="w-20 h-20 my-4"
        />
        <p className="text-2xl font-bold">₹0/day</p>
        <ul className="mt-6 space-y-2 text-sm text-left w-full">
          <li>.50 Backtest Credit Points</li>
          <li>.5 Strategy Creation</li>
          <li>. No Basic+HNI & Retail Strategy Template Access</li>
          <li>. Reporting Console</li>
          <li>. No Strategy Deployment (Live & Forward)</li>
          <li>. No Portfolio Backtesting</li>
        </ul>
        <Link
          href="/Login"
          className="mt-6 w-full bg-red-600 py-2 rounded-xl text-center font-semibold hover:bg-red-700 transition"
        >
          GET STARTED
        </Link>
      </div>

      
      <div className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-gray-700">
        <h1 className="text-2xl font-bold">Unlimited Plan</h1>
        <img
          src="https://algorooms.com/images/by2.svg"
          alt="Unlimited Plan"
          className="w-20 h-20 my-4"
        />
        <p className="text-2xl font-bold">₹69/day</p>
        <ul className="mt-6 space-y-2 text-sm text-left w-full">
          <li>.1500 Backtest Credit Points</li>
          <li>.50 Strategy Creation</li>
          <li>. Basic+HNI & Retail Strategy Template Access</li>
          <li>. Reporting Console</li>
          <li>. 20 Strategy Deployment (Live & Forward)</li>
          <li>. 10 Portfolio Backtesting</li>
        </ul>
        <Link
          href="/Login"
          className="mt-6 w-full bg-red-600 py-2 rounded-xl text-center font-semibold hover:bg-red-700 transition"
        >
          GET STARTED
        </Link>
      </div>

      
      <div className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-gray-700">
        <h1 className="text-2xl font-bold">Limited Plan</h1>
        <img
          src="https://algorooms.com/images/b1y.svg"
          alt="Limited Plan"
          className="w-20 h-20 my-4"
        />
        <p className="text-2xl font-bold">₹41/day</p>
        <ul className="mt-6 space-y-2 text-sm text-left w-full">
          <li>.500 Backtest Credit Points</li>
          <li>.20 Strategy Creation</li>
          <li>. Basic+HNI & Retail Strategy Template Access</li>
          <li>. Reporting Console</li>
          <li>. 15 Strategy Deployment (Live & Forward)</li>
          <li>. 8 Portfolio Backtesting</li>
        </ul>
        <Link
          href="/Login"
          className="mt-6 w-full bg-red-600 py-2 rounded-xl text-center font-semibold hover:bg-red-700 transition"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  )
}

export default Plan1
