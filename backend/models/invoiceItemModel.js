// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const InvoicesItem = db.define('invoices_item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  invoice_id: {
    type: DataTypes.INTEGER,
    references:{
      model: 'invoices',
      key: 'id',
    }
  },
}, {
  freezeTableName: true, 
  timestamps: false, 
});

export default InvoicesItem; 
