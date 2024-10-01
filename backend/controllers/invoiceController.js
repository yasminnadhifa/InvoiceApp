import Invoice from "../models/invoiceModel.js"
import InvoicesItem from "../models/invoiceItemModel.js";
import { Op, Sequelize } from "sequelize";

export const createInvoice = async (req, res) => {
    try {
        const { date, customer, salesperson, payment_type, notes, products,total_amount  } = req.body; 
        if (!date || !customer || !salesperson || !payment_type || !products || products.length === 0){
            return res.status(400).json({ message: "Please fill in all fields" });
        }    
        const invoice = await Invoice.create({
            date,
            customer,
            salesperson,
            payment_type,
            notes,
            total_amount
        });
        
        const invoiceItems = products.map(product => ({
            product_id: product.id,
            quantity: product.quantity,
            price: product.price,
            invoice_id: invoice.id,
          }));
      
          await InvoicesItem.bulkCreate(invoiceItems);
        res.status(201).json({
            message: "Invoice Created",
            invoice
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "An error occurred while creating the invoice.",
            error: err.message
        });
    }
}

export const getInvoices = async (req, res) => {
    const { page = 1, limit = 12 } = req.query; 
    const offset = (page - 1) * limit;
    try {
        const invoices = await Invoice.findAndCountAll({
            limit: parseInt(limit), // Parse limit to an integer
            offset: parseInt(offset), // Parse offset to an integer
        });

        res.status(200).json({
            invoices: invoices.rows, // The actual invoice records
            totalCount: invoices.count, // Total number of invoices
            totalPages: Math.ceil(invoices.count / limit), // Calculate total pages
            currentPage: parseInt(page), // Current page
        });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch invoices' });
    }
  };

  

  export const getGraph = async (req, res) => {
    const timeUnit = req.query.timeUnit || 'day';
    const date = new Date();
    let startDate;
  

    switch (timeUnit) {
      case 'day':
        startDate = new Date(date.setDate(date.getDate() - 1));
        break;
      case 'week':
        startDate = new Date(date.setDate(date.getDate() - 7));
        break;
      case 'month':
        startDate = new Date(date.setMonth(date.getMonth() - 1));
        break;
      default:
        startDate = new Date(date.setDate(date.getDate() - 1));
        break;
    }
  
    try {
      const invoices = await Invoice.findAll({
        where: {
          date: {
            [Op.gte]: startDate // Sequelize operator for 'greater than or equal'
          }
        },
        order: [['date', 'ASC']], // Order by date
      });
  
      // Format the data for the chart
      const result = invoices.map(invoice => ({
        date: invoice.date,
        total_amount: invoice.total_amount,
      }));
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch invoices' });
    }
  };
  