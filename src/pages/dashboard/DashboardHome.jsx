
function DashboardHome() {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-base-content/70">
          Welcome back! Here’s an overview of your application.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-primary">1,245</div>
          <div className="stat-desc">↗︎ 12% this month</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Active Properties</div>
          <div className="stat-value text-secondary">320</div>
          <div className="stat-desc">↗︎ 8 new today</div>
        </div>

        <div className="stat bg-base-100 shadow rounded-box">
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value text-accent">$24,500</div>
          <div className="stat-desc">↗︎ 5% growth</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="lg:col-span-2 bg-base-100 shadow rounded-box p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>
                    <span className="badge badge-success">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Alex Brown</td>
                  <td>alex@example.com</td>
                  <td>
                    <span className="badge badge-error">Blocked</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-base-100 shadow rounded-box p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

          <div className="flex flex-col gap-3">
            <button className="btn btn-primary">Add New User</button>
            <button className="btn btn-secondary">Add Property</button>
            <button className="btn btn-outline">View Reports</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardHome;
