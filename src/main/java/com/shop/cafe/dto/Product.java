package com.shop.cafe.dto;

public class Product {
	private int prodcode, price;
	private String prodname,pimg;
	
	public Product(int prodcode, String prodname, String pimg, int price) {
		setProdcode(prodcode);
		setProdname(prodname);
		setPimg(pimg);
		setPrice(price);
	}
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "Product [prodcode=" + prodcode + ", prodname=" + prodname + ", pimg=" + pimg + ", price=" + price + "]";
	}
	
	public int getProdcode() {
		return prodcode;
	}
	
	public void setProdcode(int prodcode) {
		this.prodcode = prodcode;
	}
	
	public String getProdname() {
		return prodname;
	}
	
	public void setProdname(String prodname) {
		this.prodname = prodname;
	}
	
	public String getPimg() {
		return pimg;
	}
	
	public void setPimg(String pimg) {
		this.pimg = pimg;
	}
	
	public int getPrice() {
		return price;
	}
	
	public void setPrice(int price) {
		this.price = price;
	}	
}
