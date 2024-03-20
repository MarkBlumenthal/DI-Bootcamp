# menu_editor.py
from menu_item import MenuItem
from menu_manager import MenuManager
# Function to display the program menu and ask the user to choose an action
def show_user_menu():
    print("Program Menu:")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("E - Exit")

    # Ask the user to choose an action
    choice = input("Enter your choice: ").strip().upper()

    # Call the appropriate function based on user input
    if choice == 'V':
        view_item()
    elif choice == 'A':
        add_item()
    elif choice == 'D':
        delete_item()
    elif choice == 'U':
        update_item()
    elif choice == 'S':
        show_menu()
    elif choice == 'E':
        exit_program()
    else:
        print("Invalid choice. Please try again.")

# Function to view an item
def view_item():
    print("Viewing an Item")

# Function to add an item
def add_item():
    print("Adding an Item")

# Function to delete an item
def delete_item():
    print("Deleting an Item")

# Function to update an item
def update_item():
    print("Updating an Item")

# Function to show the menu
def show_menu():
    print("Showing the Menu")

# Function to exit the program
def exit_program():
    print("Exiting the program")
    # Optionally, perform any cleanup or exit tasks here
    exit()

# Function to add an item to the menu
def add_item_to_menu():
    # Ask the user to input the item's name and price
    name = input("Enter the item's name: ")
    price = float(input("Enter the item's price: "))

    # Create a MenuItem object and call the appropriate function
    item = MenuItem(name, price)
    item.save()  # Assuming there's a save() method in the MenuItem class

    # Print a message if the item was added successfully
    print("Item was added successfully.")

# Function to remove an item from the menu
def remove_item_from_menu():
    # Ask the user to input the name of the item to remove
    name = input("Enter the name of the item to remove: ")

    try:
        # Create a MenuItem object and call the appropriate function
        item = MenuItem.get_by_name(name)  # Assuming there's a get_by_name() method in the MenuItem class
        if item:
            item.delete()  # Assuming there's a delete() method in the MenuItem class
            print("Item was deleted successfully.")
        else:
            print("Item not found.")
    except Exception as e:
        print("An error occurred:", e)

# Function to update an item in the menu
def update_item_from_menu():
    # Ask the user to input the name and price of the item to update
    current_name = input("Enter the current name of the item to update: ")
    current_price = float(input("Enter the current price of the item to update: "))

    # Ask the user to input the new name and price for the item
    new_name = input("Enter the new name for the item: ")
    new_price = float(input("Enter the new price for the item: "))

    try:
        # Create a MenuItem object and call the appropriate function
        item = MenuItem.get_by_name(current_name)  # Assuming there's a get_by_name() method in the MenuItem class
        if item:
            item.update(new_name, new_price)  # Assuming there's an update() method in the MenuItem class
            print("Item was updated successfully.")
        else:
            print("Item not found.")
    except Exception as e:
        print("An error occurred:", e)

# Function to show the restaurant's menu
def show_restaurant_menu():
    # Retrieve and print the restaurant's menu
    menu_items = MenuManager.all_items()  # Assuming there's a method to retrieve all items in the MenuManager class
    print("Restaurant Menu:")
    for item in menu_items:
        print(f"{item['item_name']}: ${item['item_price']}")

# Main program loop
if __name__ == "__main__":
    while True:
        show_user_menu()
        choice = input("Do you want to continue? (yes/no): ").strip().lower()
        if choice == 'no':
            show_restaurant_menu()
            print("Exiting the program.")
            break









