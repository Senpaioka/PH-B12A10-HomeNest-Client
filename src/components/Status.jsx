// import { useEffect, useRef, useState } from "react";

// // icons
// import { FaUserPlus } from "react-icons/fa6";
// import { FaScroll } from "react-icons/fa6";
// import { FaHeartCircleCheck } from "react-icons/fa6";

// function Status() {
//   const [clients, setClients] = useState(0);
//   const [properties, setProperties] = useState(0);
//   const [rating, setRating] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const animateValue = (setter, start, end, duration, decimals = 0) => {
//       let startTime = null;

//       const step = (timestamp) => {
//         if (!startTime) startTime = timestamp;
//         const progress = Math.min((timestamp - startTime) / duration, 1);
//         const value = progress * (end - start) + start;
//         setter(Number(value.toFixed(decimals)));

//         if (progress < 1) requestAnimationFrame(step);
//       };

//       requestAnimationFrame(step);
//     };

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           animateValue(setClients, 0, 15000, 2000);
//           animateValue(setProperties, 0, 8000, 2000);
//           animateValue(setRating, 0, 4.9, 2000, 1);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.6 } // Trigger when 40% of section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   return (
//     <section ref={sectionRef} className="py-16 px-6">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-3">
//           Our Achievements
//         </h2>
//         <p className="text-gray-500 max-w-xl mx-auto">
//           We’re proud to have helped thousands of people find their perfect home
//           and connect with trusted property owners.
//         </p>
//       </div>

//       <div className="stats shadow flex flex-col md:flex-row w-full md:w-10/12 mx-auto bg-base-100">
//         {/* Stat 1 */}
//         <div className="stat">
//           <div className="stat-figure text-secondary"><FaUserPlus className="text-5xl text-amber-500"></FaUserPlus></div>
//           <div className="stat-title">Happy Clients</div>
//           <div className="stat-value">
//             {clients.toLocaleString()}+
//           </div>
//           <div className="stat-desc">Across 120+ cities</div>
//         </div>

//         {/* Stat 2 */}
//         <div className="stat">
//           <div className="stat-figure text-secondary"><FaScroll className="text-5xl text-amber-500"></FaScroll></div>
//           <div className="stat-title">Properties Listed</div>
//           <div className="stat-value">
//             {properties.toLocaleString()}+
//           </div>
//           <div className="stat-desc text-success">↗︎ 12% growth</div>
//         </div>

//         {/* Stat 3 */}
//         <div className="stat">
//           <div className="stat-figure text-secondary"><FaHeartCircleCheck className="text-5xl text-amber-500"></FaHeartCircleCheck></div>
//           <div className="stat-title">Average Rating</div>
//           <div className="stat-value">{rating.toFixed(1)}/5</div>
//           <div className="stat-desc text-success">Based on 10K+ reviews</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Status;


import { useEffect, useRef, useState } from "react";
import { FaUserPlus, FaScroll, FaHeartCircleCheck } from "react-icons/fa6";

function Status() {
  const [clients, setClients] = useState(0);
  const [properties, setProperties] = useState(0);
  const [rating, setRating] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const animateValue = (setter, start, end, duration, decimals = 0) => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = progress * (end - start) + start;
        setter(Number(value.toFixed(decimals)));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(setClients, 0, 15000, 2000);
          animateValue(setProperties, 0, 8000, 2000);
          animateValue(setRating, 0, 4.9, 2000, 1);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 overflow-hidden box-border"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Our Achievements</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We’re proud to have helped thousands of people find their perfect home
          and connect with trusted property owners.
        </p>
      </div>

      <div className="stats shadow-lg flex flex-col md:flex-row w-full md:w-10/12 mx-auto bg-base-100 overflow-hidden rounded-lg">
        {/* Stat 1 */}
        <div className="stat">
          <div className="stat-figure">
            <FaUserPlus className="text-5xl text-amber-500" />
          </div>
          <div className="stat-title">Happy Clients</div>
          <div className="stat-value">{clients.toLocaleString()}+</div>
          <div className="stat-desc">Across 120+ cities</div>
        </div>

        {/* Stat 2 */}
        <div className="stat">
          <div className="stat-figure">
            <FaScroll className="text-5xl text-amber-500" />
          </div>
          <div className="stat-title">Properties Listed</div>
          <div className="stat-value">{properties.toLocaleString()}+</div>
          <div className="stat-desc text-success">↗︎ 12% growth</div>
        </div>

        {/* Stat 3 */}
        <div className="stat">
          <div className="stat-figure">
            <FaHeartCircleCheck className="text-5xl text-amber-500" />
          </div>
          <div className="stat-title">Average Rating</div>
          <div className="stat-value">{rating.toFixed(1)}/5</div>
          <div className="stat-desc text-success">
            Based on 10K+ reviews
          </div>
        </div>
      </div>
    </section>
  );
}

export default Status;

