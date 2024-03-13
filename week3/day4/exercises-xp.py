#exercise-1: Random sentance generator
# import requests

# def download_word_list(url, save_path):
#     try:
#         response = requests.get(url)
#         response.raise_for_status()  # Raises an HTTPError 
#         with open(save_path, 'w') as file:
#             file.write(response.text)
#         # print(f"Word list successfully downloaded and saved to {save_path}")
#     except requests.RequestException as e:
#         print(f"An error occurred: {e}")

# # Example usage
# url = "https://norvig.com/ngrams/sowpods.txt"  # Replace this with the actual URL
# save_path = "word_list.txt"  # Replace with your desired file path
# download_word_list(url, save_path)


# def get_words_from_file(filepath):
#     with open(filepath, 'r') as file:
#         words = file.read().splitlines()  # This will read the file line by line and store each line as an element in the list
#     return words

# import random

# def get_random_sentence(length, words):
#     # Randomly choose 'length' number of words from the list 'words'
#     random_words = random.choices(words, k=length)
#     # Join the chosen words into a sentence
#     sentence = ' '.join(random_words).lower()
#     return sentence

# def main():
#     print("Hello!")
#     print("This program gives a random sentence based on a specified length.")
    
#     try:
#         # Ask the user for the length of the sentence
#         sentence_length = int(input("How long do you want the sentence to be (between 2 and 20)? "))
        
#         # Validate user input
#         if 2 <= sentence_length <= 20:
#             # If input is valid, proceed to generate and print the random sentence
#             words = get_words_from_file("word_list.txt") 
#             random_sentence = get_random_sentence(sentence_length, words)
#             print("Random Sentence:", random_sentence)
#         else:
#             # If input is not within the acceptable range, print an error message
#             print("Error: you entered a number not in the range requested.")
#     except ValueError:
#         # If user input cannot be converted to an integer, print an error message
#         print("Error: Please enter a valid integer.")

# if __name__ == "__main__":
#     main()





#exercise-2: working with Json
# import json

# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""

# # Parse the JSON string into a dictionary
# data = json.loads(sampleJson)

# # Access the nested “salary” key
# salary = data['company']['employee']['payable']['salary']
# print("Salary:", salary)

# # Add a key called “birth_date” to the JSON-string at the same level as the “name” key
# data['company']['employee']['birth_date'] = "1988-12-29"  # Example birth date

# # Save the dictionary as JSON to a file
# with open('output.json', 'w') as json_file:
#     json.dump(data, json_file, indent=4)
