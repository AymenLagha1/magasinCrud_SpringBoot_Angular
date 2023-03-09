package fr.sparkit.magasin.exceptions;

public class NotEnoughInStockException extends Exception{
    public NotEnoughInStockException(String message) {
        super(message);
    }
}
