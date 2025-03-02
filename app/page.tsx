import Orderbook from './components/order-book'
import OrderForm from './components/order-form'

export default function Page() {
  return (
    <div className="flex justify-end space-x-4 px-16">
      <div className="flex-1">
        <OrderForm />
      </div>
      <div className="flex-1">
        <Orderbook />
      </div>
    </div>
  )
}
