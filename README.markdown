# TrafficLightSim 🚦

A simple and fun **Traffic Light Simulation** built using **HTML**, **CSS**, and **JavaScript**. This project mimics a real-world traffic light where red, yellow, and green lights cycle every few seconds, just like on the road. Now, it includes a **Login Page** for added interactivity! Perfect for beginners to learn basic web development concepts like DOM manipulation, CSS styling, JavaScript timing, and user authentication.

---

## Updates 🔔
**June 11, 2025**: Added a **Login Page**! Now users need to enter a username (`admin`) and password (`123`) to access the traffic light simulation. This makes the project more interactive and secure.

---

## Features ✨
- **Login Page**: Enter username (`admin`) and password (`123`) to access the traffic light simulation.
- **Realistic Traffic Light**: Red, yellow, and green lights turn on and off in a cycle.
- **Timed Cycle**: Each light stays on for 3 seconds before switching to the next.
- **Responsive Design**: Looks great on any screen size, centered with flexbox.
- **Smooth Transitions**: Lights fade in and out with a cool opacity effect.
- **Error Handling**: Shows an error message if the username or password is incorrect.

---

## How It Works 🛠️
- **Login Page**:
  - A simple login form with username and password fields.
  - Default credentials: Username = `admin`, Password = `123`.
  - On successful login, redirects to the traffic light simulation page.
  - Shows an error message for incorrect credentials.
- **Traffic Light**:
  - Three circular divs styled to look like red, yellow, and green lights.
  - JavaScript uses `setTimeout` to switch between lights every 3 seconds: Red → Yellow → Green → Red (repeats forever).
  - CSS handles the styling, making the lights circular, colorful, and centered on the screen.
  - The `active` class controls which light is "on" (fully opaque) and which are "off" (semi-transparent).

---

## Tech Stack 🧑‍💻
- **HTML**: Structure for the login page and traffic light.
- **CSS**: Styling for the login form, circular lights, colors, and smooth transitions.
- **JavaScript**: Logic for login authentication and light cycling using `setTimeout`.

---

## Installation and Setup 🚀
Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shreshtha03/Traffic-Light-Simulation.git
   ```

2. **Navigate to the Project Folder**:
   ```bash
   cd Traffic-Light-Simulation
   ```

3. **Open the Project**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox).
   - You can use a local server like **Live Server** in VS Code for a better experience.

4. **Login Credentials**:
   - Username: `admin`
   - Password: `123`

---


## How to Customize 🔧
- **Change Login Credentials**: Edit `correctUsername` and `correctPassword` in `first_login.js`.
- **Change Light Timing**: Edit the `setTimeout` values in `traffic-script.js` (e.g., change `3000` to `6000` for 6-second cycles).
- **Change Colors**: Modify the `.Red`, `.Yellow`, `.Green` classes in `traffic-style.css`.
- **Add Features**: Add sound effects, animations, or a logout button.

---

## Learning Outcomes 📚
This project helped me learn:
- How to create a login page with user authentication in JavaScript.
- DOM manipulation with JavaScript (`getElementById`, `classList`).
- Using `setTimeout` for timed events.
- CSS flexbox for centering elements.
- Creating smooth transitions with CSS.

---

## Future Improvements 💡
- Add a logout button to the traffic light page.
- Include sound effects for each light change.
- Make the timing configurable via a user interface.
- Add a night mode with darker colors for the login page and traffic light.

---

## Contributing 🤝
Feel free to fork this repo, make changes, and submit a pull request! Suggestions and improvements are welcome.

---

## Credits 🙌
Made with 💖 by Shreshtha. Inspired by real-world traffic lights and my love for coding simple, fun projects!

---

## License 📄
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
