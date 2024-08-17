package com.project.furniture.controller;

import com.project.furniture.model.Cart;
import com.project.furniture.model.Product;
import com.project.furniture.model.User;
import com.project.furniture.service.CartService;
import com.project.furniture.service.ProductService;
import com.project.furniture.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private ProductService productService; // Inject ProductService

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(
            @AuthenticationPrincipal User user,
            @RequestParam Long productId,
            @RequestParam int quantity) {

        Product product = productService.findById(productId); // Use ProductService to find product
        Cart updatedCart = cartService.addToCart(user, product, quantity);
        return ResponseEntity.ok(updatedCart);
    }
}
