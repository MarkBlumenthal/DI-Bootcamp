# #Challenge-1:
# word = input("Enter a word: ")

# letter_indexes = {}
# for index, letter in enumerate(word):
#     letter = str(letter)
    
#     if letter in letter_indexes:
#         letter_indexes[letter].append(index)
#     else:
#         letter_indexes[letter] = [index]

# print("Dictionary with letter indexes:")
# print(letter_indexes)
#answer correct

#Challenge-2:
# def afford_items(wallet, items):
#     affordable_items = []
#     wallet = float(wallet.replace('$', '').replace(',', ''))  
#     for item, price in items.items():
#         if price <= wallet:
#             affordable_items.append(item)
#     return sorted(affordable_items) if affordable_items else ["Nothing"]

# def main():
#     wallet = input("Enter the amount of money you have in your wallet: ")
#     items = {
#         "apple": 20.00,
#         "banana": 5.00,
#         "orange": 1.50,
#         "pan": 500.00,
#         "bread": 1.50,
#         "TV": 3000.00,
#     }

#     affordable_items = afford_items(wallet, items)

#     print("You can afford the following items:")
#     for item in affordable_items:
#         print("- " + item)

# if __name__ == "__main__":
#     main()
#answer correct