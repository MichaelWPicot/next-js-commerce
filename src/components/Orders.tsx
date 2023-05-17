import { signIn, useSession, signOut } from 'next-auth/react';
// import { getOrdersByUserId } from '../pages/api/firestoreQueries';
import OrdersQuery from '@/pages/api/firestoreQueries';
import { useState, useEffect } from 'react';
export default function Orders() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<any[]>([]);

  const userEmail = session?.user?.email;
 
  const fetchOrders = async () => {
    // if (userEmail) {
    //   try {
    //     const userOrders = await getOrdersByUserId(userEmail);
    //     setOrders(userOrders);
    //     console.log("SetOrders")
    //   } catch (error) {
    //     console.error("Error fetching orders:", error);
    //   }
    // }
  }
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
    <OrdersQuery/>
    {orders.length > 0 ? (
      <div>
        <h2>Your Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.orderId}>
              {/* Display order details */}
              Order ID: {order.orderId}<br />
              Total Amount: {order.amount}<br />
              Order Status: {order.status}<br />
              Order Tracking Id: {order.trackingId}<br />
              Order Details: {order.products[0]}<br />
              {/* ...display other order details */}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>No orders found.</div>
    )}
  </div>
  );
};
