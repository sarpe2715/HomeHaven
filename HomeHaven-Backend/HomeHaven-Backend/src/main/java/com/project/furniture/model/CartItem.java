package com.project.furniture.model;

import javax.persistence.*;

@Entity
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    private int quantity;

	public Object getProduct() {
		
		return product;
	}

	public int getQuantity() {
		
		return quantity;
	}

	public void setQuantity(int i) {
		this.quantity = i;
		
	}

	public void setProduct(Product product2) {
		this.product = product2;
		
	}
		
	}

    // Getters and setters

