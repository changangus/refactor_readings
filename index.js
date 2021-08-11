import { plays, invoice } from "./src/data/data.js";
import { createStatement } from './src/js/createStatement.js';

console.log(createStatement(invoice, plays));