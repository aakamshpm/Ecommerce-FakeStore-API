import { useSelector } from "react-redux";
import { useState } from "react";

const Orders = () => {
  const orders = useSelector((state) => state.order);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrder = (id) => {
    setExpandedOrderId((prev) => (prev === id ? null : id));
  };

  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.order_date) - new Date(a.order_date)
  );

  return (
    <div className="p-6 w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      {sortedOrders.length === 0 && (
        <p className="text-gray-600">No orders placed yet.</p>
      )}

      {sortedOrders.map((order) => (
        <div
          key={order.order_id}
          className="border border-black rounded mb-4 shadow-sm "
        >
          <div
            className="cursor-pointer flex justify-between items-center p-4 hover:bg-gray-100"
            onClick={() => toggleOrder(order.order_id)}
          >
            <div>
              <p className="font-semibold">Order ID: {order.order_id}</p>
              <p className="text-sm text-gray-700">
                {new Date(order.order_date).toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p>Total: ${order.totalPrice}</p>
              <p>{order.totalProducts} item(s)</p>
            </div>
          </div>

          {/* Product List */}
          {expandedOrderId === order.order_id && (
            <div className=" border-t p-4 space-y-3">
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.title}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {product.count}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>
                      ${product.price} x {product.count}
                    </p>
                    <p className="font-semibold">
                      ${product.price * product.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Orders;
