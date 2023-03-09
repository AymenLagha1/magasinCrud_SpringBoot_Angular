package fr.sparkit.magasin.repositories;

import fr.sparkit.magasin.entities.CommandLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandLineRepository extends JpaRepository<CommandLine,Long > {
}
