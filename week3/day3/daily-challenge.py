#daily-challenge

# import math

# class Circle:
#     def __init__(self, radius_or_diameter):
#         if radius_or_diameter <= 0:
#             raise ValueError("Radius or diameter must be positive.")
#         if radius_or_diameter > 1000000:  # Limiting the size to avoid memory issues
#             raise ValueError("Radius or diameter is too large.")
        
#         if radius_or_diameter > 1000:  # Assuming a diameter above 1000 is a diameter, else it's a radius
#             self.diameter = radius_or_diameter
#             self.radius = radius_or_diameter / 2
#         else:
#             self.radius = radius_or_diameter
#             self.diameter = radius_or_diameter * 2

#     @property
#     def area(self):
#         return math.pi * (self.radius ** 2)

#     def __str__(self):
#         return f"Circle with radius {self.radius}"

#     def __repr__(self):
#         return f"Circle({self.radius})"

#     def __add__(self, other):
#         return Circle(self.radius + other.radius)

#     def __gt__(self, other):
#         return self.radius > other.radius

#     def __lt__(self, other):
#         return self.radius < other.radius

#     def __eq__(self, other):
#         return self.radius == other.radius

# # Test the class
# if __name__ == "__main__":
#     # Create some circles
#     circle1 = Circle(5)
#     circle2 = Circle(10)
#     circle3 = Circle(3)
#     circle4 = Circle(7)

#     # Print circle attributes
#     print(circle1)
#     print(circle2)
#     print(circle3)
#     print(circle4)

#     # Compute and print circle areas
#     print("Area of circle1:", circle1.area)
#     print("Area of circle2:", circle2.area)
#     print("Area of circle3:", circle3.area)
#     print("Area of circle4:", circle4.area)

#     # Test addition of circles
#     new_circle = circle1 + circle2
#     print("New circle after addition:", new_circle)

#     # Test circle comparison
#     print("Is circle2 bigger than circle1?", circle2 > circle1)
#     print("Is circle3 smaller than circle4?", circle3 < circle4)
#     print("Are circle1 and circle3 equal?", circle1 == circle3)

#     # Sort circles
#     circles = [circle1, circle2, circle3, circle4]
#     circles.sort()
#     print("Sorted circles:", circles)



# import math
# import turtle

# class Circle:
#     def __init__(self, radius_or_diameter):
#         if radius_or_diameter <= 0:
#             raise ValueError("Radius or diameter must be positive.")
#         if radius_or_diameter > 1000000:  # Limiting the size to avoid memory issues
#             raise ValueError("Radius or diameter is too large.")
        
#         if radius_or_diameter > 1000:  # Assuming a diameter above 1000 is a diameter, else it's a radius
#             self.diameter = radius_or_diameter
#             self.radius = radius_or_diameter / 2
#         else:
#             self.radius = radius_or_diameter
#             self.diameter = radius_or_diameter * 2

#     @property
#     def area(self):
#         return math.pi * (self.radius ** 2)

#     def __str__(self):
#         return f"Circle with radius {self.radius}"

#     def __repr__(self):
#         return f"Circle({self.radius})"

#     def __add__(self, other):
#         return Circle(self.radius + other.radius)

#     def __gt__(self, other):
#         return self.radius > other.radius

#     def __lt__(self, other):
#         return self.radius < other.radius

#     def __eq__(self, other):
#         return self.radius == other.radius

#     def draw(self, x, y):
#         turtle.penup()
#         turtle.goto(x, y - self.radius)
#         turtle.pendown()
#         turtle.circle(self.radius)
#         turtle.penup()

# # Test the class
# if __name__ == "__main__":
#     # Create some circles
#     circle1 = Circle(50)
#     circle2 = Circle(100)
#     circle3 = Circle(75)
#     circle4 = Circle(125)

#     # Sort circles
#     circles = [circle1, circle2, circle3, circle4]
#     circles.sort()

#     # Create turtle screen and set up
#     turtle.setup(width=800, height=600)
#     screen = turtle.Screen()
#     screen.title("Sorted Circles")

#     # Draw circles
#     x = -200
#     y = 0
#     for circle in circles:
#         circle.draw(x, y)
#         x += 150

#     # Keep the window open
#     turtle.done()
