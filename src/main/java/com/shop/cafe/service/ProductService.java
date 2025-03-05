package com.shop.cafe.service;

import com.shop.cafe.dao.ProductDao;
import com.shop.cafe.dto.Product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // 서비스 컴포넌트 : 다른 팀원이 봤을 때 알아 보기 쉽게 ! 그냥 @Compnent써도 됨.
public class ProductService {
	
	@Autowired // DI -> 자동으로 new되게 해주는거
	//component에서 다 해줌.
	ProductDao productDao;
	
	public List<Product> getAllProducts() throws Exception{
		return productDao.getAllProducts();
	}

}