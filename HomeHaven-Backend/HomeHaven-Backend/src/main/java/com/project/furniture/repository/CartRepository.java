package com.project.furniture.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.furniture.model.Cart;
import com.project.furniture.model.User;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUser(User user);
}
