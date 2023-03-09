package fr.sparkit.magasin.services;

import fr.sparkit.magasin.entities.Category;
import fr.sparkit.magasin.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();

    }
    public Category getCategoryById(Long id){
        return categoryRepository.findById(id).get();
    }
    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }
    public void deleteCategory(Long id){
        try {
            categoryRepository.deleteById(id);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
    public Category updateCategory(Category category){
        return categoryRepository.save(category);
    }
}
