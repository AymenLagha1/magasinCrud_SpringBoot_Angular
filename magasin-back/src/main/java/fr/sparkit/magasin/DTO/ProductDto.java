package fr.sparkit.magasin.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductDto {

    private Long id;
    private String name;
    private String description;
    private Long categoryId;
    private int quantity ;
    private double price ;
}
