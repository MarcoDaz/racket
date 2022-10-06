const mongoose = require("mongoose");

require("../mongodb_helper");
const Product = require("../../models/product");

describe("Product model", () => {
    beforeEach((done) => {
        mongoose.connection.collections.products.drop(() => {
            done();
        });
    });
    it("has a name", () => {
        const product = new Product({
            name: "Milk",
            description: "Groceries",
            prices: [{
                price: 1.00,
                date: "2000-01-01"
            }]
        });
        expect(product.name).toEqual("Milk");
    })
    it("has a department", () => {
        const product = new Product({
            name: "Milk",
            description: "Groceries",
            prices: [{
                price: 1.00,
                date: "2000-01-01"
            }]
        });
        expect(product.description).toEqual("Groceries");
    })
    it("has a price", () => {
        const product = new Product({
            name: "Milk",
            description: "Groceries",
            prices: [{
                price: 1.00,
                date: "2000-01-01"
            }]
        });
        expect(product.prices[0].price).toEqual(1.00);
    })
    it("has a date", () => {
        const date = new Date("2000-01-01")
        const product = new Product({
            name: "Milk",
            description: "Groceries",
            prices: [{
                price: 1.00,
                date: "2000-01-01"
            }]
        });
        expect(product.prices[0].date).toEqual(date);
    })
})