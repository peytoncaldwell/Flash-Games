import random

def guess_the_number():
    print("Welcome to Guess the Number!")
    play_again = True

    while play_again:
        number = random.randint(1, 100)
        attempts = 0
        guessed = False
        max_attempts = 10

        print(f"You have {max_attempts} attempts to guess the number.")

        while not guessed and attempts < max_attempts:
            guess = int(input("Guess a number between 1 and 100: "))
            attempts += 1
            if guess < number:
                print("Too low! Try again.")
            elif guess > number:
                print("Too high! Try again.")
            else:
                guessed = True
                print(f"Congratulations! You guessed the number in {attempts} attempts.")
        
        if attempts >= max_attempts and not guessed:
            print(f"Sorry, you've run out of attempts! The number was {number}.")

        play_again_input = input("Do you want to play again? (y/n): ")
        if play_again_input.lower() != 'y':
            play_again = False

if __name__ == "__main__":
    guess_the_number()
