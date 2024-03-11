#exercise-1: pets
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# cat1 = Bengal('Betty', 7)
# cat2 = Chartreux('Chappy', 1)
# cat3 = Siamese('Lovely', 4)

# all_cats = [cat1, cat2, cat3]

# sara_pets = Pets(all_cats)

# sara_pets.walk()




#exercise-2: dogs
# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f"{self.name} is barking"

#     def run_speed(self):
    
#         if self.age > 0:
#             return self.weight / self.age * 10
#         else:
#             return 0

#     def fight(self, other_dog):
#         my_power = self.run_speed() * self.weight
#         other_power = other_dog.run_speed() * other_dog.weight
#         if my_power > other_power:
#             return f"{self.name} won the fight"
#         elif my_power < other_power:
#             return f"{other_dog.name} won the fight"
#         else:
#             return "The fight ended in a draw"

# dog1 = Dog("Klaus", 7, 50)
# dog2 = Dog("Piglet", 10, 25)
# dog3 = Dog("Shredder", 3, 10)

# print(dog1.bark())
# print(f"Klaus running speed is {dog1.run_speed()}") 

# print(dog1.fight(dog2))
# print(dog2.fight(dog3))
# print(dog3.fight(dog1))





#exercise-4: family
# class Family:
#     def __init__(self, last_name, members):
#         self.last_name = last_name
#         self.members = members

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print("Congratulations! A new member has been added to the family.")

#     def is_18(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 return member['age'] >= 18
#         return False

#     def family_presentation(self):
#         print(f"Family Name: {self.last_name}")
#         print("Members:")
#         for member in self.members:
#             print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

# my_family = Family(last_name="Blumenthal", members=[
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
# ])

# my_family.born(name='John', age=0, gender='Male', is_child=True)
# print("Is Michael over 18?", my_family.is_18('Michael'))
# print("Is Sarah over 18?", my_family.is_18('Sarah'))
# my_family.family_presentation()




#exercise-5: the incredibles family
# class Family:
#     def __init__(self, last_name, members):
#         self.last_name = last_name
#         self.members = members

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print("Congratulations! A new member has been added to the family.")

#     def is_18(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 return member['age'] >= 18
#         return False

#     def family_presentation(self):
#         print(f"Family Name: {self.last_name}")
#         print("Members:")
#         for member in self.members:
#             print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")


# class TheIncredibles(Family):
#     def use_power(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 if member['age'] >= 18:
#                     print(f"{member['name']} can use the power: {member['power']}")
#                 else:
#                     raise ValueError(f"{member['name']} is not over 18 years old.")

#     def incredible_presentation(self):
#         print("* Here is our powerful family *")
#         super().family_presentation()
#         print("Powers:")
#         for member in self.members:
#             print(f"Name: {member['name']}, Power: {member['power']}")


# incredible_family = TheIncredibles(last_name="Incredibles", members=[
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
# ])

# incredible_family.incredible_presentation()

# incredible_family.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='Jack')

# incredible_family.incredible_presentation()







