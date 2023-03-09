package fr.sparkit.magasin.controllers;

import fr.sparkit.magasin.entities.Product;
import fr.sparkit.magasin.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
public class ProductsController {


    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public List<Product> getAll(){
        return productService.getAllProducts() ;
    }
    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id){
        return productService.getProductById(id) ;
    }

    @PostMapping("/create")
    public Product create(@RequestBody Product product){
        return productService.createProduct(product) ;
    }

    @PutMapping("/update")
    public Product update(@RequestBody Product product){
        return productService.updateProduct(product) ;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,String>> delete(@PathVariable Long id){
        Map res = new HashMap();
        res.put("status","ok");
        productService.deleteProduct(id);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

}
