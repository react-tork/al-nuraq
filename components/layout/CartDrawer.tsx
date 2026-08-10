import Image from "next/image";
import Link from "next/link";

/* Cart drawer items (static demo data from the original template) */
const cartItems = [
  {
    img: "/images/product/1.png",
    name: "Wheel Bearing Retainer",
    price: "$65.00",
  },
  {
    img: "/images/product/2.png",
    name: "3 Rooms Manhattan",
    price: "$85.00",
  },
  {
    img: "/images/product/3.png",
    name: "OE Replica Wheels",
    price: "$92.00",
  },
  {
    img: "/images/product/4.png",
    name: "Shock Mount Insulator",
    price: "$68.00",
  },
];

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`drawer-container cart-container ${open ? "active" : ""}`}>
      <div
        className="drawer-overlay fixed top-0 left-0 w-full h-full bg-black -z-1 close-drawer opacity-0 transition-all duration-300 invisible cursor-zoom-out"
        onClick={onClose}
      ></div>
      <div className="drawer cart fixed top-0 ltr:-right-[300px] rtl:-left-[300px] ltr:xs:-right-[400px] rtl:xs:-left-[400px] pl-30px pr-10px py-5 w-300px xs:w-100 h-full transition-all duration-500 shadow-dropdown-secodary bg-whiteColor z-high bg-white">
        <div className="h-full">
          {/* cart wrapper */}
          <div className="h-full overflow-y-auto pr-5">
            {/* cart top */}
            <div className="flex justify-between items-center border-b border-border-primary pt-3px pb-3 mb-25px">
              <div>
                <span className="text-sm md:text-base font-bold">Cart</span>
              </div>
              <div>
                <button
                  className="close-drawer text-black text-3xl px-15px py-2"
                  onClick={onClose}
                >
                  ×
                </button>
              </div>
            </div>

            {/* cart items */}
            <div className="max-h-[calc(100%-(360px))] cart-items overflow-y-auto">
              <ul>
                {cartItems.map((item, idx) => (
                  <li
                    key={item.name}
                    className={`${
                      idx === 0 ? "" : "border-t border-border-color-1 "
                    } pl-10px pt-5 rtl:pr-10px mb-5 flex gap-15px`}
                  >
                    <div className="relative">
                      <Link href="/product-details">
                        <Image
                          src={item.img}
                          alt=""
                          width={80}
                          height={80}
                          className="w-20 inline-block"
                        />
                      </Link>
                      <button
                        className="w-5 h-5 shadow-box-shadow-3 text-center text-10px bg-white hover:bg-secondary-color hover:text-white rounded-full absolute top-0 ltr:left-0 rtl:right-0 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <i className="icon-cancel leading-5"></i>
                      </button>
                    </div>
                    <div>
                      <h6 className="text-sm md:text-15px lg:text-base mb-5px">
                        <Link
                          href="/product-details"
                          className="leading-23px text-heading-color hover:text-secondary-color font-medium"
                        >
                          {item.name}
                        </Link>
                      </h6>
                      <div className="text-sm lg:text-base">
                        <span className="leading-22px">1 x {item.price}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total price */}
            <div className="py-5 mt-25px border-y border-border-color-1">
              <h6 className="lg:text-lg text-heading-color font-bold flex justify-between items-center mb-0">
                <span>Subtotal: </span>
                <span className="text-secondary-color">$310.00</span>
              </h6>
            </div>

            {/* action area */}
            <div className="pt-25px pb-15px flex justify-between">
              <h5 className="uppercase text-sm text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color hover:border-heading-color">
                <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black z-1 group-hover:w-0 transition-all duration-300"></span>
                <Link
                  href="/cart"
                  className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                >
                  view cart
                </Link>
              </h5>
              <h5 className="uppercase text-sm text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-black hover:border-secondary-color">
                <span className="inline-block absolute top-0 left-0 w-full h-full bg-black group-hover:bg-secondary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                <Link
                  href="/checkout"
                  className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-secondary-color leading-23px"
                >
                  checkout
                </Link>
              </h5>
            </div>

            <div className="text-sm">
              <p className="leading-15px mb-0">
                Free Shipping on All Orders Over $100!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
