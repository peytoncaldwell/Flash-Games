#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int getComputerChoice() {
    return rand() % 3;
}

string getChoiceName(int choice) {
    string choices[3] = {"Rock", "Paper", "Scissors"};
    return choices[choice];
}

int main() {
    srand(time(0));  // Seed random number generator

    int playerScore = 0, computerScore = 0, rounds = 0;
    string playerChoice, replay;

    do {
        cout << "\nRound " << ++rounds << endl;
        cout << "Enter Rock, Paper, or Scissors: ";
        cin >> playerChoice;

        int playerChoiceIndex;
        if (playerChoice == "Rock") playerChoiceIndex = 0;
        else if (playerChoice == "Paper") playerChoiceIndex = 1;
        else if (playerChoice == "Scissors") playerChoiceIndex = 2;
        else {
            cout << "Invalid choice, please try again.\n";
            continue;
        }

        int computerChoiceIndex = getComputerChoice();
        cout << "Computer chose: " << getChoiceName(computerChoiceIndex) << endl;

        if (playerChoiceIndex == computerChoiceIndex) {
            cout << "It's a tie!\n";
        } else if ((playerChoiceIndex == 0 && computerChoiceIndex == 2) ||
                   (playerChoiceIndex == 1 && computerChoiceIndex == 0) ||
                   (playerChoiceIndex == 2 && computerChoiceIndex == 1)) {
            playerScore++;
            cout << "You win this round!\n";
        } else {
            computerScore++;
            cout << "Computer wins this round!\n";
        }

        cout << "Score - You: " << playerScore << ", Computer: " << computerScore << endl;

        cout << "Do you want to play again? (y/n): ";
        cin >> replay;
    } while (replay == "y");

    return 0;
}
