#exercise-1:set
#my_fav_numbers = {2, 4, 8, 14, 29}

#my_fav_numbers.add(12)  
#my_fav_numbers.add(23)  
#my_fav_numbers.remove(max(my_fav_numbers))

#friend_fav_numbers = {14, 16, 20, 100, 50}
#our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

#print(our_fav_numbers)
#answer {2, 4, 100, 8, 12, 14, 16, 50, 20, 23}


#exercise-2: Tuple
#original_tuple = (3, 6, 9)
#new_integers = (12, 15, 18)
#new_tuple = original_tuple + new_integers

#print(new_tuple)
#answer (3, 6, 9, 12, 15, 18)


#exercise-3: list
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#print(basket)
#answer ['Banana', 'Apples', 'Oranges', 'Blueberries']

basket.remove("Banana")
#print(basket)
# answer ['Apples', 'Oranges', 'Blueberries']

basket.remove("Blueberries")
#print(basket)
# answer ['Apples', 'Oranges']

basket.append("Kiwi")
#print(basket)
#answer ['Apples', 'Oranges', 'Kiwi']

basket.insert(0, "Apples")
#print(basket)
#answer ['Apples', 'Apples', 'Oranges', 'Kiwi']

apple_count = basket.count("Apples")
#print("Number of Apples:", apple_count)
#answer 2

basket.clear()
#print(basket)
#answer []


#exercise-4: floats
# A float is a fractional number & an integer is a whole number
1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5

#sequence = [x / 2 for x in range(3, 11)]
#print(sequence)

#start = 1.5
#step = 0.5
#num_elements = 8
#sequence = [start + i * step for i in range(num_elements)]

#print(sequence)
#answer [1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]


#exercise-5: for loop
#for number in range(1, 21):
    #print(number)

#for i in range(1, 21):
    #if i % 2 == 0:
        #print(i)
#answer correct

#exercise-6: while loop
#your_name = "Mark Blumenthal"
#user_name = input("Please enter your name: ")
#while user_name != your_name:
    #user_name = input("Please enter your name: ")

#print(f"Hello, {your_name}!")
#answer = correct


#exercise-7: favourite fruits

#favorite_fruits_str = input("Please enter your favorite fruit(s) separated by a single space, e.g., 'apple mango cherry': ")
#favorite_fruits = favorite_fruits_str.split()
#chosen_fruit = input("Now, enter a name of any fruit: ")
#if chosen_fruit in favorite_fruits:
    #print("You chose one of your favorite fruits! Enjoy!")
#else:
    #print("You chose a new fruit. I hope you enjoy!")
#answer correct

#exercise-8: who ordered a pizza

#toppings = []
#print("Enter pizza toppings (type 'quit' to finish):")
#while True:
    #topping = input("Enter a topping: ")
    #if topping.lower() == 'quit':
        #break
    #toppings.append(topping)
    #print(f"Adding {topping} to your pizza.")
#total_price = 10 + 2.5 * len(toppings)


#print("\nYour pizza toppings:")
#for topping in toppings:
    #print("- " + topping)
#print(f"\nTotal price: ${total_price:.2f}")
#answer correct


#exercise-9:cinemax
#total_cost = 0

#num_people = int(input("How many people are in your family? "))
#for i in range(1, num_people + 1):
    #age = int(input(f"Enter the age of person {i}: "))
    
    #if age < 3:
        #ticket_price = 0
    #elif 3 <= age <= 12:
        #ticket_price = 10
    #else:
        #ticket_price = 15
    #total_cost += ticket_price

#print(f"The total cost of all the family's tickets is ${total_cost}.")


#names = ["Mark", "Aviv", "Klaus", "Piglet"]
#allowed_names = []
#for name in names:
    #age = int(input(f"What is {name}'s age? "))
    #if 16 <= age <= 21:
        #allowed_names.append(name)

#print("Teenagers permitted to watch the movie:")
#for name in allowed_names:
    #print(name)
#answer correct
    

#exercise-10:

#sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#while "Pastrami sandwich" in sandwich_orders:
    #sandwich_orders.remove("Pastrami sandwich")

#finished_sandwiches = []


#print("\nList of finished sandwiches:")
#for sandwich in finished_sandwiches:
    #print(sandwich)

#while sandwich_orders:
    #sandwich = sandwich_orders.pop(0)  
    #finished_sandwiches.append(sandwich)  
    #print(f"I made your {sandwich.lower()}")
#could not get it








    
