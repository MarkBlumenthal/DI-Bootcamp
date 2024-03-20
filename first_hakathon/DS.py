# import tkinter as tk
# from tkinter import messagebox, simpledialog
# from PIL import Image, ImageTk
# from datetime import datetime
# from sqldata import insert_player_data, close_connection

# # Define a class to encapsulate the Demon Slayer game (OOP)
# class DemonSlayerGame:
#     def __init__(self, window):
#         # Initialize the game with a window
#         self.window = window
#         self.window.title("Welcome to Demon Slayer")

#         # Initialize start and end times
#         self.start_time = None
#         self.end_time = None

#         # Welcome screen widgets
#         self.welcome_label = tk.Label(window, text="Welcome To Demon Slayer!")
#         self.welcome_label.pack()

#         self.question_label = tk.Label(window, text="Do you think you can save yourself in this world?")
#         self.question_label.pack()

#         self.yes_button = tk.Button(window, text="Yes", command=self.start_game)
#         self.yes_button.pack(side=tk.LEFT, padx=10)

#         self.no_button = tk.Button(window, text="No", command=self.close_game)
#         self.no_button.pack(side=tk.RIGHT, padx=10)

#         # Load and display Demon Slayer image
#         self.demon_slayer_image = Image.open("images/Demon_slayer.png")
#         self.demon_slayer_image = self.demon_slayer_image.resize((200, 200))
#         self.demon_slayer_photo = ImageTk.PhotoImage(self.demon_slayer_image)
#         self.demon_slayer_label = tk.Label(window, image=self.demon_slayer_photo)
#         self.demon_slayer_label.pack()

#         # Create a frame for game elements
#         self.game_frame = tk.Frame(window)
#         self.game_frame.pack(pady=20)

#         # Text box to display game output
#         self.output_text = tk.Text(self.game_frame, width=60, height=20)
#         self.output_text.pack()

#         # Define actions player can take
#         self.actions = [
#             ("Duck, Dive & Roll", self.duck_dive_roll),
#             ("Decapitate Enemy", self.decapitate_enemy),
#             ("Jump High", self.jump_high),
#             ("Breathing Technique", self.breathing_technique)
#         ]

#         # Create buttons for each action
#         for text, command in self.actions:
#             button = tk.Button(self.game_frame, text=text, command=command)
#             button.pack(side=tk.LEFT, padx=5, pady=5)

#     # Close the game
#     def close_game(self):
#         if messagebox.askokcancel("Quit", "Do you really want to quit?"):
#             # Capture the end time
#             self.end_time = datetime.now()
#             # Calculate duration
#             duration = self.end_time - self.start_time
#             # Display game duration
#             self.output_text.insert(tk.END, f"Game Duration: {duration}\n")
#             self.window.destroy()

#     # Perform actions
#     def duck_dive_roll(self):
#         self.output_text.insert(tk.END, "You perform a duck, dive, and roll maneuver.\n")

#     def decapitate_enemy(self):
#         self.output_text.insert(tk.END, "You decapitate the Demon using your Katanna!\n")

#     def jump_high(self):
#         self.output_text.insert(tk.END, "You jump 20 feet in the air!\n")

#     def breathing_technique(self):
#         self.output_text.insert(tk.END, "You use breathing technique to increase power!\n")

#     # Start the game
#     def start_game(self):
#         # Capture the start time
#         self.start_time = datetime.now()
#         # Show game started message
#         messagebox.showinfo("Game Started", "Let the Demon Slaying begin!")
#         # Remove welcome screen elements
#         self.welcome_label.pack_forget()
#         self.question_label.pack_forget()
#         self.yes_button.pack_forget()
#         self.no_button.pack_forget()
#         self.demon_slayer_label.pack_forget()
#         # Create character selection screen
#         self.create_character_selection()

#     # Create character selection screen
#     def create_character_selection(self):
#         character_label = tk.Label(self.window, text="Select Your Character:")
#         character_label.pack()
#         # Define characters and their images
#         characters = [
#             ("images/Inosuke_anime.png", "Character 1"),
#             ("images/Tanjiro_colored_body_4.png", "Character 2"),
#             ("images/Zenitsu_anime.png", "Character 3")
#         ]
#         # Create buttons for each character
#         for image_path, character_name in characters:
#             character_image = Image.open(image_path)
#             character_image = character_image.resize((100, 100))
#             character_photo = ImageTk.PhotoImage(character_image)
#             character_button = tk.Button(self.window, image=character_photo, command=lambda name=character_name: self.select_character(name))
#             character_button.photo = character_photo
#             character_button.pack(side=tk.LEFT, padx=10)

#     # Select a character
#     def select_character(self, character):
#         player_name = self.ask_for_name()
#         insert_player_data(player_name, character)  # Insert player data into the database
#         print("Player Name:", player_name)
#         print("Selected character:", character)

#     # Ask for player's name
#     def ask_for_name(self):
#         return simpledialog.askstring("Player's Name", "Enter your name:")

# # Main function to create the window and run the game
# def main():
#     window = tk.Tk()
#     game = DemonSlayerGame(window)
#     window.mainloop()

# # Check if the script is being run directly
# if __name__ == "__main__":
#     main()








