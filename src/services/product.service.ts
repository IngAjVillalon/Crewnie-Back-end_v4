import Product from '../api/product/product.model';
const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.ObjectId;

// interface Cart {
//     items: [{ product: any, quantity: number }]
// }

export default class ProductService {

    reduceStock = (productID, quantity) => {
        return Product.findById(productID)
        .then((product: any) => {
            product.stock = product.stock - quantity;
            // console.log('reduceStock------')
            if( product.stock < 0 ) {
                product.stock = 0;
            }
            return product
            .save()
            .then(res => {
                // console.log(res);
                return res;
            })
        })
        .catch(e => e)
    }
    checkStock = (order) => {
        
    }

    addStock = (productID, quantity) => {
        return Product.findById(productID)
        .then((product: any) => {
            product.stock = product.stock + quantity;

            return product
            .save()
            .then(res => {
                // console.log(res)
                return res;
            })
        })
    }

    updateCartProducts(cart): Promise<any> {
        if(!cart.items || !cart.items.length) {
            return Promise.reject('Cart is empty');
        }

        // GEN ARRAY OF PRODUCT IDS FROM CART PRODUCTS
        let productIDs = cart.items.map(item => {
            return mongoose.Types.ObjectId(item.product._id);
        })

        // GET PRODUCTS BY IDS
        return Product.find({
            '_id': { $in: productIDs }
        }).exec()
        .then(latestProducts => {
            var hasStockOut = false;
            cart.items = cart.items.map(item => {
                item.product = latestProducts
                                .find(lp => lp._id.toHexString() === item.product._id);
                return item;
            })
            // Check DB has requested product
            .filter(item => item.product)
            // Check stock
            .map(item => {
                if (item.product.stock <= 0) {
                    hasStockOut = true;
                }
                return item;
            });

            if(hasStockOut) {
                throw {
                    stockOut: true,
                    message: 'One or more products just got stocked out! Please check your cart.',
                    cart: cart
                };
            } else {
                return cart;
            }
        });
    }

    sanitizeCartAndProducts = (cart) => {
        cart.items = cart.items.map(item => {
            item.product = {
                _id: item.product._id,
                productID: item.product._id,
                imgUrl: item.product.imgUrl,
                name: item.product.name,
                price: item.product.price,
                priceRetail: item.product.priceRetail,
                unitAmount: item.product.unitAmount,
                unitName: item.product.unitName,
                stock: item.product.stock
            }
            return item;
        })
        return cart;
    }

}