import React, { useState } from "react";
import Button from "../components/Button";
import Form from "../components/FormInput";
import Input from "../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import Card from "../components/Card";
import { submitInvoice } from "../redux/invoiceSlice";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";


const InvoiceForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { products, selectedProducts } = useSelector((state) => state.products);
  const [invoice, setInvoice] = useState({
    date: "",
    customer: "",
    salesperson: "",
    payment_type: "",
    notes: "",
  });
  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  const [errors, setErrors] = useState({});

  const calculateTotalAmount = () => {
    return selectedProducts
      .reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0)
      .toFixed(2);
  };

  const validateFields = () => {
    const newErrors = {};
    if (!invoice.date) newErrors.date = "Date is required.";
    if (!invoice.customer) newErrors.customer = "Customer name is required.";
    if (!invoice.salesperson) newErrors.salesperson = "Salesperson is required.";
    if (!invoice.payment_type) newErrors.payment_type = "Payment Type is required.";
    if (!selectedProducts.length) newErrors.products = "Please add at least one product.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddProduct = (product) => {
    dispatch(addProduct({ ...product, quantity: 1 }));
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return; 
    const invoiceData = {
      ...invoice,
      products: selectedProducts,
      total_amount: calculateTotalAmount(),
    };
    console.log(invoiceData);
    dispatch(submitInvoice(invoiceData));
    Swal.fire({
      title: "Success",
      text: "Invoice successfully created!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-2">
          <h6 className="text-gray-500 font-semibold  mb-5">Add Detail Invoice</h6>

          <Form judulLabel="Date" name="date" gap="gap-24">
            <Input
              name="date"
              type="date"
              value={invoice.date}
              onChange={handleInputChange}
              className={errors.date ? "border-red-500" : ""}
            />
            {errors.date && <span className="text-red-500 text-sm">{errors.date}</span>}
          </Form>

          <Form judulLabel="Customer Name" name="customer" gap="gap-3">
            <Input
              name="customer"
              type="text"
              value={invoice.customer}
              onChange={handleInputChange}
              className={errors.customer ? "border-red-500" : ""}
            />
            {errors.customer && <span className="text-red-500 text-sm">{errors.customer}</span>}
          </Form>

          <Form judulLabel="Sales Person" name="salesperson" gap="gap-16">
            <Input
              name="salesperson"
              type="text"
              value={invoice.salesperson}
              onChange={handleInputChange}
              className={errors.salesperson ? "border-red-500" : ""}
            />
            {errors.salesperson && <span className="text-red-500 text-sm">{errors.salesperson}</span>}
          </Form>

          <Form judulLabel="Payment Type" name="payment_type" gap="gap-16">
            <Input
              name="payment_type"
              type="text"
              value={invoice.payment_type}
              onChange={handleInputChange}
              className={errors.payment_type ? "border-red-500" : ""}
            />
            {errors.payment_type && <span className="text-red-500 text-sm">{errors.payment_type}</span>}
          </Form>

          <Form judulLabel="Notes" name="notes" gap="gap-16">
            <Input
              name="notes"
              type="text"
              value={invoice.notes}
              onChange={handleInputChange}
            />
          </Form>

          <h6 className="text-gray-500 font-semibold mb-5 mt-5">Add Product</h6>
          <Form judulLabel="Add Product" name="product" gap="gap-16">
            <Input
              name="products"
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Search Product.."
              className={errors.products ? "border-red-500" : ""}
            />
            {errors.products && <span className="text-red-500 text-sm">{errors.products}</span>}
          </Form>

          {query && (
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Image</th>
                  <th className="py-2 px-4 border-b">Product Name</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">
                      <img
                        src={product.image}
                        alt={product.name}
                        width="50"
                        className="rounded"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">{product.name}</td>
                    <td className="py-2 px-4 border-b">{rupiah(product.price)}</td>
                    <td className="py-2 px-4 border-b">
                      <Button
                        type="button"
                        onClick={() => handleAddProduct(product)}
                        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
                      >
                        Add
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Card>

        <Card className="flex-1 md:flex-2">
          <h6 className="text-gray-500 font-semibold">Selected Products</h6>
          {selectedProducts.length > 0 ? (
            <div>
              {selectedProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between border-b py-2">
                  <img src={product.image} alt={product.name} width="50" className="mr-2" />
                  <span>
                    {product.name} - {rupiah(product.price)} x {product.quantity}
                  </span>
                  <button
                    type="button"
                    className="text-red-500 hover:underline"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
              <div className="mt-4 border-t pt-4 text-right">
                <h6 className="text-lg font-semibold">
                  Total Amount: {rupiah(calculateTotalAmount())}
                </h6>
              </div>
            </div>
          ) : (
            <p>No products selected.</p>
          )}
          <div className="flex justify-end mt-4">
            <Button type="submit">Submit</Button>
          </div>
        </Card>
      </div>
    </form>
  );
};

export default InvoiceForm;
