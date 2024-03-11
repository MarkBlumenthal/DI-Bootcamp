#exercise-3: dogs domesticated

# from dog import Dog  
# import random

# # Assuming you have created instances of Dog class in the previous code and stored them in variables dog1, dog2, etc.

# class PetDog(Dog):
#     def __init__(self, name, age, weight):
#         super().__init__(name, age, weight)
#         self.trained = False

#     def train(self):
#         print(self.bark())
#         self.trained = True

#     def play(self, *args):
#         dog_names = [self.name] + [dog.name for dog in args]
#         print(f"{', '.join(dog_names)} all play together.")

#     def do_a_trick(self):
#         if self.trained:
#             tricks = [f"{self.name} does a barrel roll.",
#                       f"{self.name} stands on his back legs.",
#                       f"{self.name} shakes your hand.",
#                       f"{self.name} plays dead."]
#             print(random.choice(tricks))
#         else:
#             print(f"{self.name} is not trained yet.")

# # Assuming you have created instances of Dog class in the previous code and stored them in variables dog1, dog2, etc.
# dog1 = Dog("Klaus", 7, 50)
# dog2 = Dog("Piglet", 10, 25)
# dog3 = Dog("Shredder", 3, 10)

# # Creating an instance of PetDog
# my_pet = PetDog("Your Pet", 2, 10)

# # Training the pet
# my_pet.train()

# # Doing a trick
# my_pet.do_a_trick()

# # Playing with other dogs
# my_pet.play(dog1, dog2, dog3)







