import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:pl-64">
        <Header />
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Quick Stats */}
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="text-lg font-medium text-gray-900">Today's Orders</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">24</p>
                <p className="mt-1 text-sm text-gray-500">+12% from yesterday</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="text-lg font-medium text-gray-900">Active Tables</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">8/12</p>
                <p className="mt-1 text-sm text-gray-500">4 tables available</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="text-lg font-medium text-gray-900">Today's Revenue</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">$1,284</p>
                <p className="mt-1 text-sm text-gray-500">+8% from yesterday</p>
              </div>

              {/* Recent Orders */}
              <div className="col-span-full rounded-lg bg-white p-6 shadow">
                <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                <div className="mt-4 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Order ID
                            </th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Table
                            </th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Status
                            </th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { id: '1234', table: '4', status: 'preparing', total: '$45.00' },
                            { id: '1235', table: '2', status: 'served', total: '$78.50' },
                            { id: '1236', table: '7', status: 'pending', total: '$32.00' },
                          ].map((order) => (
                            <tr key={order.id}>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                #{order.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Table {order.table}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm">
                                <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                  {
                                    preparing: 'bg-yellow-100 text-yellow-800',
                                    served: 'bg-green-100 text-green-800',
                                    pending: 'bg-gray-100 text-gray-800',
                                  }[order.status]
                                }`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {order.total}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;