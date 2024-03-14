class ChessGame:
    def __init__(self):
        self.board = self.create_board()
        self.current_player = 'white'
        self.game_over = False

    def create_board(self):
        # Chess pieces represented using Unicode characters
        pieces = {
            'white': {
                'king': '\u2654', 'queen': '\u2655', 'rook': '\u2656',
                'bishop': '\u2657', 'knight': '\u2658', 'pawn': '\u2659'
            },
            'black': {
                'king': '\u265A', 'queen': '\u265B', 'rook': '\u265C',
                'bishop': '\u265D', 'knight': '\u265E', 'pawn': '\u265F'
            }
        }
        board = [
            [pieces['black']['rook'], pieces['black']['knight'], pieces['black']['bishop'],
             pieces['black']['queen'], pieces['black']['king'], pieces['black']['bishop'],
             pieces['black']['knight'], pieces['black']['rook']],
            [pieces['black']['pawn']] * 8,
            [' '] * 8,
            [' '] * 8,
            [' '] * 8,
            [' '] * 8,
            [pieces['white']['pawn']] * 8,
            [pieces['white']['rook'], pieces['white']['knight'], pieces['white']['bishop'],
             pieces['white']['queen'], pieces['white']['king'], pieces['white']['bishop'],
             pieces['white']['knight'], pieces['white']['rook']]
        ]
        return board

    def print_board(self):
        # Print the chessboard with pieces
        print("  +----------------------------------+")
        for i in range(8):
            print(f"{8 - i} | {' | '.join(self.board[i])} | {8 - i}")
            print("  +----------------------------------+")
        print("    a   b   c   d   e   f   g   h")

    def move_piece(self, start, end):
        start_row, start_col = start
        end_row, end_col = end
        piece = self.board[start_row][start_col]
        if piece == ' ':
            print("No piece found at starting position.")
            return False
        if self.current_player == 'white' and piece.islower():
            print("It's white's turn.")
            return False
        if self.current_player == 'black' and piece.isupper():
            print("It's black's turn.")
            return False

        # Check for valid move
        if self.is_valid_move(start, end):
            self.board[end_row][end_col] = piece
            self.board[start_row][start_col] = ' '
            self.current_player = 'black' if self.current_player == 'white' else 'white'
            return True
        else:
            print("Invalid move.")
            return False

    def is_valid_move(self, start, end):
        # Basic validation, just checks if the end position is empty
        end_row, end_col = end
        if self.board[end_row][end_col] == ' ':
            return True
        return False


# Example usage:
game = ChessGame()
game.print_board()

while not game.game_over:
    start = input("Enter start position (e.g., 'a2'): ")
    end = input("Enter end position (e.g., 'a4'): ")
    start_row, start_col = ord(start[1]) - 49, ord(start[0]) - 97
    end_row, end_col = ord(end[1]) - 49, ord(end[0]) - 97
    if game.move_piece((start_row, start_col), (end_row, end_col)):
        print("Move successful.")
        game.print_board()
    else:
        print("Move failed.")




