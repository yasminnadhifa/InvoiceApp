import React, { useEffect, useState } from 'react'
import CardInvoice from '../components/CardInvoice'
import { useDispatch, useSelector } from 'react-redux';
import { getInvoices } from '../redux/invoiceSlice';
import Pagination from '../components/Pagination';

const InvoiceList = () => {
    const dispatch = useDispatch();
    const { invoices, status, error, totalCount } = useSelector((state) => state.invoice);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 12;

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                await dispatch(getInvoices({ page: currentPage, limit }));
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };

        fetchInvoices();
        const intervalId = setInterval(() => {
            fetchInvoices();
          }, 1000); 
      
          // Cleanup the interval when the component unmounts
          return () => clearInterval(intervalId);
    }, [currentPage, dispatch]);

    const totalPages = Math.ceil(totalCount / limit);

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array.isArray(invoices) && invoices.length > 0 ? (
        invoices.map((invoice) => (
            <CardInvoice 
                key={invoice.id}
                id={invoice.id}
                name={invoice.customer}
                date={invoice.date}
                total_amount={invoice.total_amount}
                payment_type ={invoice.payment_type}

                
            />
        ))
    ) : (
        <div>No invoices found.</div>
    )}
</div>
<Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
</>
  )
}

export default InvoiceList