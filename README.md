# Voice Map Explorer

An interactive map-based application that allows you to navigate the world and explore cities using voice commands. The application combines real-time voice processing with beautiful visualizations, points of interest (POIs), and city statistics.

## Features

- **Voice Navigation**: Speak to navigate to any location in the world
- **Interactive Map**: Beautiful interactive map with:
  - Multiple map styles (Colorful Light, Vibrant Dark, Midnight, Clean Light, Street Map)
  - Custom markers for current location and POIs
  - Smooth animations and transitions
  - Layer controls
  - Points of Interest visualization
- **City Statistics**: Real-time city information including:
  - Population trends over time
  - Climate data (temperature and rainfall)
  - Key historical and cultural facts
  - Beautiful charts and visualizations
- **Points of Interest**: Search nearby locations such as:
  - Restaurants and cafes
  - Shops and supermarkets
  - Parks and leisure spots
  - Hotels and accommodations
  - Public services (hospitals, schools, etc.)
- **Real-time Updates**: All data is displayed instantly as you navigate
- **Responsive Design**: Works on all screen sizes
- **Dark Mode Interface**: Easy on the eyes with glass-morphism effects

## Technical Overview

### Components

1. **FastAPI Backend**
   - Handles API requests
   - Manages WebRTC connections
   - Provides geocoding services via OpenStreetMap
   - Handles POI searches via Overpass API
   - Routes static files

2. **WebRTC Integration**
   - Real-time voice communication
   - Data channel for commands and responses
   - Ephemeral token management
   - Automatic reconnection handling

3. **Map Visualization**
   - Built with Leaflet.js
   - Multiple map layer options
   - Custom markers and popups
   - POI visualization
   - Smooth animations

4. **Statistics Display**
   - Chart.js for data visualization
   - Population trends
   - Climate data
   - Key facts panel

### Voice Navigation Flow

1. User clicks "Start Voice Navigation"
2. WebRTC connection is established
3. Voice input is processed in real-time
4. Commands are interpreted and executed
5. Map navigates to requested location
6. City statistics and POIs are automatically displayed

## Setup and Requirements

### Prerequisites

- Python 3.7 or higher
- Modern web browser with WebRTC support
- Microphone access
- OpenAI API key

### Installation

1. Install Python dependencies:
```bash
pip install fastapi uvicorn httpx termcolor jinja2
```

2. Set up environment variable:
```bash
export OPENAI_API_KEY=your_api_key_here
```

3. Run the application:
```bash
python main.py
```

4. Open your browser and navigate to:
```
http://127.0.0.1:8000
```

## Usage Guide

1. **Starting Navigation**
   - Click "Start Voice Navigation"
   - Grant microphone permissions when prompted
   - Wait for connection confirmation

2. **Voice Commands**
   - "Take me to [location name]"
   - "Show me [location name]"
   - "Navigate to [location name]"
   - "Search for [POI category] nearby"

3. **Viewing Statistics**
   - Statistics automatically appear after navigation
   - Population chart shows trends
   - Climate chart shows temperature and rainfall
   - Key facts display important location information

4. **Interface Elements**
   - Top left: Connection status
   - Top right: Layer controls
   - Bottom left: Navigation controls
   - Bottom center: Current location
   - Right side: Location statistics

## Technical Details

### API Endpoints

- `/`: Serves the main application
- `/session`: Creates WebRTC sessions
- `/geocode/{location}`: Provides location coordinates
- `/search/pois`: Searches for nearby points of interest

### Technologies Used

- FastAPI for backend
- WebRTC for real-time communication
- Leaflet.js for map visualization
- Chart.js for statistics
- OpenStreetMap for geocoding
- Overpass API for POI search
- DaisyUI for UI components
- Tailwind CSS for styling
- Anime.js for animations

## Error Handling

- Comprehensive try-catch blocks
- Colored terminal output for debugging
- Clear error messages to users
- Automatic resource cleanup
- Connection recovery mechanisms

## Performance Considerations

- Efficient POI searching with radius limits
- Smooth map animations
- Responsive chart updates
- Memory management for audio streams
- Automatic cleanup of WebRTC resources

The application provides an intuitive voice-controlled interface for exploring locations worldwide, combining real-time mapping, POI discovery, and statistical visualization in a modern, responsive design.
