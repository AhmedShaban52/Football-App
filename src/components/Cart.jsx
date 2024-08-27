import { useSelector, useDispatch } from 'react-redux';
import { clear, decrementQuantity, incrementQuantity } from './Slice/CartSlice';
import { Link } from 'react-router-dom';
import { PiShoppingCart } from "react-icons/pi";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += (product.offer) * product.quantity;
    return acc;
  }, 0);

  const totalPriceAfterShipping = cart.reduce((acc, product) => {
    acc += (product.offer * product.quantity);
    return acc;
  }, 0) + (15 );
  

 
  
  return (
    <div className='bg-white text-white'>
      <div className="about-image banner-bg relative py-[150px] ">
        <div className="container px-4 mx-auto text-center z-[1] relative">
          <ul className="flex text-center justify-center gap-5">
            <li className="text-[#e6a3a1] font-normal ">HOME</li>
            <li className="about-before relative font-normal ">CART</li>
          </ul>
          <h1 className="text-7xl  font-semibold pt-5">CART DETAILS</h1>
        </div>
      </div>

      <div className="py-[120px] text-secondColor">
      <div className="container mx-auto px-2">
      {cart.length > 0 ? (
        <table className='w-full text-center '>
          <thead>
            <tr className='text-secondColor bg-[#f5f5f5] '>
              <th className='  py-4 px-2'>Image</th>
              <th className=' '>Name</th>
              <th className=' '>Price</th>
              <th className=' '>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id} className='border-[1px] '>
                <td className='text-secondColor text-[12px] py-5 '>
                  <div className="flex justify-center items-center">
                    <img src={product.img} className="w-[100px] h-[100px]" alt="product" />
                  </div>
                </td>
                <td className='text-secondColor font-family text-[14px] font-bold'>{product.title}</td>
                <td className='text-secondColor font-medium '>$ {product.offer}</td>
                <td >
                  <div className=' flex justify-center items-center     '>
                    <button onClick={() => dispatch(decrementQuantity(product))} className='text-white text-xl leading-5 bg-firstColor rounded-[50%] w-[25px] h-[25px] flex justify-center '  >-</button>
                    <span className='text-secondColor mx-3'>{product.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(product))} className='text-white text-xl bg-firstColor rounded-[50%] w-[25px] h-[25px] flex justify-center items-center'>+</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center mt-8 flex justify-center flex-col">
          <p className='mb-5  font-bold uppercase'> Your Cart is empty</p>
          <Link to='/shop' className='text-white bg-firstColor w-fit mx-auto  py-1 px-5  flex justify-center items-center  gap-3 cursor-pointer '> Go Shopping <PiShoppingCart /> </Link>
        </div>
      )}
    
     {cart.length > 0 && (
      <div className='pt-[120px] grid grid-cols-1 gap-10'>
      <div className='flex items-center '>
        <h1 className='mr-4 font-bold'>Coupon Code:</h1>
        <input placeholder='Apply Your Coupon ' type='nuber' className='border-[1px] border-[#e7e7e7] px-6 pl-4 py-2 focus:outline-none' />
        <button className='py-2 px-5    font-bold tracking-[1px]  flex  items-center  gap-3 text-white  bg-firstColor'> Apply </button>
      </div>
      <div className='border-[1px] border-[#ddd] p-5'>
        <h1 className='font-bold text-2xl font-family'>Cart Totals</h1>
        <div className='pt-8'>
          <h1 className='flex justify-between text-lg font-medium text-[#777777] border-[1px] border-[#ddd] p-2'>SubTotal <span className=' text-secondColor font-family font-bold'>${totalPrice.toFixed(2)}</span> </h1>
          <span className='flex justify-between text-lg font-medium text-[#777777] border-[1px] border-[#ddd] p-2'>Shipping <span className=' text-secondColor font-family font-bold'>$15</span>  </span>
          <h1 className='flex justify-between text-lg font-medium text-[#777777] border-[1px] border-[#ddd] p-2'>Total Price <span className=' text-secondColor font-family font-bold'>${totalPriceAfterShipping.toFixed(2)}</span> </h1>
          <button onClick={() => dispatch(clear())} className='py-1 px-5  font-bold tracking-[1px] mt-4  flex items-center gap-3 text-white bg-firstColor'>Remove All</button>
        </div>
      </div>
    </div>
     )}
    </div>
    
      </div>
    </div>
  );
};

export default Cart;
