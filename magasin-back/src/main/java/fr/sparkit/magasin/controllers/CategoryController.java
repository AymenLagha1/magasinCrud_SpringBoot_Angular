package fr.sparkit.magasin.controllers;

import fr.sparkit.magasin.entities.Category;
import fr.sparkit.magasin.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getAll(){
        return categoryService.getAllCategories();
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Long id){
        return categoryService.getCategoryById(id);
    }

    @PostMapping("/create")
    public Category create(@RequestBody Category category){
        return categoryService.createCategory(category);
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        categoryService.deleteCategory(id);
    }

    @PutMapping("/update")
    public Category update(@RequestBody Category category){
        return categoryService.updateCategory(category);
    }
}
