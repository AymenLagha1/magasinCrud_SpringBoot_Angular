package fr.sparkit.magasin.controllers;

import fr.sparkit.magasin.entities.Command;
import fr.sparkit.magasin.exceptions.NotEnoughInStockException;
import fr.sparkit.magasin.services.CommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/command")
public class CommandController {
    @Autowired
    CommandService commandService;

    @GetMapping("/all")
    public List<Command> getAll(){
        return commandService.getAllCommands();
    }

    @PostMapping("/create")
    public Command create(@RequestBody Command command) throws NotEnoughInStockException {
        return commandService.create(command);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,String>> delete(@PathVariable Long id){
        Map res = new HashMap();
        res.put("status","ok");
        commandService.delete(id);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
