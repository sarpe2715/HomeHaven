package com.project.furniture.service;

import com.project.furniture.model.Cart;
import com.project.furniture.model.CartItem;
import com.project.furniture.model.Product;
import com.project.furniture.model.User;
import com.project.furniture.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart addToCart(User user, Product product, int quantity) {
        Cart cart = getCart(user);

        Optional<CartItem> existingItemOpt = cart.getItems().stream()
                .filter(item -> item.getProduct().equals(product))
                .findFirst();

        if (existingItemOpt.isPresent()) {
            CartItem existingItem = existingItemOpt.get();
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
        } else {
            CartItem newItem = new CartItem();
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            cart.getItems().add(newItem);
        }

        return cartRepository.save(cart);
    }

    private Cart getCart(User user) {
        // Logic to retrieve or create a cart for the user
        return null;
    }
}
