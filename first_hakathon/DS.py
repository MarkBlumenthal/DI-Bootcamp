# Import statements
import tkinter as tk
from tkinter import messagebox
from PIL import Image, ImageTk

# Function definitions
def close_game():
    if messagebox.askokcancel("Quit", "Do you really want to quit?"):
        window.destroy()

def duck_dive_roll():
    output_text.insert(tk.END, "You perform a duck, dive, and roll maneuver.\n")

def decapitate_enemy():
    output_text.insert(tk.END, "You decapitate the Demon using your Katanna!\n")

def jump_high():
    output_text.insert(tk.END, "You jump 20 feet in the air!\n")

def breathing_technique():
    output_text.insert(tk.END, "You use breathing technique to increase power!\n")

def start_game():
    # Close the pop-up
    messagebox.showinfo("Game Started", "Let the Demon Slaying begin!")
    
    # Clear existing widgets from the main window
    welcome_label.pack_forget()
    question_label.pack_forget()
    yes_button.pack_forget()
    no_button.pack_forget()
    demon_slayer_label.pack_forget()
    
    # Add character selection widgets to the main window
    character_label = tk.Label(window, text="Select Your Character:")
    character_label.pack()
    
    # Add buttons for character selection
    character1_button = tk.Button(window, text="Character 1", command=lambda: select_character("Character 1"))
    character1_button.pack(side=tk.LEFT, padx=10)
    character2_button = tk.Button(window, text="Character 2", command=lambda: select_character("Character 2"))
    character2_button.pack(side=tk.LEFT, padx=10)
    character3_button = tk.Button(window, text="Character 3", command=lambda: select_character("Character 3"))
    character3_button.pack(side=tk.LEFT, padx=10)

def select_character(character):
    # Perform actions based on selected character
    print("Selected character:", character)
    # You can add further logic here based on the selected character

    # Here you can proceed with the game or further character customization
    # You may want to create additional functions for these steps

# Main window
window = tk.Tk()
window.title("Welcome to Demon Slayer")

# Widgets for welcome screen
welcome_label = tk.Label(window, text="Welcome To Demon Slayer!")
welcome_label.pack()

question_label = tk.Label(window, text="Do you think you can save yourself in this world?")
question_label.pack()

yes_button = tk.Button(window, text="Yes", command=start_game)
yes_button.pack(side=tk.LEFT, padx=10)

no_button = tk.Button(window, text="No", command=close_game)
no_button.pack(side=tk.RIGHT, padx=10)

demon_slayer_image = Image.open("images/Demon_slayer.png")
demon_slayer_image = demon_slayer_image.resize((200, 200))
demon_slayer_photo = ImageTk.PhotoImage(demon_slayer_image)
demon_slayer_label = tk.Label(window, image=demon_slayer_photo)
demon_slayer_label.pack()

game_frame = tk.Frame(window)
game_frame.pack(pady=20)

output_text = tk.Text(game_frame, width=60, height=20)
output_text.pack()

# Buttons for player actions
actions = [
    ("Duck, Dive & Roll", duck_dive_roll),
    ("Decapitate Enemy", decapitate_enemy),
    ("Jump High", jump_high),
    ("Breathing Technique", breathing_technique)
]

for text, command in actions:
    button = tk.Button(game_frame, text=text, command=command)
    button.pack(side=tk.LEFT, padx=5, pady=5)

# Run the Tkinter event loop
window.mainloop()








