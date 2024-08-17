package com.project.furniture.service;

import com.project.furniture.model.Cart;
import com.project.furniture.model.Product;
import com.project.furniture.model.CartItem;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class PaymentService {

    //public PaymentIntent createPaymentIntent(Cart cart) throws StripeException {
        //long amount = calculateCartTotal(cart);

//        PaymentIntentCreateParams params =
//            PaymentIntentCreateParams.builder()
//                .setAmount(amount)
//                .setCurrency("usd")
//                .setPaymentMethodTypes(Arrays.asList("card"))
//                .build();

        //return PaymentIntent.create(params);
    }

//    private long calculateCartTotal(Cart cart) {
//        return cart.getItems().stream()
//            .mapToLong(item -> item.getProduct().getPrice().longValue() * item.getQuantity())
//            .sum();
//    }
//}
