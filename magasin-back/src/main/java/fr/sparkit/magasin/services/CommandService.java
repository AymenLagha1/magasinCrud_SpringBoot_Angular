package fr.sparkit.magasin.services;

import fr.sparkit.magasin.entities.Command;
import fr.sparkit.magasin.entities.CommandLine;
import fr.sparkit.magasin.entities.Product;
import fr.sparkit.magasin.exceptions.NotEnoughInStockException;
import fr.sparkit.magasin.repositories.CommandLineRepository;
import fr.sparkit.magasin.repositories.CommandRepository;
import fr.sparkit.magasin.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.ConstraintViolationException;
import java.util.List;

@Service
@Transactional
public class CommandService {
    @Autowired
    private CommandRepository commandRepository;
    @Autowired
    private CommandLineRepository commandLineRepository;
    @Autowired
    private ProductRepository productRepository;
    public List<Command> getAllCommands(){
        return commandRepository.findAll();
    }

    public Command create(Command command)  throws NotEnoughInStockException {

        commandRepository.save(command);

        for (CommandLine commandLine : command.getCommandLines()) {
            Product product = productRepository.findById(commandLine.getProduct().getId()).get();
            int rest = product.getQuantity() - commandLine.getQuantity();
            if (rest < 0) {
                throw new NotEnoughInStockException(product.getName());
            }
            product.setQuantity(rest);
            productRepository.save(product);
            commandLine.setCommand(command);
            commandLineRepository.save(commandLine);
        }
        return command;
    }

    public void delete(Long id){
        commandRepository.deleteById(id);
    }

}
