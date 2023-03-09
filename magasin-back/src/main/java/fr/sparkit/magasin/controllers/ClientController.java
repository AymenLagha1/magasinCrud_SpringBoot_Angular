package fr.sparkit.magasin.controllers;

import fr.sparkit.magasin.entities.Client;
import fr.sparkit.magasin.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/all")
    public List<Client> getAll(){
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Client getById(@PathVariable Long id){
        return clientService.getClientById(id);
    }

    @PostMapping("/create")
    public Client create(@RequestBody Client client){
        return clientService.createClient(client);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,String>> delete (@PathVariable Long id) {
        Map res = new HashMap();
        res.put("status","ok");
        clientService.deleteClientById(id);
        return new ResponseEntity<>(res, HttpStatus.OK);

    }
}
