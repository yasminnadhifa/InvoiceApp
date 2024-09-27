// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Invoices = db.define('invoices', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  customer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salesperson: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true, 
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: true, 
  },
}, {
  freezeTableName: true, 
  timestamps: true, 
});

export default Invoices; 
