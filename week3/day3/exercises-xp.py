#exercise-1:

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"{self.amount} {self.currency}s"

#     def __int__(self):
#         return self.amount

#     def __repr__(self):
#         return f"{self.amount} {self.currency}s"

#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             return self.amount + other.amount
#         elif isinstance(other, (int, float)):
#             return self.amount + other
#         else:
#             raise TypeError("Unsupported operand type(s) for +: 'Currency' and '{}'".format(type(other).__name__))

#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             self.amount += other.amount
#         elif isinstance(other, (int, float)):
#             self.amount += other
#         else:
#             raise TypeError("Unsupported operand type(s) for +=: 'Currency' and '{}'".format(type(other).__name__))
#         return self

# if __name__ == "__main__":
#     c1 = Currency('dollar', 5)
#     c2 = Currency('dollar', 10)
#     c3 = Currency('shekel', 1)
#     c4 = Currency('shekel', 10)

#     print(str(c1))  # '5 dollars'
#     print(int(c1))  # 5
#     print(repr(c1))  # '5 dollars'

#     print(c1 + 5)  # 10
#     print(c1 + c2)  # 15

#     print(c1)  # '5 dollars'

#     c1 += 5
#     print(c1)  # '10 dollars'

#     c1 += c2
#     print(c1)  # '20 dollars'

#     try:
#         print(c1 + c3)
#     except TypeError as e:
#         print(e)  # TypeError: Cannot add between Currency type <dollar> and <shekel>






#exercise-3: string module

# import string
# import random

# def generate_random_string(length=5):
#     # Combines uppercase and lowercase letters
#     letters = string.ascii_letters  # ascii_letters is a combination of ascii_lowercase and ascii_uppercase
#     # Generate random string
#     random_string = ''.join(random.choice(letters) for i in range(length))
#     return random_string

# # Example usage
# random_str = generate_random_string()
# print(random_str)




#exercise-4: current date

# import datetime

# def display_current_date():
#     current_date = datetime.date.today()
#     print("Current date:", current_date)

# # Call the function to display the current date
# display_current_date()




#exercise-5: amount of time left
# import datetime

# def time_left_until_january_1st():
#     # Get the current date and time
#     current_datetime = datetime.datetime.now()

#     # Get January 1st of the next year. the +1 add a year day and time
#     next_january_1st = datetime.datetime(current_datetime.year + 1, 1, 1)

#     # Calculate the time difference
#     time_difference = next_january_1st - current_datetime

#     # Extract days, hours, minutes, and seconds from the time difference, 
#     days = time_difference.days
#     hours, remainder = divmod(time_difference.seconds, 3600)#divides the number of seconds in an hour
#     minutes, seconds = divmod(remainder, 60) #divides number of seconds in a minute

#     # Print the time left
#     print(f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours")

# # Call the function to display the time left until January 1st
# time_left_until_january_1st()





#exercise-6: birthday & minutes

# import datetime

# def minutes_lived(birthdate):
#     # Get the current date and time
#     current_datetime = datetime.datetime.now()

#     # Calculate the difference between the current datetime and the birthdate
#     time_difference = current_datetime - birthdate

#     # Convert the time difference to minutes
#     minutes_lived = time_difference.total_seconds() / 60

#     # Display the result
#     print("You have lived for approximately {:.2f} minutes.".format(minutes_lived))

# # Example usage:
# # Assuming birthdate is in the format YYYY-MM-DD HH:MM:SS
# birthdate = datetime.datetime(1988, 12, 29, 12, 30, 0)
# minutes_lived(birthdate)




#exercise-7: faker module
# from faker import Faker
# import random

# # Initialize Faker
# fake = Faker()

# # Create an empty list called users as dictionaries
# users = []

# # Function to add new dictionaries to the users list
# def add_user():
#     user = {
#         'name': fake.name(),
#         'address': fake.address(),
#         'language_code': random.choice(['en', 'fr', 'es', 'de'])  # Example language codes
#     }
#     users.append(user)

# # Generating 5 fake users
# for _ in range(5):
#     add_user()

# # Printing the list of users
# for user in users:
#     print(user)

