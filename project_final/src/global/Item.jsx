import React from 'react'

export default function Item({ name, category, price, stock, totalSales, image , id}) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-2">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 mr-4" />
        <div className="flex-grow">
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">Category: {category}</p>
        </div>
        <div className="flex space-x-8">
          <div>
            <p className="text-gray-400 text-sm">Price</p>
            <p className="text-white">${price}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Stock</p>
            <p className="text-white">{stock}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Total Sales</p>
            <p className="text-white">{totalSales}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white ml-4">
          Edit
        </button>
        <button className="text-gray-400 hover:text-white ml-4">
          Remove
        </button>
      </div>
    </div>
  );
}
