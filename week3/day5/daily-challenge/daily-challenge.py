#part-1: quizz

# In Python, a class is a blueprint for creating objects (instances). It defines attributes (variables) and methods (functions) that belong to the objects created from it.


# An instance is a specific realization of a class. It is an individual object created from a class, which has its own unique attributes and methods.


# Encapsulation is the bundling of data (attributes) and methods that operate on the data into a single unit, i.e., a class. It hides the internal state of objects and restricts access to them from outside the class, except through defined methods.


# Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It allows us to focus on what an object does rather than how it does it.


# Inheritance is a mechanism in which a new class inherits properties and behaviors (attributes and methods) from an existing class. The new class is called a subclass or derived class, and the existing class is called the superclass or base class.


# Multiple inheritance is a feature in some object-oriented programming languages, including Python, where a class can inherit attributes and methods from more than one superclass.


# Polymorphism allows objects of different classes to be treated as objects of a common superclass. It refers to the ability of different objects to respond to the same message or method call in different ways.


# Method Resolution Order is the order in which methods are searched for and called in the context of inheritance. In Python, the MRO defines the sequence in which Python looks for a method in the hierarchy of classes. 




#part-2: Deck of Cards

# import random

# class DeckOfCards:
#     def __init__(self):
#         self.cards = []
#         self.reset()

#     def reset(self):
#         suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
#         values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
#         self.cards = [{'suit': suit, 'value': value} for suit in suits for value in values]

#     def shuffle(self):
#         random.shuffle(self.cards)

#     def deal(self):
#         if not self.cards:
#             return None
#         return self.cards.pop()

# def main():
#     deck = DeckOfCards()
#     deck.shuffle()

#     print("Welcome to the Deck Of Cards!")
#     while True:
#         user_input = input("Do you want another card? (yes/no): ").lower()
#         if user_input == 'yes':
#             card = deck.deal()
#             if card:
#                 print(f"Dealt card: {card['value']} of {card['suit']}")
#             else:
#                 print("Deck of Cards is empty.")
#                 break
#         elif user_input == 'no':
#             print("No more cards will be dealt. Have a nice life!")
#             break
#         else:
#             print("Dont be stupid, it's a yes or no question. Please enter 'yes' or 'no'.")

# if __name__ == "__main__":
#     main()




import random

class DeckOfCards:
    def __init__(self):
        self.cards = []
        self.reset()

    def reset(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = [{'suit': suit, 'value': value} for suit in suits for value in values]

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            return None
        return self.cards.pop()

def card_ascii(card):
    if card['value'] == '10':
        value = '10'
    else:
        value = card['value'][0]  # Get the first character of the value
    suit_symbol = {
        'Hearts': '\u2665',
        'Diamonds': '\u2666',
        'Clubs': '\u2663',
        'Spades': '\u2660'
    }[card['suit']]
    return f"""
┌───────┐
│ {value:<2}    │
│       │
│   {suit_symbol}   │
│       │
│    {value:>2} │
└───────┘
"""

def deal_and_display_card(deck):
    card = deck.deal()
    if card:
        card_description = f"{card['value']} of {card['suit']}"
        print(f"Dealt card: {card_description}")

        card_art = card_ascii(card)
        print(card_art)

    else:
        print("Deck of Cards is empty.")

def main():
    print("Welcome to the Deck Of Cards!")
    while True:
        deck = DeckOfCards()
        deck.shuffle()
        while True:
            user_input = input("Do you want another card? (yes/no): ").lower()
            if user_input == 'yes':
                deal_and_display_card(deck)
                if not deck.cards:  # Check if the deck is empty
                    print("Deck of Cards is empty.")
                    break  # Break out of the inner loop if the deck is empty
            elif user_input == 'no':
                print("Well goodbye, have a nice life!")
                return
            else:
                print("Don't be stupid, it's a yes or no question. Please enter 'yes' or 'no'.")


if __name__ == "__main__":
    main()





