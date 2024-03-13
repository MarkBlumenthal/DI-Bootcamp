#Daily-challenge: Part one
# class Text:
#     def __init__(self, text):
#         self.text = text

#     def word_frequency(self, word):
#         word_list = self.text.split()
#         frequency = word_list.count(word)
#         if frequency == 0:
#             return f"The word '{word}' does not appear in the text."
#         else:
#             return f"The word '{word}' appears {frequency} times in the text."

#     def most_common_word(self):
#         word_list = self.text.split()
#         word_count = {}
#         for word in word_list:
#             if word in word_count:
#                 word_count[word] += 1
#             else:
#                 word_count[word] = 1
#         most_common_word = max(word_count, key=word_count.get)
#         return most_common_word

#     def unique_words(self):
#         word_list = self.text.split()
#         unique_words = list(set(word_list))
#         return unique_words

# # Example usage:
# text = "A good book would sometimes cost as much as a good house."
# text_analysis = Text(text)
# print(text_analysis.word_frequency("good"))
# print("Most common word:", text_analysis.most_common_word())
# print("Unique words:", text_analysis.unique_words())




#part two
class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        word_list = self.text.split()
        frequency = word_list.count(word)
        if frequency == 0:
            return f"The word '{word}' does not appear in the text."
        else:
            return f"The word '{word}' appears {frequency} times in the text."

    def most_common_word(self):
        word_list = self.text.split()
        word_count = {}
        for word in word_list:
            if word in word_count:
                word_count[word] += 1
            else:
                word_count[word] = 1
        most_common_word = max(word_count, key=word_count.get)
        return most_common_word

    def unique_words(self):
        word_list = self.text.split()
        unique_words = list(set(word_list))
        return unique_words

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)

# Example usage:
text_analysis = Text.from_file('the_stranger.txt')
print(text_analysis.word_frequency("the"))
print("Most common word:", text_analysis.most_common_word())
print("Unique words:", text_analysis.unique_words())
