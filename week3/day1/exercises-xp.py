#exercise-1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("benjy", 2)
# cat2 = Cat("shredder", 11)
# cat3 = Cat("shoosh", 6)

# def find_oldest_cat(*cats):
#     oldest_cat = cats[0]
#     for cat in cats[1:]:
#         if cat.age > oldest_cat.age:
#             oldest_cat = cat
#     return oldest_cat

# oldest = find_oldest_cat(cat1, cat2, cat3)

# print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")




#exercise-2
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
    
#     def bark(self):
#         print(f"{self.name} goes woof!")
    
#     def jump(self):
#         jump_height = self.height * 2
#         print(f"{self.name} jumps {jump_height} cm high!")

# davids_dog = Dog("Rex", 50)
# print(f"David's dog: Name - {davids_dog.name}, Height - {davids_dog.height}cm")
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", 20)
# print(f"Sarah's dog: Name - {sarahs_dog.name}, Height - {sarahs_dog.height}cm")
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print(f"The bigger dog is {davids_dog.name}")
# elif sarahs_dog.height > davids_dog.height:
#     print(f"The bigger dog is {sarahs_dog.name}")





#exercise-3
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
    
#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])

# stairway.sing_me_a_song()




#exercise-4
# class Zoo:
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []

#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)
#             print(f"{new_animal} added to the zoo.")
#         else:
#             print(f"{new_animal} is already in the zoo.")

#     def get_animals(self):
#         print("Animals in the zoo:")
#         for animal in self.animals:
#             print(animal)

#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#             print(f"{animal_sold} has been sold.")
#         else:
#             print(f"{animal_sold} is not in the zoo.")

#     def sort_animals(self):
#         sorted_animals = {}
#         for animal in sorted(self.animals):
#             first_letter = animal[0].upper()
#             if first_letter not in sorted_animals:
#                 sorted_animals[first_letter] = [animal]
#             else:
#                 sorted_animals[first_letter].append(animal)
#         return sorted_animals

#     def get_groups(self):
#         sorted_animals = self.sort_animals()
#         for index, animals in enumerate(sorted_animals.values(), start=1):
#             print(f"{index}: {animals}")

# ramat_gan_safari = Zoo("Ramat Gan Safari")

# ramat_gan_safari.add_animal("Lion")
# ramat_gan_safari.add_animal("Tiger")
# ramat_gan_safari.add_animal("Bear")
# ramat_gan_safari.add_animal("Baboon")
# ramat_gan_safari.add_animal("Ardvark")
# ramat_gan_safari.add_animal("Monkey")
# ramat_gan_safari.add_animal("Cougar")
# ramat_gan_safari.add_animal("Emu")
# ramat_gan_safari.add_animal("Giraffe")
# ramat_gan_safari.add_animal("Lion")  
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal("Tiger")
# ramat_gan_safari.get_animals()
# print("Sorted animals:")
# print(ramat_gan_safari.sort_animals())
# print("Groups of animals:")
# ramat_gan_safari.get_groups()
