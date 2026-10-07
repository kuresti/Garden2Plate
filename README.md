# Garden2Plate

Garden2Plate is a web application that helps users search for edible plants, explore detailed growing information, and save plants they are interested in growing.

The application integrates with an external plant API and transforms the returned data into an interactive, user-friendly interface. I developed the project to strenthen my experience with REST APIs, asynchrnous JavaScript, ES modules, data transformation, local storage, dynamic DOM rendering, and modular application design.

## Features

## Edible Plant Search

Users can search for plants by common name.

The application sends the user's search to the Perenual plant API and limits results to edible plants. Returned results are processed before being displayed to the user.

If no matching plant is found, the application displays feedback to the user.

## Dynamic Plant Results

Search results are dynamically converted into interactive plant buttons.

Because API results can contain multiple records with the same common name, the application processes the returned data and removes duplicate common names before displaying the results.

Selecting a plant retrieves and displays its detailed plant information.

## Detailed Plant Information

Plant details are retireived from a separate API endpoint using each plant's unique ID.

Plant cards can display information including:
- Plant dimensions
- Propagation methods
- Watering needs
- Sunlight needs
- Pruning months
- Harvest season
- Flower color
- Plant images

## Favorites

Users can mark plants as favorites.

Favorite plant data is stored using browser localStorage, allowing the application to maintain a personalized list without requiring a backend database.

The Favorites button retrieves the saved plant list and allows users to return to plants they previously selected.

## Clear Search

The Clear button resets the search field, removes previous search results, and clears displayed plant information so the user can begin another search.

## Technologies
- JavaScript ES6+
- HTML5
- CSS3
- REST APIs
- Async/Await
- JavaScript Promises
- ES Modules
- DOM Manipulation
- Browser localStorage
- Git
- GitHub

## API Integration

Garden2Plate integrates with the Perenual plant API.

The application uses separate API requests for plant searches and detailed plant information.

The general data flow is:
```text
User enters plant name
        ↓
Search Perenual API
        ↓
Receive JSON plant data
        ↓
Filter and deduplicate results
        ↓
Extract plant IDs
        ↓
Retrieve detailed plant records
        ↓
Generate plant-selection buttons
        ↓
User selects a plant
        ↓
Render detailed plant card
        ↓
Optionally save plant to Favorites
```
This structure provided practical experience working with third-party APIs where the data returned by the service needed additional processing before it could be used effectively by the application's interface.

## Application Architecture

The project uses ES modules to separate application responsibilities

## APIInteraactions.mjs

Handles communication with the external plant API.

Responsibilities include:
- Constructing API request URLs.
- Retrieving edible plants based on user search input.
- Fetching detailed plant information using plant IDs.
- Converting API responses into usable JavaScript data.
- Handling unsuccessful API responses and request errors.

## DataProcesses.mjs

Transforms the data returned by the API into structures needed by the application.

Responsibilities include:
- Filtering API records containing common plant names.
- Removing duplicate common names.
- Extracting property values from returned objects.
- Extracting unique plant IDs.
- Retrieving plant names.
- Coordinating requests for detailed plant information.
- Preparing detailed plant data for the user interface.

## PlantButtonList.mjs

Handles interactive plant results and detailed plant-card rendering.

Responsibilities include:
- Dynamically generating plant-selection buttons.
- Adding event listeners to generated buttons.
- Matching selected buttons with plant data.
- Rendering detailed plant cards.
- Managing favorite selections.
- Saving favorite plants to local storage.

## util.mjs

Contains resusable utility functions.

Responsibilities include:
- Rendering lists using template functions.
- Loading and rendering plant images.
- Coordinating image-loading promises.
- Creating reusable event listeners.
- Reading data from local storage.
- Writing data to local storage.
- Loading resuable HTML templates.

## plant.js

Coordinates the primary application workflow.

Responsibilities include:
- Initializing applicaiton modules.
- Responding to user searches.
- Validating whether search results were found.
- Coordinating API retrieval and data processing.
- Rendering plant-selection buttons.
- Connecting dynamically generated buttons to plant-card functionality.
- Clearing search results.
- Retrieving and displaying favorite plants.

