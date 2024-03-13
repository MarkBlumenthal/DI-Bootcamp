class AnagramChecker:
    def __init__(self, word_list_file):
        with open(word_list_file, 'r') as file:
            self.word_list = [word.strip().lower() for word in file]

    def is_valid_word(self, word):
        return word.strip().lower() in self.word_list

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = [w for w in self.word_list if self.is_anagram(w, word) and w != word]
        return anagrams

# Example usage:
# Create an instance of AnagramChecker by providing the path to the word list file
anagram_checker = AnagramChecker("sowpods.txt")

# Check if a word is valid
print(anagram_checker.is_valid_word("apple"))  # Example output: True
print(anagram_checker.is_valid_word("xyz"))    # Example output: False

# Get anagrams for a word
print(anagram_checker.get_anagrams("meat"))    # Example output: ['mate', 'tame', 'team']
