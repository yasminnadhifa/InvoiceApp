import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import InvoiceForm from '../fragments/InvoiceForm';

export const Invoices = () => {
  console.log('ddddd ');
  console.log('testest');
  return (
    <>
      <Layout>
        <div className="ddsdd"></div>
        <div className="space-y-4">
          <Card>
            <h1 className="text-2xl font-bold">Add Invoice</h1>
          </Card>
          <InvoiceForm></InvoiceForm>
        </div>
      </Layout>
    </>
  );
};
