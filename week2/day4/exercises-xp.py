# #exercise-1: what are you learning
# def display_message():
#     message = "I am learing full-stack development."
    
#     print(message)
# display_message()
# #answer - correct




#exercise-2: whats your favourite book
# def favorite_book(title):

#  print("One of my favorite books is " + title)
# favorite_book("Lord Of The Rings")
# #answer-correct




#exercise-3: Some Geogpraphy
# def describe_city(city, country="Unknown"):
#     print(city + " is in " + country)

# describe_city("Tel Aviv", "Israel")
# #answer-correct





#exercise-4: Random
# import random

# def compare_numbers(user_number):
#     random_number = random.randint(1, 100)

#     if user_number == random_number:
#         print("Congratulations! You guessed the correct number:", user_number)
#     else:
#         print("Sorry, you didn't guess the correct number.")
#         print("Your number:", user_number)
#         print("Random number:", random_number)

# user_input = int(input("Enter a number between 1 and 100: "))
# compare_numbers(user_input)
# #answer-correct




#exercise-5: lets create some personalized shirts
#def make_shirt(size, message):
    #print(f"The size of the shirt is {size} and the text is '{message}'.")

#make_shirt("Medium", "May the Force be with you, Always!")

# def make_shirt(size="medium", message="I love Python"):
#     print(f"The size of the shirt is {size} and the text is '{message}'.")
#     print(f"The size of the shirt is {size} and the text is '{message}'.")

# make_shirt()

# make_shirt("Small", "relax brother")

# answer-correct




#exercise-6: Magicians
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# def show_magicians(magicians):
#     for magician in magicians:
#         print(magician)

# def make_great(magicians):
#     for i in range(len(magicians)):
#         magicians[i] += " the Great"

# make_great(magician_names)

# show_magicians(magician_names)
# answer-correct




#exercise-7: temperature advise
# import random

# def get_random_temp():
#     return random.randint(-10, 40)

# random_temp = get_random_temp()
#print("Random temperature:", random_temp, "degrees Celsius")

# def main():

#     temperature = get_random_temp()
#     #print(f"The temperature right now is {temperature} degrees Celsius.")

# main()

# def main():
#     temperature = float(input("Enter the temperature in Celsius: "))
    
#     if temperature < 0:
#         #print("Brrr, thats freezing! Wear some extra layers today.")
#     elif 0 <= temperature <= 16:
#         #print("cold and cloudy.")
#     elif 16 < temperature <= 23:
#         #print("The perfect temperature")
#     elif 24 <= temperature <= 32:
#         #print("Warm & nice.")
#     elif 32 < temperature <= 40:
#         #print("Very Hot.")

# if __name__ == "__main__":
#     main()

# import random

# def get_random_temp(season):
#     if season.lower() == 'summer':
#         return random.randint(24, 40)
#     elif season.lower() == 'autumn' or season.lower() == 'fall':
#         return random.randint(16, 23)
#     elif season.lower() == 'winter':
#         return random.randint(-10, 16)
#     elif season.lower() == 'spring':
#         return random.randint(16, 24)
#     else:
#         print("Invalid season entered.")
#         return None

# def main():
#     season = input("Enter the season (summer, autumn, winter, spring): ")
#     temperature = get_random_temp(season)
    
#     if temperature is not None:
#         if temperature < 0:
#             print("Brrr, that’s freezing! Wear some extra layers today.")
#         elif 0 <= temperature <= 16:
#             print("Quite chilly! Don’t forget your coat.")
#         elif 16 < temperature <= 23:
#             print("It's a pleasant temperature. Enjoy your day!")
#         elif 24 <= temperature <= 32:
#             print("Nice and warm! Perfect weather to be outside.")
#         elif 32 < temperature <= 40:
#             print("Hot day ahead! Stay hydrated and keep cool.")

# if __name__ == "__main__":
#     main()

# import random

# def get_random_temp(month):
#     season = None
#     if 3 <= month <= 5:
#         season = 'spring'
#     elif 6 <= month <= 8:
#         season = 'summer'
#     elif 9 <= month <= 11:
#         season = 'autumn'
#     else:
#         season = 'winter'
    
#     if season == 'summer':
#         return round(random.uniform(24, 40), 1)
#     elif season == 'autumn':
#         return round(random.uniform(16, 23), 1)
#     elif season == 'winter':
#         return round(random.uniform(-10, 16), 1)
#     elif season == 'spring':
#         return round(random.uniform(16, 24), 1)

# def main():
#     month = int(input("Enter the number of the month (1-12): "))
#     temperature = get_random_temp(month)
#     print(f"The temperature right now is {temperature} degrees Celsius.")

#     if temperature < 0:
#         print("Freezing to the bone.")
#     elif 0 <= temperature <= 16:
#         print("cold and wet.")
#     elif 16 < temperature <= 23:
#         print("what a lovely day")
#     elif 24 <= temperature <= 32:
#         print("warm, go play outside")
#     elif 32 < temperature <= 40:
#         print("boiling, put on airconditioner")

# if __name__ == "__main__":
#     main()
# #answer -correct




#exercise-8: Star Wars quiz
# def play_star_wars_quiz(questions):
#     correct_answers = 0
#     incorrect_answers = 0
#     wrong_answers = []

#     for question_data in questions:
#         question = question_data["question"]
#         correct_answer = question_data["answer"]
#         user_answer = input(question + " ")

#         if user_answer.lower() == correct_answer.lower():
#             print("Correct!")
#             correct_answers += 1
#         else:
#             print("Incorrect! The correct answer is:", correct_answer)
#             incorrect_answers += 1
#             wrong_answers.append((question, user_answer, correct_answer))

#     display_results(correct_answers, incorrect_answers, wrong_answers)


# def display_results(correct_answers, incorrect_answers, wrong_answers):
#     print("\nQuiz Results:")
#     print("Correct Answers:", correct_answers)
#     print("Incorrect Answers:", incorrect_answers)

#     if incorrect_answers > 1:
#         print("\nYou had more than 3 wrong answers. Would you like to play again? (yes/no)")
#         play_again = input().lower()
#         if play_again == "yes":
#             play_star_wars_quiz(data)
#         else:
#             print("Thank you for playing!")

#     if wrong_answers:
#         print("\nQuestions you answered incorrectly:")
#         for idx, wrong_answer in enumerate(wrong_answers, start=1):
#             print(f"\n{idx}. Question: {wrong_answer[0]}")
#             print(f"Your Answer: {wrong_answer[1]}")
#             print(f"Correct Answer: {wrong_answer[2]}")


# data = [
#     {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
#     {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
#     {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
#     {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
#     {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
#     {"question": "What species is Chewbacca?", "answer": "Wookiee"}
# ]

# play_star_wars_quiz(data)
# #answer-correct




