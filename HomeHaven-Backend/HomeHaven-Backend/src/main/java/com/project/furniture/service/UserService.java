package com.project.furniture.service;
import com.project.furniture.model.User;
import com.project.furniture.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        // Check if the email already exists
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("Email already exists!");
        }
        
        // Encode the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        // Save and return the new user
        return userRepository.save(user);
    }
}