import React from 'react';
import Layout from "../components/Layout";
import Card from "../components/Card";
import InvoiceForm from "../fragments/InvoiceForm";


export const Invoices = () => {

  return (
    <>
      <Layout>
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
