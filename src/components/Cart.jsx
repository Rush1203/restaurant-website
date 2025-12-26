import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  placeOrder,
  clearOrderHistory,
} from "../features/cartSlice";
import toast from "react-hot-toast";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const previousOrders = useSelector(state => state.cart.previousOrders);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {/* CURRENT CART */}
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between bg-white p-4 mb-3 rounded-xl shadow-sm"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-500">
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="bg-gray-200 px-3 rounded-full"
                >
                  −
                </button>

                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="bg-gray-200 px-3 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <p className="font-bold text-xl mt-4">Total: ₹{total}</p>

          <button
            onClick={() => {
              dispatch(placeOrder());
              toast.success("🎉 Order Confirmed!");
            }}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
          >
            Place Order
          </button>
        </>
      )}

      {/* PREVIOUS ORDERS */}
      {previousOrders.length > 0 && (
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">📜 Previous Orders</h3>

            <button
              onClick={() => {
                dispatch(clearOrderHistory());
                toast.success("🧹 Order history cleared");
              }}
              className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
            >
              Clear History
            </button>
          </div>

          {previousOrders.map(order => (
            <div
              key={order.id}
              className="bg-white p-4 mb-4 rounded-xl shadow-sm"
            >
              <p className="text-sm text-gray-600 mb-3">
                Order Date: {order.date}
              </p>

              {order.items.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm mb-1"
                >
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}

              {/*  TOTAL FOR THIS ORDER */}
              <div className="mt-3 pt-3 border-t flex justify-between font-semibold">
                <span>Total:</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
