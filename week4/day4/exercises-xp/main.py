# main.py

from menu_item import MenuItem
from menu_manager import MenuManager

# Create an instance of MenuItem and perform operations
item = MenuItem('Burger', 35)
item.save()  # Save the item to the database
item.delete()  # Delete the item from the database
item.update('Veggie Burger', 37)  # Update the item's name and price in the database

# Retrieve an item by name using MenuManager
item2 = MenuManager.get_by_name('Beef Stew')

# Retrieve all items using MenuManager
items = MenuManager.all()

# Print or further process retrieved items as needed
print(item2)
print(items)