## Asynchronous JavaScript

Because Garden2Plate depends on external API data, asynchronous programming is an important part of the application.

The project uses:
```text
async
await
Promise.all()
fetch()
```
These techniques are used to retrieve external plant information, process asynchronous results, load plant images, and coordinate application rendering.

## Data Processing

External API data is not always structured exactly as an application needs it.

Garden2Plate processes the API response before displaying it to the user.

Examples include:
- Filtering objects based on available properties.
- Removing duplicate common plant names.
- Extracting IDs from collections of objects.
- Mapping object properties into new arrays.
- Finding selected plants based on user interaction.
- Coordinating multiple detail requests.
- Transforming external data into UI components.

The project uses JavaScript array methods including:
```text
filter()
find()
map()
forEach()
```

## Challenges & Problem Solving

## Duplicate API Results

Plant API responses can contain multiple records with the same common name.
I developed data-processing logic that checks previously processed records and creates a collection of unique plant results before displaying them to the user.

## Multiple API Requests

The initial search API provides plant records and IDs, while additional detailed information is retrieved from another endpoint.

The application therefore coordinates multiple stages of asynchronous data retrieval before rendering complete plant information.

## Dynamic Handling

Plant buttons do not exist when the page initially loads. They are created dynamically after API data has been retrieved and processed.

Event listners therefore need to be attached after the dynamic elements are created so users can select plants and display their details.

## Application State

The favorites feature required maintaining information beyond the currently displayed plant.

Browser localStorage is used to persist selected plants and retrieve them later through the Favorites interface.

## Modular Design

Rather than placing API reqests, data manipulation, UI rendering, and event handling in a single JavaScript file, the application separates these responsibilities across ES modules.

This made the project an opportunity to practice separation of concerns and reusable application design.

## Running the Project

Clone the respository:
```bash
git clone https://github.com/kuresti/Garden2Plate.git
```

Navigate to the project directory:
```bash
cd Garden2Plate
```

Because the application uses ES modules and API requests, run it through a local development server rather than opening index.html directly.

For example, the project can be served using a development server available through your editor or another local HTTP server.

## API Configuration

Garden2Plate uses the Perenual API to retrieve plant information.

An API key is required to make requests to the service.

API keys and other credentials should not be committed to a public GitHub repository.

For continued development, API credentials should be moved out of the application source and managed through an appropriate configuration or server-side solution.

## Future Development

Garden2Plate was originally designed around a broader garden-to-kitchen concept. Potential future enhancements include:
- Recipe API integration.
- Recipe recommendations based on selected plants.
- Improved favorites management, including removing saved plants and preventing duplicates.
- USDA hardiness-zone filtering.
- Expanded search and filtering options.
- User accounts and authentication.
- Database-backed favorites and farden information.
- Personal garden planning.
- Improved accessibility and error handling.
- Additional responsive/mobile interface improvements.
- Backend service for securely managing external API credentials.

The longer-term vision is to connect gardening information with practical food use--helping users move from deciding what to grow to deciding what to make with what they harvest.

## What I Learned

Developing Garden2Plate gave me practical experience with:
- Integrating third-party REST APIs.
- Working with JSON responses.
- Writing asynchronous JavaScript with async and await.
- Working with JavaScript promises.
- Transforming API data into application-specific structures.
- Dynamically generating user-interface components.
- Managing browser state with localStorage.
- Using ES modules to separate application responsibilities.
- Designing asynchronous and API-driven applications.
- Working with data that does not always arrive in the format an application needs.

## Project Context

Garden2Plate was originally developed as my final project for BYU-Idaho's WDD 330 Web Frontend Development course.

I designed and implemented the application to demonstrate JavaScript application development, third-party API integration, asynchronous programming, modular architecture, dynamic user-interface rendering, and client-side state management.

## Developer

### Kimberly Uresti

Bachelor of Science in Software Development
Junior Full-Stack/Backend Developer

GitHub: kuresti
