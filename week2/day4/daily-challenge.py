#daily-challenge: Solve the Matrix
matrix_str = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

def decrypt_matrix(matrix_str):
    matrix = [list(row) for row in matrix_str.split('\n')]

    decrypted_message = ""

    for col in range(len(matrix[0])):
        word = ""  
        for row in range(len(matrix)):
            if matrix[row][col].isalpha():
                word += matrix[row][col]
           
            elif matrix[row][col] == ' ': 
                word += " "
        decrypted_message += word.strip() + " "

    return decrypted_message.strip()  

decrypted_message = decrypt_matrix(matrix_str)

print(decrypted_message.replace('r ', 'r'))
#answer - This is Matrix




















