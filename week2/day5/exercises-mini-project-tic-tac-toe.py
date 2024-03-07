# #exercises-mini project: tic-tact-toe
# def initialize_board():
#     #"""Creates a 3x3 board initialized with numbers 1 to 9"""
#     return [[str(i + j * 3 + 1) for i in range(3)] for j in range(3)]

# def print_board(board):
#    # """Prints the board with borders"""
#     print("Welcome to Tic-Tac-Toe!\n")
#     print(" +---+---+---+")
#     for row in board:
#         print(" | " + " | ".join(row) + " | ")
#         print(" +---+---+---+")

# def player_move(board, player):
#     #"""Allows a player to make a move"""
#     while True:
#         try:
#             move = int(input(f"Player {player}, choose a position (1-9): "))
#             if 1 <= move <= 9:
#                 row, col = (move - 1) // 3, (move - 1) % 3
#                 if board[row][col] not in ['X', 'O']:
#                     board[row][col] = player
#                     break
#                 else:
#                     print("This position is already taken.")
#             else:
#                 print("Please enter a number between 1 and 9.")
#         except ValueError:
#             print("Invalid input. Please enter a number.")

# def check_win(board):
#     #"""Checks if there is a win on the board"""
#     lines = []
#     lines.extend(board)  # Rows
#     lines.extend([list(x) for x in zip(*board)])  # Columns
#     lines.append([board[i][i] for i in range(3)])  # Diagonal
#     lines.append([board[i][2 - i] for i in range(3)])  # Anti-diagonal
    
#     for line in lines:
#         if line.count(line[0]) == 3:
#             return line[0]
#     return None

# def check_tie(board):
#     #"""Checks if the board is full without a winner"""
#     for row in board:
#         if any(col not in ['X', 'O'] for col in row):
#             return False
#     return True

# def play_game():
#     board = initialize_board()
#     current_player = 'X'
    
#     while True:
#         print_board(board)
#         player_move(board, current_player)
        
#         if check_win(board):
#             print_board(board)
#             print(f"Player {current_player} wins! You are King of the World!")
#             break
#         if check_tie(board):
#             print_board(board)
#             print("It's a tie!")
#             break
        
#         current_player = 'O' if current_player == 'X' else 'X'

# def ask_replay():
#     #"""Asks the players if they want to play again"""
#     while True:
#         response = input("Do you want to play again? (yes/no): ").lower()
#         if response in ['yes', 'y']:
#             return True
#         elif response in ['no', 'n']:
#             return False
#         else:
#             print("Invalid input. Please answer 'yes' or 'no'.")

# if __name__ == '__main__':
#     while True:
#         play_game()
#         if not ask_replay():
#             print("OK, but I know you will be back.")
#             break





# #Hangman
import random

def display_word(word, guessed_letters):
    display = ''
    for letter in word:
        if letter in guessed_letters:
            display += letter
        else:
            display += '*'
    return display

def display_hangman(incorrect_guesses):
    stages = [
        """
           ------
           |    |
           |
           |
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |    |
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|\\
           |
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|\\
           |   /
           |
        --------
        """,
        """
           ------
           |    |
           |    O
           |   /|\\
           |   / \\
           |
        --------
        """,
        
    ]
    print(stages[incorrect_guesses])

def hangman():
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    word = random.choice(wordslist)
    guessed_letters = []
    attempts = 6
    incorrect_guesses = 0
    
    print("Welcome to Hangman!")
    print("Try to guess the word. You have 6 attempts.")

    while attempts > 0:
        print("\nWord:", display_word(word, guessed_letters))
        display_hangman(incorrect_guesses)
        guess = input("Guess a letter: ").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("You already guessed that letter.")
            continue
        
        guessed_letters.append(guess)
        
        if guess in word:
            print("Correct!")
            if display_word(word, guessed_letters) == word:
                print("Congratulations! You guessed the word:", word)
                break
        else:
            print("Incorrect!")
            attempts -= 1
            incorrect_guesses += 1
            print("Attempts left:", attempts)
            if attempts == 0:
                print("Sorry, you ran out of attempts. The word was:", word)
                break

hangman()







