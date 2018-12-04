import Cart from '../api/cart/cart.model';


export default class CartService {

    createUserCart(cart: any = {}, userID) {
        cart.userID = userID;
        const newCart = new Cart(cart);
        return newCart.save();
    }

    getCartTotal(cart) {
        let total = 0;
        try {
            cart.items.forEach(item => {
                total += item.product.price * item.quantity;
            });
        } catch (e) {
            return 0;
        }
        return total;
    }
}