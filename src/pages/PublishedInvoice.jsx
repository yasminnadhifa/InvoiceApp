import React, { lazy } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';

// Lazy load InvoiceList
const InvoiceList = lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(import('../fragments/InvoiceList')), 2000); // 2-second delay
}));


// Placeholder card component for the loading state
const PlaceholderCard = () => (
  <div className="animate-pulse flex flex-col space-y-2 p-4 bg-gray-200 rounded-lg shadow-md">
    <div className="h-6 bg-gray-300 rounded"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div> 
    <div className="h-8 bg-gray-300 rounded w-full"></div> 
  </div>
);

const PublishedInvoice = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <Card>
          <h1 className="text-2xl font-bold">Published Invoice</h1>
        </Card>

        <React.Suspense 
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Render 12 placeholder cards */}
              {Array.from({ length: 12 }, (_, index) => (
                <PlaceholderCard key={index} />
              ))}
            </div>
          }
        >
          <InvoiceList />
        </React.Suspense>
      </div>
    </Layout>
  );
}

export default PublishedInvoice;
