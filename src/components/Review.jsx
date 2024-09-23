

function Review(){

    const testimonials = [
        {
          id: 1,
          name: "John Doe",
          title: "Verified Customer",
          review:
            "Amazing shopping experience! The product quality is outstanding.",
          rating: 5,
          img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          id: 2,
          name: "Sarah Lee",
          title: "Verified Customer",
          review:
            "Customer service was top-notch, and I loved the discounts! Will definitely shop here again!",
          rating: 4,
          img: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          id: 3,
          name: "Michael Smith",
          title: "Verified Customer",
          review:
            "A seamless experience from start to finish. Great product range and competitive prices!",
          rating: 5,
          img: "https://randomuser.me/api/portraits/men/65.jpg"
        }
      ];
    
      return (
        <div className="bg-gray-100 p-10">
          <h2 className="text-center text-xl md:text-3xl font-semibold mb-8">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white shadow-md rounded-lg p-8 m-4 max-w-sm flex flex-col items-center text-center">
                <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-10 h-10 md:w-20 md:h-20 mb-4"/>
                <h3 className=" md:text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
                <p className="text-sm mb-4">{testimonial.review}</p>
                <div className="flex">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431 8.175 1.174-5.9 5.754 1.392 8.103L12 18.896l-7.335 3.856 1.392-8.103-5.9-5.754 8.175-1.174z" />
                      </svg>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Review