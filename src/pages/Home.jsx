import HeroSlider from "../components/HeroSlider";
import Card from '../components/Card';
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Status from "../components/Status";
import { motion } from "motion/react"

// icons
import { FaArrowRightToCity } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";


function Home() {

  const data = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [latest, setLatest] = useState([]);

  useEffect(() => {

    try {
      setLoading(true);
      const sliceData = data.slice(0, 6);
      setLatest(sliceData);
    }
    catch(error) {
      console.error(error.message);
    }
    finally {
      setLoading(false);
    }

  },[data])

  return (
     <>

    <title>Home | HomeNest</title>

     <>
       <HeroSlider></HeroSlider>

        {/* latest updates  */}
        <div className="w-10/12 mx-auto mt-[50px] py-[50px]">
          <h1 className="text-3xl font-bold py-5">Latest Updates</h1>
              {
                loading && <Spinner></Spinner>
              }
            
          {latest && latest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {latest.map((item, index) => (
                  <motion.div
                    className="flex"
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                  <Card propertyInfo={item} key={item._id} />
                  </motion.div>
                ))}
              </div>
          )}
        </div>



        {/* why choose  */}

          <section className="bg-base-200 mt-[100px] py-[100px] px-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-500 text-lg">
                We provide the best services in the market, ensuring our clients find the perfect property effortlessly.
              </p>
            </div>
            </motion.div>


             <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                  <div className="mb-4"><FaArrowRightToCity className="text-5xl text-amber-500"></FaArrowRightToCity></div>
                  <h3 className="text-xl font-semibold mb-2">Trusted Listings</h3>
                  <p className="text-gray-500 text-sm">All our properties are verified and listed with accurate details, giving you complete peace of mind.</p>
                </div> 

                <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                  <div className="mb-4"><FaArrowsRotate className="text-5xl text-amber-500"></FaArrowsRotate></div>
                  <h3 className="text-xl font-semibold mb-2">Quick & Easy</h3>
                  <p className="text-gray-500 text-sm">Find or list properties effortlessly with our intuitive and user-friendly platform.</p>
                </div> 

                <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                  <div className="mb-4"><FaUserCheck className="text-5xl text-amber-500"></FaUserCheck></div>
                  <h3 className="text-xl font-semibold mb-2">Verified Sellers</h3>
                  <p className="text-gray-500 text-sm">Every seller is verified to ensure a safe and trustworthy property experience.</p>
                </div>

                <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
                  <div className="mb-4"><FaUserClock className="text-5xl text-amber-500"></FaUserClock></div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-500 text-sm">Our team is always available to answer your questions and help you with your property needs.</p>
                </div>  
            </div>
            </motion.div>
          
          </section>

          {/* FAQ  */}
          <section className="bg-base-100 mt-[100px] py-[50px] sm:px-6">
            {/* Header */}
            <motion.div
              className="max-w-4xl mx-auto text-center mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500">
                Here are some common questions about using{" "}
                <span className="text-primary font-semibold pacifico-regular">HomeNest</span>.
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <div className="w-8/12 mx-auto">
              <div className="join join-vertical w-full mx-auto bg-base-100">
              {[
                {
                  q: "How do I post my property on HomeNest?",
                  a: 'Go to the “Add Properties” page (login required), fill in your property details, upload images, and click “Submit”. Your property will be live after approval.',
                },
                {
                  q: "Do I need to create an account to view property details?",
                  a: "You can browse all properties freely, but to view full details, save favorites, or post a property, you’ll need to sign up or log in.",
                },
                {
                  q: "How can I edit or delete a property I’ve posted?",
                  a: 'Visit the “My Properties” section. From there, you can update details or remove listings you’ve created.',
                },
                {
                  q: "Is HomeNest free to use?",
                  a: "Yes! Browsing and posting basic property listings on HomeNest are completely free. Premium visibility options may be added in the future.",
                },
                {
                  q: "How do I contact property owners?",
                  a: "Each property page includes the seller contact info. You can reach them directly via phone or email provided in their listing.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="collapse collapse-arrow join-item border border-base-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="radio"
                    name="faq-accordion"
                    defaultChecked={index === 0}
                  />
                  <div className="collapse-title text-lg font-semibold">
                    {item.q}
                  </div>
                  <div className="collapse-content text-sm text-gray-500">
                    {item.a}
                  </div>
                </motion.div>
              ))}
            </div>
      </div>
    </section>


    {/* service  */}
    <section className="bg-base-200 py-[50px] mt-[100px] px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Our Services</h2>
        <p className="text-gray-500 text-lg">
          We offer a complete range of real estate services to make your property journey smooth and stress-free.
        </p>
      </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="mb-4"><FaCity className="text-5xl text-amber-500"></FaCity></div>
            <h3 className="text-xl font-semibold mb-2">
              Property Buying
            </h3>
            <p className="text-gray-500 text-sm">
              Find your dream home with verified listings and trusted sellers to ensure a secure purchase experience.
            </p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="mb-4"><FaCartArrowDown className="text-5xl text-amber-500"></FaCartArrowDown></div>
            <h3 className="text-xl font-semibold mb-2">
              Property Selling
            </h3>
            <p className="text-gray-500 text-sm">
              Easily list your property and reach thousands of potential buyers instantly with our simple tools.
            </p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="mb-4"><FaBuildingCircleCheck className="text-5xl text-amber-500"></FaBuildingCircleCheck></div>
            <h3 className="text-xl font-semibold mb-2">
              Property Rentals
            </h3>
            <p className="text-gray-500 text-sm">
              Explore affordable rental options and list your property for rent with just a few clicks.
            </p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="mb-4"><FaUserGroup className="text-5xl text-amber-500"></FaUserGroup></div>
            <h3 className="text-xl font-semibold mb-2">
              Consultation Service
            </h3>
            <p className="text-gray-500 text-sm">
              Get expert real estate advice to make informed decisions whether you're buying, selling, or investing.
            </p>
          </div>

      </div>
      </motion.div>
    </section>


          {/* stats  */}
          <div className="mt-[50px] py-[50px]">
            <Status></Status>
          </div>


          {/* Testimonials Section */}
          <section className="bg-base-100 py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
                <p className="text-center text-gray-500 text-lg mb-12">
                  Real stories from real people who found their dream homes with HomeNest
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Homeowner",
                    image: "https://i.pravatar.cc/150?img=1",
                    rating: 5,
                    text: "HomeNest made finding my dream home so easy! The platform is user-friendly and all listings were verified. Highly recommend!"
                  },
                  {
                    name: "Michael Chen",
                    role: "Property Investor",
                    image: "https://i.pravatar.cc/150?img=13",
                    rating: 5,
                    text: "As an investor, I've used many platforms, but HomeNest stands out. Great properties, transparent process, and excellent support."
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "First-time Buyer",
                    image: "https://i.pravatar.cc/150?img=5",
                    rating: 5,
                    text: "Being a first-time buyer was scary, but HomeNest's team guided me through every step. Found my perfect apartment in just 2 weeks!"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-amber-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      "{testimonial.text}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* Featured Categories Section */}
          <section className="bg-base-200 py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-4">Browse by Category</h2>
                <p className="text-center text-gray-500 text-lg mb-12">
                  Find the perfect property type that suits your needs
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { name: "Apartments", icon: "🏢", count: "2,450+" },
                  { name: "Houses", icon: "🏠", count: "1,890+" },
                  { name: "Villas", icon: "🏡", count: "780+" },
                  { name: "Offices", icon: "🏢", count: "560+" },
                  { name: "Land", icon: "🌳", count: "1,200+" },
                  { name: "Commercial", icon: "🏪", count: "920+" }
                ].map((category, index) => (
                  <motion.a
                    href="/all-properties"
                    key={index}
                    className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>


          {/* How It Works Section */}
          <section className="bg-base-100 py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
                <p className="text-center text-gray-500 text-lg mb-12">
                  Get started in just 3 simple steps
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connection Lines for Desktop */}
                <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-amber-200 dark:bg-amber-800 -z-10"></div>

                {[
                  {
                    step: "01",
                    title: "Create Account",
                    description: "Sign up for free and complete your profile in minutes",
                    icon: "👤"
                  },
                  {
                    step: "02",
                    title: "Search Properties",
                    description: "Browse thousands of verified listings or post your own",
                    icon: "🔍"
                  },
                  {
                    step: "03",
                    title: "Connect & Close",
                    description: "Contact sellers directly and finalize your dream deal",
                    icon: "🤝"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                      {item.step}
                    </div>
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>


          {/* CTA Section */}
          <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Home?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of happy homeowners who found their dream property with HomeNest. 
                Start your journey today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/all-properties"
                  className="btn bg-white text-amber-600 hover:bg-gray-100 border-none px-8 py-3 text-lg font-semibold"
                >
                  Explore Properties
                </a>
                <a
                  href="/registration"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg font-semibold"
                >
                  Get Started Free
                </a>
              </div>
            </motion.div>
          </section>


          {/* Newsletter Section */}
          <section className="bg-base-200 py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">📧</div>
                  <h2 className="text-3xl font-bold mb-3">Stay Updated with HomeNest</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Subscribe to our newsletter and get the latest property listings, market insights, 
                    and exclusive deals delivered to your inbox.
                  </p>
                </div>

                <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="input input-bordered flex-1 px-6 py-3 text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="btn bg-amber-500 hover:bg-amber-600 text-white border-none px-8 py-3 text-lg font-semibold"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-base-300">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-500">10K+</p>
                    <p className="text-sm text-gray-500">Subscribers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-500">Weekly</p>
                    <p className="text-sm text-gray-500">Updates</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-500">Exclusive</p>
                    <p className="text-sm text-gray-500">Deals</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
     </>
     </>
  );
}

export default Home;