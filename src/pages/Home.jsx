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
     </>
     </>
  );
}

export default Home;