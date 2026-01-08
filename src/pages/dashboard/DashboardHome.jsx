import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router";
import { FaHome, FaPlus, FaStar, FaEye } from "react-icons/fa";

function DashboardHome() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-base-100 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.displayName}!</h1>
        <p className="text-base-content/70 text-lg">
          Manage your properties and track your real estate journey from here.
        </p>
      </header>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="stat bg-base-200 shadow-lg rounded-xl p-6">
          <div className="stat-figure text-amber-500">
            <FaHome className="text-3xl" />
          </div>
          <div className="stat-title">My Properties</div>
          <div className="stat-value text-amber-600">12</div>
          <div className="stat-desc">↗︎ 2 new this month</div>
        </div>

        <div className="stat bg-base-200 shadow-lg rounded-xl p-6">
          <div className="stat-figure text-blue-500">
            <FaEye className="text-3xl" />
          </div>
          <div className="stat-title">Total Views</div>
          <div className="stat-value text-blue-600">1,245</div>
          <div className="stat-desc">↗︎ 15% this week</div>
        </div>

        <div className="stat bg-base-200 shadow-lg rounded-xl p-6">
          <div className="stat-figure text-green-500">
            <FaStar className="text-3xl" />
          </div>
          <div className="stat-title">Avg Rating</div>
          <div className="stat-value text-green-600">4.8</div>
          <div className="stat-desc">From 28 reviews</div>
        </div>

        <div className="stat bg-base-200 shadow-lg rounded-xl p-6">
          <div className="stat-figure text-purple-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div className="stat-title">Inquiries</div>
          <div className="stat-value text-purple-600">8</div>
          <div className="stat-desc">3 new today</div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-base-200 shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaPlus className="text-amber-500" />
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              to="/dashboard/add-property" 
              className="btn btn-lg bg-amber-500 hover:bg-amber-600 text-white border-none flex items-center gap-3"
            >
              <FaPlus />
              Add New Property
            </Link>
            
            <Link 
              to="/dashboard/my-properties" 
              className="btn btn-lg btn-outline border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white flex items-center gap-3"
            >
              <FaHome />
              View My Properties
            </Link>
            
            <Link 
              to="/dashboard/my-ratings" 
              className="btn btn-lg btn-outline border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white flex items-center gap-3"
            >
              <FaStar />
              Check Reviews
            </Link>
            
            <Link 
              to="/all-properties" 
              className="btn btn-lg btn-outline border-green-500 text-green-600 hover:bg-green-500 hover:text-white flex items-center gap-3"
            >
              <FaEye />
              Browse All Properties
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-base-200 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New inquiry received</p>
                <p className="text-xs text-base-content/60">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Property viewed 15 times</p>
                <p className="text-xs text-base-content/60">5 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New review received</p>
                <p className="text-xs text-base-content/60">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Property listing updated</p>
                <p className="text-xs text-base-content/60">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      {/* <section className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-amber-800 dark:text-amber-200">
          💡 Pro Tips for Better Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Add high-quality photos to get 3x more views on your property listings.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Write detailed descriptions to help buyers understand your property better.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Respond to inquiries quickly to increase your chances of closing deals.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Keep your property information updated to maintain buyer interest.
            </p>
          </div>
        </div>
      </section> */}
      <section className="rounded-xl p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
  <h2 className="text-2xl font-semibold mb-6 text-amber-900 dark:text-amber-200">
    Pro Tips for Better Listings
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      "Add high-quality photos to get 3x more views on your property listings.",
      "Write detailed descriptions to help buyers understand your property better.",
      "Respond to inquiries quickly to increase your chances of closing deals.",
      "Keep your property information updated to maintain buyer interest.",
    ].map((text, index) => (
      <div
        key={index}
        className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-amber-800/30 shadow-sm"
      >
        <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
          {index + 1}
        </div>
        <p className="text-sm text-gray-800 dark:text-amber-100 leading-relaxed">
          {text}
        </p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}

export default DashboardHome;