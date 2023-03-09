package fr.sparkit.magasin.services;

import fr.sparkit.magasin.entities.Client;
import fr.sparkit.magasin.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients(){
        return clientRepository.findAll();
    }

    public Client createClient(Client client){
        return clientRepository.save(client);
    }

    public  Client getClientById(Long id){return clientRepository.findById(id).get();}

    public void deleteClientById(Long id){
        this.clientRepository.deleteById(id);
    }


}
