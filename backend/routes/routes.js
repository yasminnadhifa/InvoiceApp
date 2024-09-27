// Import express
import express from "express";
import { createInvoice, getGraph, getInvoices } from '../controllers/invoiceController.js'
const Router = express.Router();

Router.post('/api/invoices',createInvoice)
Router.get('/api/invoices', getInvoices)
Router.get('/api/graph', getGraph);

export default Router

