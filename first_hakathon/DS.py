# import tkinter as tk
# from tkinter import messagebox, simpledialog
# from PIL import Image, ImageTk

# # Define a class to encapsulate the Demon Slayer game (OOP)
# class DemonSlayerGame:
#     def __init__(self, window):
#         # Initialize the game with a window
#         self.window = window
#         self.window.title("Welcome to Demon Slayer")

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






import tkinter as tk
from tkinter import messagebox, simpledialog
from PIL import Image, ImageTk

# Define a class to encapsulate the Demon Slayer game (OOP)
class DemonSlayerGame:
    def __init__(self, window):
        # Initialize the game with a window
        self.window = window
        self.window.title("Welcome to Demon Slayer")

        # Welcome screen widgets
        self.welcome_label = tk.Label(window, text="Welcome To Demon Slayer!")
        self.welcome_label.pack()

        self.question_label = tk.Label(window, text="Do you think you can save yourself in this world?")
        self.question_label.pack()

        self.yes_button = tk.Button(window, text="Yes", command=self.start_game)
        self.yes_button.pack(side=tk.LEFT, padx=10)

        self.no_button = tk.Button(window, text="No", command=self.close_game)
        self.no_button.pack(side=tk.RIGHT, padx=10)

        # Load and display Demon Slayer image
        self.demon_slayer_image = Image.open("images/Demon_slayer.png")
        self.demon_slayer_image = self.demon_slayer_image.resize((200, 200))
        self.demon_slayer_photo = ImageTk.PhotoImage(self.demon_slayer_image)
        self.demon_slayer_label = tk.Label(window, image=self.demon_slayer_photo)
        self.demon_slayer_label.pack()

        # Create a frame for game elements
        self.game_frame = tk.Frame(window)
        self.game_frame.pack(pady=20)

        # Text box to display game output
        self.output_text = tk.Text(self.game_frame, width=60, height=20)
        self.output_text.pack()

        # Define initial story and options
        self.story = "You find yourself standing at the edge of a dark forest. " \
                     "A path leads into the forest, disappearing into the shadows. " \
                     "What do you do?"

        self.options = [
            ("Enter the forest", self.enter_forest),
            ("Stay where you are", self.stay_put)
        ]

        self.update_story()

    # Close the game
    def close_game(self):
        if messagebox.askokcancel("Quit", "Do you really want to quit?"):
            self.window.destroy()

    # Update story text and available options
    def update_story(self):
        self.output_text.delete(1.0, tk.END)
        self.output_text.insert(tk.END, self.story + "\n\n")

        for text, command in self.options:
            button = tk.Button(self.game_frame, text=text, command=command)
            button.pack(side=tk.TOP, padx=5, pady=5)

    # Start the game
    def start_game(self):
        # Show game started message
        messagebox.showinfo("Game Started", "Let the Demon Slaying begin!")
        
        # Remove welcome screen elements
        self.welcome_label.pack_forget()
        self.question_label.pack_forget()
        self.yes_button.pack_forget()
        self.no_button.pack_forget()
        self.demon_slayer_label.pack_forget()

    # Story functions
    def enter_forest(self):
        self.story = "As you step into the forest, the darkness envelops you. " \
                     "You hear strange noises coming from the trees. What do you do next?"

        self.options = [
            ("Investigate the noises", self.investigate_noises),
            ("Turn back", self.turn_back)
        ]

        self.update_story()

    def stay_put(self):
        self.story = "You decide to stay where you are, hesitant to enter the ominous forest. " \
                     "Suddenly, you hear a loud growl behind you. What do you do?"

        self.options = [
            ("Run into the forest", self.run_into_forest),
            ("Stay still", self.stay_still)
        ]

        self.update_story()

    def investigate_noises(self):
        self.story = "You cautiously move towards the source of the noises, " \
                     "your heart pounding in your chest. You stumble upon a wounded animal. " \
                     "What do you do?"

        self.options = [
            ("Help the animal", self.help_animal),
            ("Ignore it and continue", self.ignore_animal)
        ]

        self.update_story()

    def turn_back(self):
        self.story = "You decide to turn back and leave the forest. " \
                     "As you walk away, you can't shake the feeling of being watched. " \
                     "What do you do?"

        self.options = [
            ("Keep walking", self.keep_walking),
            ("Look back", self.look_back)
        ]

        self.update_story()

    def run_into_forest(self):
        self.story = "You panic and run deeper into the forest. " \
                     "The darkness seems to swallow you whole. " \
                     "You find yourself lost. What now?"

        self.options = [
            ("Try to find your way back", self.find_way_back),
            ("Keep moving forward", self.keep_moving_forward)
        ]

        self.update_story()

    def stay_still(self):
        self.story = "You stay still, hoping whatever made that growl will go away. " \
                     "Seconds feel like hours as you wait in silence. " \
                     "Suddenly, the growling stops. What do you do?"

        self.options = [
            ("Turn around", self.turn_around),
            ("Continue staying still", self.continue_staying_still)
        ]

        self.update_story()

    def help_animal(self):
        self.story = "You approach the wounded animal carefully, " \
                     "trying not to startle it. With gentle hands, you tend to its wounds. " \
                     "The animal seems grateful and nuzzles against you. What do you do?"

        self.options = [
            ("Stay with the animal", self.stay_with_animal),
            ("Continue on your journey", self.continue_journey)
        ]

        self.update_story()

    def ignore_animal(self):
        self.story = "You decide to ignore the wounded animal and continue on your journey. " \
                     "The guilt gnaws at you as you walk away. " \
                     "You can't shake the feeling that you should've helped. What now?"

        self.options = [
            ("Go back and help", self.go_back_and_help),
            ("Keep moving forward", self.keep_moving_forward)
        ]

        self.update_story()

    def keep_walking(self):
        self.story = "You keep walking, trying to put distance between yourself and the forest. " \
                     "You can't shake off the feeling of unease. " \
                     "Suddenly, you hear footsteps behind you. What do you do?"

        self.options = [
            ("Turn around", self.turn_around),
            ("Run", self.run)
        ]

        self.update_story()

    def look_back(self):
        self.story = "You look back and see nothing but darkness. " \
                     "Your imagination starts running wild. What do you do?"

        self.options = [
            ("Keep walking", self.keep_walking),
            ("Run", self.run)
        ]

        self.update_story()

    def find_way_back(self):
        self.story = "You try to retrace your steps, but the forest seems to have changed. " \
                     "You feel disoriented and lost. What do you do?"

        self.options = [
            ("Keep searching", self.keep_searching),
            ("Climb a tree to get a better view", self.climb_tree)
        ]

        self.update_story()

    def keep_moving_forward(self):
        self.story = "You keep moving forward, hoping to find a way out of the forest. " \
                     "The trees seem to close in on you, making you feel claustrophobic. " \
                     "What do you do?"

        self.options = [
            ("Keep going", self.keep_going),
            ("Climb a tree to get a better view", self.climb_tree)
        ]

        self.update_story()

    def turn_around(self):
        self.story = "You turn around slowly, expecting to face whatever made that growling noise. " \
                     "To your relief, there's nothing there. What now?"

        self.options = [
            ("Continue on your journey", self.continue_journey),
            ("Go back", self.go_back)
        ]

        self.update_story()

    def continue_staying_still(self):
        self.story = "You decide to stay still, hoping the danger has passed. " \
                     "Seconds turn into minutes as you wait anxiously. " \
                     "What do you do?"

        self.options = [
            ("Turn around", self.turn_around),
            ("Keep staying still", self.keep_staying_still)
        ]

        self.update_story()

    def stay_with_animal(self):
        self.story = "You decide to stay with the animal, feeling a bond forming between you. " \
                     "It seems to trust you completely. What do you do?"

        self.options = [
            ("Make camp for the night", self.make_camp),
            ("Continue on your journey", self.continue_journey)
        ]

        self.update_story()

    def continue_journey(self):
        self.story = "You continue on your journey, leaving the animal behind. " \
                     "As you walk deeper into the forest, the shadows seem to whisper secrets. " \
                     "What do you do?"

        self.options = [
            ("Listen to the whispers", self.listen_to_whispers),
            ("Ignore the whispers", self.ignore_whispers)
        ]

        self.update_story()

    def go_back_and_help(self):
        self.story = "You feel guilty for leaving the wounded animal behind. " \
                     "You decide to go back and help. What do you do?"

        self.options = [
            ("Find the animal", self.find_animal),
            ("Call out for the animal", self.call_out)
        ]

        self.update_story()

    def turn_around(self):
        self.story = "You turn around slowly, expecting to face whatever made that growling noise. " \
                     "To your relief, there's nothing there. What now?"

        self.options = [
            ("Continue on your journey", self.continue_journey),
            ("Go back", self.go_back)
        ]

        self.update_story()

    def keep_searching(self):
        self.story = "You keep searching, hoping to find a familiar landmark. " \
                     "Every tree looks the same, and you start to feel hopeless. What now?"

        self.options = [
            ("Keep searching", self.keep_searching),
            ("Climb a tree to get a better view", self.climb_tree)
        ]

        self.update_story()

    def climb_tree(self):
        self.story = "You climb a tree to get a better view of your surroundings. " \
                     "From up high, you can see a faint light in the distance. What do you do?"

        self.options = [
            ("Head towards the light", self.head_towards_light),
            ("Stay where you are", self.stay_where_you_are)
        ]

        self.update_story()

    def keep_going(self):
        self.story = "You keep going, determined to find a way out of the forest. " \
                     "The path seems endless, and you start to lose hope. What now?"

        self.options = [
            ("Keep going", self.keep_going),
            ("Rest for a while", self.rest_for_a_while)
        ]

        self.update_story()

    def run(self):
        self.story = "You start running blindly, hoping to escape whatever is behind you. " \
                     "Your heart pounds in your chest as you push yourself to go faster. " \
                     "What do you do?"

        self.options = [
            ("Keep running", self.keep_running),
            ("Hide", self.hide)
        ]

        self.update_story()

    def keep_staying_still(self):
        self.story = "You keep staying still, hoping the danger has passed. " \
                     "Minutes turn into hours, and you start to feel restless. " \
                     "What do you do?"

        self.options = [
            ("Continue staying still", self.continue_staying_still),
            ("Get up and keep moving", self.get_up_and_keep_moving)
        ]

        self.update_story()

    def listen_to_whispers(self):
        self.story = "You listen carefully to the whispers, trying to make sense of them. " \
                     "They seem to be guiding you somewhere. What do you do?"

        self.options = [
            ("Follow the whispers", self.follow_whispers),
            ("Ignore the whispers", self.ignore_whispers)
        ]

        self.update_story()

    def ignore_whispers(self):
        self.story = "You ignore the whispers, dismissing them as mere figments of your imagination. " \
                     "You continue on your journey, determined to find a way out of the forest. " \
                     "What do you do next?"

        self.options = [
            ("Keep going", self.keep_going),
            ("Rest for a while", self.rest_for_a_while)
        ]

        self.update_story()

    def find_animal(self):
        self.story = "You try to find the wounded animal, but it's nowhere to be seen. " \
                     "You call out for it, but there's no response. What now?"

        self.options = [
            ("Keep searching", self.keep_searching),
            ("Continue on your journey", self.continue_journey)
        ]

        self.update_story()

    def call_out(self):
        self.story = "You call out for the animal, hoping it will come to you. " \
                     "You wait for a response, but there's only silence. What do you do?"

        self.options = [
            ("Keep calling", self.keep_calling),
            ("Continue on your journey", self.continue_journey)
        ]

        self.update_story()

    def go_back(self):
        self.story = "You decide to go back the way you came, hoping to find your way out of the forest. " \
                     "As you walk, you can't shake off the feeling of being watched. What now?"

        self.options = [
            ("Keep walking", self.keep_walking),
            ("Look back", self.look_back)
        ]

        self.update_story()

    def head_towards_light(self):
        self.story = "You head towards the light, hoping it leads to safety. " \
                     "As you get closer, you realize it's a clearing in the forest. " \
                     "What do you do?"

        self.options = [
            ("Enter the clearing", self.enter_clearing),
            ("Stay in the trees", self.stay_in_trees)
        ]

        self.update_story()

    def stay_where_you_are(self):
        self.story = "You decide to stay where you are, unsure of what lies ahead. " \
                     "You watch the light in the distance, trying to gauge if it's safe. " \
                     "What do you do?"

        self.options = [
            ("Head towards the light", self.head_towards_light),
            ("Stay where you are", self.stay_where_you_are)
        ]

        self.update_story()

    def rest_for_a_while(self):
        self.story = "You find a comfortable spot and sit down to rest for a while. " \
                     "Your muscles ache from the journey, but you feel a sense of peace. " \
                     "What do you do next?"

        self.options = [
            ("Continue on your journey", self.continue_journey),
            ("Stay and rest some more", self.stay_and_rest_some_more)
        ]

        self.update_story()

    def keep_calling(self):
        self.story = "You keep calling out for the animal, hoping it will hear you. " \
                     "The forest remains silent, and you start to feel alone. " \
                     "What do you do?"

        self.options = [
            ("Keep calling", self.keep_calling),
            ("Continue on your journey", self.continue_journey)
        ]

        self.update_story()

    def enter_clearing(self):
        self.story = "You enter the clearing and find yourself in a small meadow. " \
                     "The sunlight filters through the trees, casting a warm glow. " \
                     "What do you do?"

        self.options = [
            ("Explore the meadow", self.explore_meadow),
            ("Rest for a while", self.rest_for_a_while)
        ]

        self.update_story()

    def stay_in_trees(self):
        self.story = "You decide to stay in the trees, wary of what might be waiting in the clearing. " \
                     "You watch from a safe distance, observing your surroundings. " \
                     "What do you do?"

        self.options = [
            ("Stay hidden", self.stay_hidden),
            ("Head towards the clearing", self.head_towards_clearing)
        ]

        self.update_story()

    def stay_and_rest_some_more(self):
        self.story = "You decide to stay a little longer and rest some more. " \
                     "The forest is quiet, and you feel at peace. " \
                     "What do you do next?"

        self.options = [
            ("Continue on your journey", self.continue_journey),
            ("Stay and rest some more", self.stay_and_rest_some_more)
        ]

        self.update_story()

    # Add more story functions and options as needed

# Main function to create the window and run the game
def main():
    window = tk.Tk()
    game = DemonSlayerGame(window)
    window.mainloop()

# Check if the script is being run directly
if __name__ == "__main__":
    main()
