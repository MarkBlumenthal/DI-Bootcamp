#exercise-3: dogs domesticated

# from dog import Dog
# import random

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
