# exercise-1: Convert Lists Into Dictionaries
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# pairs = zip(keys, values)
# result_dict = dict(pairs)

# #print(result_dict)
# #answer - {'Ten': 10, 'Twenty': 20, 'Thirty': 30}


#exercise-2: cinemax
# def calculate_ticket_price(age):
#     if age < 3:
#         return 0  
#     elif age >= 3 and age <= 12:
#         return 10  
#     else:
#         return 15  

# family = {}
# num_family_members = int(input("Enter the number of family members: "))
# for i in range(num_family_members):
#     name = input(f"Enter the name of family member {i+1}: ")
#     age = int(input(f"Enter the age of family member {i+1}: "))
#     family[name] = age

# total_cost = 0
# print("Ticket prices for each family member:")
# for name, age in family.items():
#     ticket_price = calculate_ticket_price(age)
#     total_cost += ticket_price
#     print(f"{name.capitalize()} has to pay {ticket_price}.")


# print(f"\nThe family's total cost for the movies is {total_cost}.")
# #answer correct

#exercise-3:zara
# brand = {
#     "name": "Zara",
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"],
#     "number_stores": 7000,
#     "major_color": {
#         "France": "blue",
#         "Spain": "red",
#         "US": ["pink", "green"]
#     }
# }
# if "creation_date" in brand:
#     brand.pop("creation_date")

# brand["country_creation"] = "Spain"
# if "international_competitors" in brand:
#     brand["international_competitors"].append("Desigual")
# else:
#     brand["international_competitors"] = ["Desigual"]
    
# brand["number_stores"] = 2
# print(brand)
# print("Zara's clients are men, women, and children.")

# last_competitor = brand["international_competitors"][-1]

# print("The last international competitor is:", last_competitor)

# us_colors = brand["major_color"]["US"]
# print("The major clothes colors in the US are:", ", ".join(us_colors))

# num_pairs = len(brand)
# print("The number of key-value pairs in the dictionary is:", num_pairs)

# keys = brand.keys()
# print("Keys of the dictionary:", keys)

# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000
# }

# brand.update(more_on_zara)

# print("Updated brand dictionary:",brand)

# print("Value of the key 'number_stores':", brand["number_stores"])
# #answer - 10000

#exercise-4:Disney characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#disney_users_A = {}
#names = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#for index, name in enumerate(names):
    #disney_users_A[name] = index

#print(disney_users_A)
#disney_users_B = {}
#names = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
#for index, name in enumerate(names):
    #disney_users_B[index] = name

#print(disney_users_B)

#disney_users_C = {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
#disney_users_C = {key: value for key, value in sorted(disney_users_C.items())}

#print(disney_users_C)

#disney_users_A = {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#result_with_i = {key: value for key, value in disney_users_A.items() if 'i' in key}

#print(result_with_i)

#disney_users_A = {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
#result_with_mp = {key: value for key, value in disney_users_A.items() if key[0].lower() in ['m', 'p']}

#print(result_with_mp)









