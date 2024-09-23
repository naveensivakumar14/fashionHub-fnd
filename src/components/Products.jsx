
import proBanner from "../assets/images/product-img.jpg"

function  Products(){


    return(
        
        <div className="flex justify-between items-center flex-wrap p-14">
            <div className="md:w-1/2 p-4">
                <h1 className="text-2xl text-red-500 font-semibold md:font-bold mb-4">Grab Yours...</h1>
                <p className="text-sm md:text-lg md:leading-relaxed">"Discover the latest trends and high-quality products at unbeatable prices. Our customer-focused service ensures a seamless shopping experience from start to finish. Shop with confidence and elevate your style today!"</p>
                <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Purchase</button>
            </div>
            <div className="w-[600px] md:p-6">
                <img className="w-full border-none rounded-md" src={proBanner} alt="product" />
            </div>
        </div>
        
    )
}

export default Products