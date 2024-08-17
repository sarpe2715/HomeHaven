package com.project.furniture.service;

import com.project.furniture.model.Product;
import com.project.furniture.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product findById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            return product.get();
        } else {
            throw new IllegalArgumentException("Product not found with ID: " + id);
        }
    }
}
