
import menCateg from "../assets/images/mens-categ.jpg"
import womenCateg from "../assets/images/womens-categ.jpg"
import babyCateg from "../assets/images/kids-categ.jpg"
import acessCateg from "../assets/images/acess-categ.jpg"


function Categories(){

    return(
        <div className="py-10">
            <h1 className="text-xl md:text-3xl font-semibold text-center mb-4">Categories</h1>
            <div className="grid mx-2 grid-cols-2 md:flex md:flex-row md:justify-evenly md:mx-10">
                <div className=" p-2 md:p-8 ">
                    <img className="border-none rounded-md" src={menCateg} />
                    <h2 className=" text-center mt-2 text-sm font-bold md:text-lg  md:font-semibold">Men</h2>
                </div>
                <div className="grid p-2 md:p-8">
                    <img className="border-none rounded-md" src={womenCateg} />
                    <h2 className="text-center mt-2 text-sm font-bold md:text-lg  md:font-semibold">Women</h2>
                </div>
                <div className="p-2 md:p-8">
                    <img className="border-none rounded-md" src={babyCateg} />
                    <h2 className="text-center mt-2 text-sm font-bold md:text-lg  md:font-semibold">Kids</h2>
                </div>
                <div className="p-2 md:hidden">
                    <img className="border-none rounded-md" src={acessCateg} />
                    <h2 className="text-center mt-2 text-sm font-bold md:text-lg  md:font-semibold">Accessories</h2>
                </div>
            </div>

        </div>

    )
}


export default Categories