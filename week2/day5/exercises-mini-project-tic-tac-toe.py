def initialize_board():
    """Creates a 3x3 board initialized with numbers 1 to 9"""
    return [[str(i + j * 3 + 1) for i in range(3)] for j in range(3)]

def print_board(board):
    """Prints the board"""
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def player_move(board, player):
    """Allows a player to make a move"""
    while True:
        try:
            move = int(input(f"Player {player}, choose a position (1-9): "))
            if 1 <= move <= 9:
                row, col = (move - 1) // 3, (move - 1) % 3
                if board[row][col] not in ['X', 'O']:
                    board[row][col] = player
                    break
                else:
                    print("This position is already taken.")
            else:
                print("Please enter a number between 1 and 9.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def check_win(board):
    """Checks if there is a win on the board"""
    # Check rows, columns and diagonals
    lines = []
    lines.extend(board)  # Rows
    lines.extend([list(x) for x in zip(*board)])  # Columns
    lines.append([board[i][i] for i in range(3)])  # Diagonal
    lines.append([board[i][2 - i] for i in range(3)])  # Anti-diagonal
    
    for line in lines:
        if line.count(line[0]) == 3:
            return line[0]
    return None

def check_tie(board):
    """Checks if the board is full without a winner"""
    for row in board:
        if any(col not in ['X', 'O'] for col in row):
            return False
    return True

def play_game():
    board = initialize_board()
    current_player = 'X'
    
    while True:
        print_board(board)
        player_move(board, current_player)
        
        if check_win(board):
            print_board(board)
            print(f"Player {current_player} wins!")
            break
        if check_tie(board):
            print_board(board)
            print("It's a tie!")
            break
        
        current_player = 'O' if current_player == 'X' else 'X'

if __name__ == '__main__':
    play_game()


