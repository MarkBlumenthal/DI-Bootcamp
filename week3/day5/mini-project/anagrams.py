from anagram_checker import AnagramChecker

def validate_input(word):
    # Check if only one word is entered
    if len(word.split()) > 1: #This line checks if more than one word has been entered. It splits the input word by whitespace using the split() method and then checks if the resulting list has a length greater than 1. If so, it prints an error message and returns False, indicating that the input is invalid.
        print("Error: Only one word is allowed.")
        return False
    
    # Check if only alphabetic characters are entered
    if not word.isalpha(): #isalpha() method returns True if all characters in the string are alphabetic
        print("Error: Only alphabetic characters are allowed.")
        return False
    
    return True

def display_anagrams(word, anagrams):
    print(f"YOUR WORD: \"{word}\"")
    if anagrams:
        print("This is a valid English word.")
        print("Anagrams for your word:", ", ".join(anagrams))
    else:
        print("This is a valid English word but it has no anagrams.")

def main():
    # Create an instance of AnagramChecker
    anagram_checker = AnagramChecker("sowpods.txt")

    while True:
        print("\n1. Input a word")
        print("2. Exit")
        choice = input("Enter your choice (1 or 2): ")

        if choice == '1':
            word = input("Enter a word: ").strip()
            if validate_input(word):
                anagrams = anagram_checker.get_anagrams(word)
                display_anagrams(word, anagrams)
        elif choice == '2':
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
