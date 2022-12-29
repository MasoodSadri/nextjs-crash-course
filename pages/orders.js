import { useEffect, useState } from 'react'

function OrdersPage(props) {
  const [orders, setOrders] = useState(props.orders)

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://localhost:5000/orders')

      const responseData = await response.json()

      setOrders(responseData)
    }

    fetchOrders()
  }, [])

  return (
    <div>
      {orders.map((item) => (
        <div key={item.id}>
          {item.username} - {item.amount}
        </div>
      ))}
    </div>
  )
}

export default OrdersPage

export async function getStaticProps() {
  const response = await fetch('http://localhost:5000/orders')

  const responseData = await response.json()

  return {
    props: { orders: responseData },
  }
}
