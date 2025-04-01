import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        boolean playAgain = true;

        while (playAgain) {
            int numberToGuess = random.nextInt(100) + 1;
            int userGuess = 0;
            int attempts = 0;
            int maxAttempts = 10;

            System.out.println("Welcome to the Number Guessing Game!");
            System.out.println("I have chosen a number between 1 and 100. Can you guess it?");
            System.out.println("You have " + maxAttempts + " attempts.");

            while (userGuess != numberToGuess && attempts < maxAttempts) {
                System.out.print("Enter your guess: ");
                userGuess = scanner.nextInt();
                attempts++;

                if (userGuess < numberToGuess) {
                    System.out.println("Too low! Try again.");
                } else if (userGuess > numberToGuess) {
                    System.out.println("Too high! Try again.");
                } else {
                    System.out.println("Congratulations! You guessed the number in " + attempts + " attempts.");
                }
            }

            if (attempts >= maxAttempts && userGuess != numberToGuess) {
                System.out.println("Sorry, you've run out of attempts! The number was " + numberToGuess + ".");
            }

            System.out.print("Do you want to play again? (y/n): ");
            String replay = scanner.next();
            if (!replay.equalsIgnoreCase("y")) {
                playAgain = false;
            }
        }

        scanner.close();
    }
}
