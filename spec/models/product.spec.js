const mongoose = require("mongoose");

require("../mongodb_helper");
const Product = require("../../models/product");

describe("Product model", () => {
    beforeEach((done) => {
        mongoose.connection.collections.product.drop(() => {
            done();
        });
    });
    it("has a name", () => {
        const product = new Product({
            productName: "Milk",
            department: "Groceries",
            prices: [{
                price: 1.00,
                date: 2000-01-01
            }]
        });
        expect(product.productName).toEqaual("Milk");
    })
    it("has a department", () => {
        const product = new Product({
            productName: "Milk",
            department: "Groceries",
            prices: [{
                price: 1.00,
                date: 2000-01-01
            }]
        });
        expect(product.department).toEqaual("Milk");
    })
    it("has a price", () => {
        const product = new Product({
            productName: "Milk",
            department: "Groceries",
            prices: [{
                price: 1.00,
                date: 2000-01-01
            }]
        });
        expect(product.prices[0]).toEqaual("Milk");
    })
    it("has a date", () => {
        const product = new Product({
            productName: "Milk",
            department: "Groceries",
            prices: [{
                price: 1.00,
                date: 2000-01-01
            }]
        });
        expect(product.prices[1]).toEqaual("2000-01-01");
    })
})