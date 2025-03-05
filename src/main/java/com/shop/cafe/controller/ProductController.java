package com.shop.cafe.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shop.cafe.dto.Product;
import com.shop.cafe.service.ProductService;

@RestController
@CrossOrigin("http://127.0.0.1:5500/")
public class ProductController {
	
	@Autowired // DI -> new 해주는거
	ProductService productService;
	
	@GetMapping("getAllProducts")
	public List<Product> getAllProducts() {
		try {
			System.out.println("getAllProducts 실행");
			return productService.getAllProducts();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}