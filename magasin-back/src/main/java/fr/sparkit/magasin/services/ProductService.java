package fr.sparkit.magasin.services;

import fr.sparkit.magasin.DTO.ProductDto;
import fr.sparkit.magasin.entities.Category;
import fr.sparkit.magasin.entities.Product;
import fr.sparkit.magasin.repositories.CategoryRepository;
import fr.sparkit.magasin.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ModelMapper modelMapper;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(Long id){
        return productRepository.findById(id).get();
    }
    public void deleteProduct(Long id) {
         productRepository.deleteById(id);
    }
}
