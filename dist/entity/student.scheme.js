"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    initial: String,
});
//# sourceMappingURL=student.scheme.js.map