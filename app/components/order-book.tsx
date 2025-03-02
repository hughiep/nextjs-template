'use client'

import { useState, useEffect } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'

interface Order {
  price: number
  quantity: number
  total: number
}

interface OrderbookData {
  bids: Order[]
  asks: Order[]
}

export default function Orderbook({ symbol = 'BTCUSDT' }) {
  const [orderbook, setOrderbook] = useState<OrderbookData>({
    bids: [],
    asks: [],
  })

  useEffect(() => {
    // Simulating real-time orderbook updates
    const interval = setInterval(() => {
      const generateOrders = (
        basePrice: number,
        count: number,
        increment: number,
      ): Order[] => {
        let total = 0
        return Array.from({ length: count }, (_, i) => {
          const price = basePrice + i * increment
          const quantity = Math.floor(Math.random() * 10) + 1
          total += quantity
          return { price, quantity, total }
        })
      }

      const midPrice = 30000 // Example mid-price for BTC/USDT
      setOrderbook({
        bids: generateOrders(midPrice - 10, 10, -1).reverse(),
        asks: generateOrders(midPrice + 10, 10, 1),
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const renderOrders = (orders: Order[], isBid: boolean) => (
    <div className={`flex-1 ${isBid ? 'text-green-600' : 'text-red-600'}`}>
      {orders.map((order, index) => (
        <div key={index} className="flex justify-between text-sm">
          <span>{order.price.toFixed(2)}</span>
          <span>{order.quantity.toFixed(4)}</span>
          <span>{order.total.toFixed(4)}</span>
        </div>
      ))}
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orderbook ({symbol})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex justify-between text-xs font-bold">
          <span>Price</span>
          <span>Amount</span>
          <span>Total</span>
        </div>
        {renderOrders(orderbook.asks.slice().reverse(), false)}
        <div className="my-2 text-center font-bold">
          Spread:{' '}
          {(
            (orderbook.asks[0]?.price || 0) - (orderbook.bids[0]?.price || 0)
          ).toFixed(2)}
        </div>
        {renderOrders(orderbook.bids, true)}
      </CardContent>
    </Card>
  )
}
