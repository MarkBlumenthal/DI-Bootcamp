import tkinter as tk
from tkinter import messagebox
from PIL import Image, ImageTk  # Import Image and ImageTk from PIL (Python Imaging Library)

def start_game():
    # Implement the game logic here
    # For now, let's just print a message
    print("Game started!")

def close_game():
    window.destroy()

def attack():
    # Placeholder function for attacking
    output_text.insert(tk.END, "You swing your sword!\n")

def drink_potion():
    output_text.insert(tk.END, "You drink a healing potion.\n")

def duck_dive_roll():
    output_text.insert(tk.END, "You perform a duck, dive, and roll maneuver.\n")

def block_with_shield():
    output_text.insert(tk.END, "You block the enemy's attack with your shield.\n")

def decapitate_enemy():
    output_text.insert(tk.END, "You decapitate the enemy with a swift strike!\n")

# Create a Tkinter window
window = tk.Tk()
window.title("Welcome to DDDS")

# Welcome message
welcome_label = tk.Label(window, text="Welcome to Dungeons & Demon Slayer!")
welcome_label.pack()

# Question
question_label = tk.Label(window, text="Do you think you can save yourself in this world?")
question_label.pack()

# Buttons for player response
yes_button = tk.Button(window, text="Yes", command=start_game)
yes_button.pack(side=tk.LEFT, padx=10)

no_button = tk.Button(window, text="No", command=close_game)
no_button.pack(side=tk.RIGHT, padx=10)

# Load the image of the demon slayer
demon_slayer_image = Image.open("images/Inosuke_anime.png")  # Replace "demon_slayer_image.png" with the path to your image file
demon_slayer_image = demon_slayer_image.resize((200, 200))  # Resize the image as needed
demon_slayer_photo = ImageTk.PhotoImage(demon_slayer_image)

# Create a label to display the demon slayer image
demon_slayer_label = tk.Label(window, image=demon_slayer_photo)
demon_slayer_label.pack()

# Create a frame for the game area
game_frame = tk.Frame(window)
game_frame.pack(pady=20)

# Create a text widget for displaying game messages
output_text = tk.Text(game_frame, width=60, height=20)
output_text.pack()

# Create buttons for player actions
attack_button = tk.Button(game_frame, text="Attack", command=attack)
attack_button.pack(side=tk.TOP, padx=5, pady=5)

drink_potion_button = tk.Button(game_frame, text="Drink Potion", command=drink_potion)
drink_potion_button.pack(side=tk.LEFT, padx=5, pady=5)

duck_dive_roll_button = tk.Button(game_frame, text="Duck, Dive & Roll", command=duck_dive_roll)
duck_dive_roll_button.pack(side=tk.LEFT, padx=5, pady=5)

block_with_shield_button = tk.Button(game_frame, text="Block with Shield", command=block_with_shield)
block_with_shield_button.pack(side=tk.LEFT, padx=5, pady=5)

decapitate_enemy_button = tk.Button(game_frame, text="Decapitate Enemy", command=decapitate_enemy)
decapitate_enemy_button.pack(side=tk.LEFT, padx=5, pady=5)

# Run the Tkinter event loop
window.mainloop()




