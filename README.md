
# Invoice App

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)


## Overview
The Invoice App is designed to streamline the invoicing process for businesses. It allows users to create and manage invoices effortlessly, providing features such as product autocompletion, invoice cards with pagination, and revenue projection graphs.

## Features
### Section 1 - Add Invoice
- **Mandatory Fields**: Date, Customer Name, Salesperson Name, and Products Sold (with optional notes).
- **Product Autocomplete**: As users type in the product input field, suggestions with product name, image, stock, and price appear.
- **Form Validation**: Prevent form submission if any mandatory fields are empty, with tooltip warnings for invalid inputs.
- **Submission Notification**: A pop-up notification appears upon successful invoice submission.

### Section 2 - Invoice Card
- **Invoice Summary**: Display customer name, salesperson name, total amount paid, and notes on invoice cards.
- **Pagination**: Navigate through published invoices using pagination.
- **Lazy Loading**: Fetch invoice data from the backend using a GET API.

### Section 3 - Time-Series Graph
- **Revenue Projection**: Show a graph projecting revenue from invoices on daily, weekly, and monthly bases.
- **Pan and Zoom**: Users can pan and zoom in on specific periods within the graph.
- **Auto Scroll**: Automatically scroll to display new data when it is added.

## Technologies Used
- **Frontend**: React.js, Redux, Tailwind
- **Backend**: Node.js
- **Database**: MySQL

## API Endpoints
- POST /api/invoices: Create a new invoice.
- GET /api/invoices: Retrieve all published invoices.
- GET /api/graph: Retrieve time and revenue data.

## Visual 
![image](https://github.com/user-attachments/assets/a2d0bb89-1ae9-4c12-89c6-df7276ecdbed)
![image](https://github.com/user-attachments/assets/8d0ecab1-f84f-4701-829f-4e194f535f7e)
![image](https://github.com/user-attachments/assets/c1ae1719-a093-40c4-a6a5-a8350eb8a8f9)
![image](https://github.com/user-attachments/assets/d0c85ffa-c77e-4688-990d-de9c15108f41)




