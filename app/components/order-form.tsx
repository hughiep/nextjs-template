'use client'

import { useActionState, useState } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { Label } from '@/shared/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group'

import { placeOrder } from './actions'

export default function OrderForm() {
  const [orderType, setOrderType] = useState('limit')
  const [side, setSide] = useState('buy')
  const [symbol, setSymbol] = useState('BTCUSDT')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [stopPrice, setStopPrice] = useState('')
  const [trailingDistance, setTrailingDistance] = useState('')

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const order = {
  //     type: orderType,
  //     side,
  //     symbol,
  //     quantity: Number.parseFloat(quantity),
  //     price: Number.parseFloat(price),
  //     stopPrice: stopPrice ? Number.parseFloat(stopPrice) : undefined,
  //     trailingDistance: trailingDistance
  //       ? Number.parseFloat(trailingDistance)
  //       : undefined,
  //     timestamp: Date.now(),
  //     id: Math.random().toString(36).substr(2, 9),
  //     userId: 'user123', // In a real app, this would come from authentication
  //     status: 'open',
  //   }
  //   console.log('Order submitted:', order)
  //   // Reset form
  //   setQuantity('')
  //   setPrice('')
  //   setStopPrice('')
  //   setTrailingDistance('')
  // }

  const [state, formAction, isPending] = useActionState(placeOrder, null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Place Order</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Select name="symbol" value={symbol} onValueChange={setSymbol}>
            <SelectTrigger>
              <SelectValue placeholder="Select trading pair" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BTCUSDT">BTC/USDT</SelectItem>
              <SelectItem value="ETHUSDT">ETH/USDT</SelectItem>
              <SelectItem value="BNBUSDT">BNB/USDT</SelectItem>
            </SelectContent>
          </Select>

          <Select name="type" value={orderType} onValueChange={setOrderType}>
            <SelectTrigger>
              <SelectValue placeholder="Select order type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MARKET">Market</SelectItem>
              <SelectItem value="LIMIT">Limit</SelectItem>
              <SelectItem value="stopLoss">Stop Loss</SelectItem>
              <SelectItem value="takeProfit">Take Profit</SelectItem>
              <SelectItem value="trailingStop">Trailing Stop</SelectItem>
            </SelectContent>
          </Select>

          <RadioGroup
            name="side"
            value={side}
            onValueChange={setSide}
            className="flex"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="BUY" id="buy" />
              <Label htmlFor="buy">Buy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="SELL" id="sell" />
              <Label htmlFor="sell">Sell</Label>
            </div>
          </RadioGroup>

          <Input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          {['limit', 'stopLoss', 'takeProfit'].includes(orderType) && (
            <Input
              name="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          )}

          {['stopLoss', 'takeProfit'].includes(orderType) && (
            <Input
              name="stopPrice"
              type="number"
              placeholder="Stop Price"
              value={stopPrice}
              onChange={(e) => setStopPrice(e.target.value)}
              required
            />
          )}

          {orderType === 'trailingStop' && (
            <Input
              name="trailingDistance"
              type="number"
              placeholder="Trailing Distance"
              value={trailingDistance}
              onChange={(e) => setTrailingDistance(e.target.value)}
              required
            />
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            Place {side.charAt(0).toUpperCase() + side.slice(1)} Order
          </Button>
        </form>
        <p>{`${state?.success}`}</p>
      </CardContent>
    </Card>
  )
}
