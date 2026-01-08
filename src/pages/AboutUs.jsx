import { motion } from "motion/react";
import { FaHome, FaHandshake, FaAward, FaUsers, FaHeart, FaShieldAlt } from "react-icons/fa";

function AboutUs() {
  return (
    <>
      <title>About Us | HomeNest</title>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-900 py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6 pacifico-regular text-amber-600 dark:text-amber-400">
            <span>About</span> HomeNest
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Your trusted partner in finding the perfect home. We connect buyers, sellers, and renters 
            with verified properties and trusted professionals across the country.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <p className="text-lg leading-relaxed">
                  Founded with a vision to revolutionize the real estate industry, HomeNest was born 
                  from the idea that finding a home should be simple, transparent, and trustworthy.
                </p>
                <p className="text-lg leading-relaxed">
                  We understand that a home is more than just four walls—it's where memories are made, 
                  families grow, and dreams come true. That's why we've built a platform that puts 
                  people first, ensuring every transaction is secure and every listing is verified.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, HomeNest serves thousands of users nationwide, helping them navigate their 
                  real estate journey with confidence and ease.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-base-100 rounded-xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <FaHome className="text-4xl text-amber-500" />
                    <div>
                      <h3 className="text-2xl font-bold">10,000+</h3>
                      <p className="text-gray-500">Properties Listed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaUsers className="text-4xl text-amber-500" />
                    <div>
                      <h3 className="text-2xl font-bold">50,000+</h3>
                      <p className="text-gray-500">Happy Users</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaAward className="text-4xl text-amber-500" />
                    <div>
                      <h3 className="text-2xl font-bold">5+ Years</h3>
                      <p className="text-gray-500">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="bg-base-200 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-base-100 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 dark:bg-amber-900 p-4 rounded-full">
                  <FaHeart className="text-3xl text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                To empower individuals and families by providing a seamless, secure, and transparent 
                platform for all their real estate needs. We strive to make property transactions 
                accessible, trustworthy, and stress-free for everyone.
              </p>
            </motion.div>

            <motion.div
              className="bg-base-100 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 dark:bg-amber-900 p-4 rounded-full">
                  <FaShieldAlt className="text-3xl text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                To become the most trusted and innovative real estate platform, where every user 
                finds their perfect property with confidence. We envision a future where technology 
                and human touch work together to create exceptional real estate experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">Our Core Values</h2>
            <p className="text-center text-gray-500 text-lg mb-12">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt className="text-5xl text-amber-500" />,
                title: "Trust & Transparency",
                description: "We believe in honest communication and verified listings to build lasting trust with our users."
              },
              {
                icon: <FaHandshake className="text-5xl text-amber-500" />,
                title: "Customer First",
                description: "Your satisfaction is our priority. We're here to support you every step of the way."
              },
              {
                icon: <FaAward className="text-5xl text-amber-500" />,
                title: "Excellence",
                description: "We continuously improve our platform to deliver the best real estate experience possible."
              },
              {
                icon: <FaUsers className="text-5xl text-amber-500" />,
                title: "Community",
                description: "We foster a supportive community where buyers, sellers, and agents connect meaningfully."
              },
              {
                icon: <FaHome className="text-5xl text-amber-500" />,
                title: "Innovation",
                description: "We leverage cutting-edge technology to simplify and enhance the property search process."
              },
              {
                icon: <FaHeart className="text-5xl text-amber-500" />,
                title: "Integrity",
                description: "We operate with honesty and ethical standards in every interaction and transaction."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-base-100 border border-base-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied users who have found their perfect property with HomeNest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/all-properties"
              className="btn bg-white text-amber-600 hover:bg-gray-100 border-none px-8 py-3 text-lg font-semibold"
            >
              Browse Properties
            </a>
            <a
              href="/add-property"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg font-semibold"
            >
              List Your Property
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default AboutUs;
