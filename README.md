# Weather System

A simple and interactive weather system built to provide real-time weather information using a weather API. This project allows users to check weather conditions for any city around the world, with data like temperature, humidity, wind speed, and more.

## Features

- Search for weather by city name.
- Display current weather conditions, including:
  - Temperature
  - Humidity
  - Wind Speed
  - Weather Description
  - Icon representing weather conditions
- Use of weather API to fetch real-time data.
- User-friendly interface for easy navigation.

## Technologies Used

- **Frontend:**
  - HTML, CSS, JavaScript (Vanilla)
- **Backend (API):**
  - OpenWeatherMap API (or any other weather API of choice)

## Setup and Installation

### Prerequisites

1. A web browser (e.g., Chrome, Firefox)
2. Internet connection to access the weather API

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ChInMoY369/Weather-system.git

2. Open the project folder in your preferred code editor (e.g., Visual Studio Code).

3. Open "index.html" in your browser to view the project.

4. If using a local server for advanced development, you can run it using a simple HTTP server in your terminal:

⦁	If you have Python installed, you can run:

python -m http.server

Or for Python 3.x:

python3 -m http.server
⦁	Navigate to http://localhost:8000 in your browser.

###API Key Setup (Optional)
If you need to use your own API key (for the weather service):

1.	Sign up on OpenWeatherMap or any weather API provider you prefer.
2.	Get your API key.
3.	In the script.js file, replace the API key in the code:
const apiKey = "YOUR_API_KEY";

###Usage
1.	Open the application in a browser.
2.	Enter the name of the city in the search bar and hit "Enter" or click the search button.
3.	The weather information for that city will be displayed on the screen.

###Contributing
Contributions are welcome! If you'd like to contribute to this project:
1.	Fork the repository.
2.	Create a new branch (git checkout -b feature-branch).
3.	Commit your changes (git commit -m 'Add new feature').
4.	Push to the branch (git push origin feature-branch).
5.	Open a pull request.

###Acknowledgments
1.	Thanks to OpenWeatherMap for providing the weather API.
2.	Inspiration from various weather apps and websites.
