import mockupData from "../mockupData.js";

let Info_firstName = false, Info_lastName = false, Info_street = false, Info_city = false, Info_country = false, Info_phoneNumber = false;

// Constants
let map = null;
let currentMarker = null;

// DOM Elements
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const statusIndicator = document.getElementById("statusIndicator");
const statusText = document.getElementById("statusText");
const loadingAnimation = document.getElementById("loadingAnimation");
const messagesDiv = document.getElementById("messages");
const currentLocation = document.getElementById("currentLocation");

// Global variables
let peerConnection = null;
let dataChannel = null;
let mediaStream = null;
let audioElement = null;
let populationChart = null;
let climateChart = null;

// Custom icons
const customIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<div style="
        background-color: #FF1744;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 15px rgba(255,23,68,0.5);
    "></div>`,
  iconSize: [15, 15],
  iconAnchor: [7, 7],
});

// let mockupData = []; // Changed from const to let since we'll update it  // using DB

// Initialize map
function initMap() {
  // Create map
  map = L.map("map", {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxBounds: [
      [-90, -180],
      [90, 180],
    ],
    maxBoundsViscosity: 1.0,
  });

  // Define base map layers
  const mapLayers = {
    "Colorful Light": L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ),
    "Vibrant Dark": L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ),
    Midnight: L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ),
    "Clean Light": L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ),
    "Street Map": L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abc",
        maxZoom: 19,
      }
    ),
  };

  // Add default layer
  mapLayers["Colorful Light"].addTo(map);

  // Add layer control
  L.control
    .layers(mapLayers, null, {
      position: "topright",
      collapsed: false,
    })
    .addTo(map);

  // Add event listeners
  map.on("load", () => {
    addMessage("Map loaded successfully");
  });
}

// Function to navigate to a location based on mockupData
async function navigateToLocation(locationName) {
  console.log("Searching for:", locationName);
  try {
    // Filter mockupData based on multiple fields
    const searchTerm = locationName.toLowerCase().trim();

    const trueArr = [];
  
    mockupData.forEach((data) => {
      // Create full name by combining first and last name
      const firstName = (data["First Name"] || "").toLowerCase();
      const lastName = (data["Last Name"] || "").toLowerCase();
  
      // Create full address
      const street = (data.Street || "").toLowerCase();
      const city = (data.City || "").toLowerCase();
      const country = (data.Country || "").toLowerCase();
  
      // Format phone number (remove spaces and special characters)
      const phoneNumber = (data["Phone Number"] || "").replace(/[\s\-\(\)]/g, "");
  
      if(Info_country == false) {
        if(searchTerm.includes(country)) {
          trueArr.push({ "Country" : country });
          Info_country = true;
        }
      }
      if(Info_city == false) {
        if(searchTerm.includes(city)) {
          trueArr.push({ "City" : city });
          Info_city = true;
        }
      }
      if(Info_street == false) {
        if(searchTerm.includes(street)) {
          trueArr.push({ "Street" : street });
          Info_street = true;
        }
      }
      if(Info_phoneNumber == false) {
        if(searchTerm.includes(phoneNumber)) {
          trueArr.push({ "Phone Number" : phoneNumber });
          Info_phoneNumber = true;
        }
      }
      if(Info_firstName == false) {
        if(searchTerm.includes(firstName)) {
          trueArr.push({ "First Name" : firstName });
          Info_firstName = true;
        }
      }
      if(Info_lastName == false) {
        if(searchTerm.includes(lastName)) {
          trueArr.push({ "Last Name" : lastName });
          Info_lastName = true;
        }
      }
    });
  
    const matchingLocations = mockupData.filter((data) => {
      const ere = trueArr.map((tr) => {
        return data[Object.keys(tr)[0]].toLowerCase() == tr[Object.keys(tr)[0]];
      });
      const flag = ere.every((er) => {
        return er == true;
      });
      if(flag == true) return true;
    });

    if (matchingLocations.length === 0) {
      throw new Error(`No matching locations found for "${locationName}"`);
    }

    // Clear existing markers
    if (currentMarker) {
      map.removeLayer(currentMarker);
    }

    // Add markers for all matching locations
    matchingLocations.forEach((location) => {
      const [lat, lng] = location.Coordinates.split(", ").map(Number);

      // Create marker with enhanced popup content
      const marker = L.marker([lat, lng], { icon: customIcon })
        .bindPopup(
          `
                    <div class="p-3">
                        <h3 class="font-bold text-lg">${location["First Name"]} ${location["Last Name"]}</h3>
                        <p class="text-sm mt-2">Address: ${location.Street}</p>
                        <p class="text-sm">City: ${location.City}</p>
                        <p class="text-sm">Country: ${location.Country}</p>
                        <p class="text-sm">Phone: ${location["Phone Number"]}</p>
                        <p class="text-sm">Coordinates: ${location.Coordinates}</p>
                        <hr class="my-2">
                        <p class="text-sm">Agent: ${location["Agents Name"]}</p>
                        <p class="text-sm">Call Duration: ${location["Call Duration"]}</p>
                        <p class="text-sm">Status: ${location.Status}</p>
                    </div>
                `
        )
        .addTo(map);

      // Store the first marker as current
      if (!currentMarker) {
        currentMarker = marker;
      }
    });

    // Calculate the bounds to fit all markers
    const bounds = L.latLngBounds(
      matchingLocations.map((loc) => {
        const [lat, lng] = loc.Coordinates.split(", ").map(Number);
        return [lat, lng];
      })
    );

    // Fly to the bounds with animation
    map.flyToBounds(bounds, {
      padding: [50, 50],
      duration: 2,
      easeLinearity: 0.25,
    });

    // Open first marker's popup
    currentMarker.openPopup();

    // Update UI
    const mainLocation = matchingLocations[0];
    currentLocation.textContent = `Current: ${mainLocation["First Name"]} ${mainLocation["Last Name"]} - ${mainLocation.City}, ${mainLocation.Country}`;
    addMessage(
      `Found ${matchingLocations.length} matches for "${locationName}"`
    );

    return {
      success: true,
      location: locationName,
      matches: matchingLocations.length,
      mainLocation: {
        name: `${mainLocation["First Name"]} ${mainLocation["Last Name"]}`,
        address: mainLocation.Street,
        city: mainLocation.City,
        country: mainLocation.Country,
        phone: mainLocation["Phone Number"],
        coordinates: mainLocation.Coordinates,
      },
    };
  } catch (error) {
    addMessage(
      `Failed to navigate to "${locationName}": ${error.message}`,
      "error"
    );
    return { success: false, error: error.message };
  }
}

// Helper function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees) {
  return degrees * (Math.PI / 180);
}

function updateLocationStats(stats) {
  const cityStats = document.getElementById("cityStats");
  const cityStatsTitle = document.getElementById("cityStatsTitle");
  const keyFacts = document.getElementById("keyFacts");

  // Show the stats container
  cityStats.classList.remove("hidden");
  cityStatsTitle.textContent = `${stats.cityName} Statistics`;

  // Update key facts
  keyFacts.innerHTML = stats.keyFacts
    .map((fact) => `<div class="fact p-2 bg-base-200 rounded">${fact}</div>`)
    .join("");

  // Update population chart
  if (populationChart) {
    populationChart.destroy();
  }
  const popCtx = document.getElementById("populationChart").getContext("2d");
  populationChart = new Chart(popCtx, {
    type: "line",
    data: {
      labels: stats.populationYears,
      datasets: [
        {
          label: "Population",
          data: stats.populationData,
          borderColor: "#4CAF50",
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => `${(value / 1000000).toFixed(1)}M`,
          },
        },
      },
    },
  });

  // Update climate chart
  if (climateChart) {
    climateChart.destroy();
  }
  const climateCtx = document.getElementById("climateChart").getContext("2d");
  climateChart = new Chart(climateCtx, {
    type: "bar",
    data: {
      labels: stats.climateMonths,
      datasets: [
        {
          label: "Temperature (°C)",
          data: stats.temperatureData,
          borderColor: "#FF9800",
          backgroundColor: "rgba(255, 152, 0, 0.5)",
          yAxisID: "y",
        },
        {
          label: "Rainfall (mm)",
          data: stats.rainfallData,
          borderColor: "#2196F3",
          backgroundColor: "rgba(33, 150, 243, 0.5)",
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: "linear",
          position: "left",
          title: {
            display: true,
            text: "Temperature (°C)",
          },
        },
        y1: {
          type: "linear",
          position: "right",
          title: {
            display: true,
            text: "Rainfall (mm)",
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });
}

// Helper functions
function updateStatus(status, isConnected = false) {
  statusText.textContent = status;
  statusIndicator.className = `w-3 h-3 rounded-full ${
    isConnected ? "bg-success" : "bg-error"
  }`;
}

function addMessage(text, type = "info") {
  const messageDiv = document.createElement("div");
  messageDiv.className = `my-2 p-2 rounded ${
    type === "error"
      ? "bg-error text-error-content"
      : "bg-info text-info-content"
  }`;
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function showLoading(show) {
  loadingAnimation.className = show ? "mt-4" : "hidden mt-4";
  startButton.disabled = show;
}

// WebRTC implementation
async function initializeWebRTC() {
  try {
    showLoading(true);
    updateStatus("Initializing...");

    // Get ephemeral token
    const tokenResponse = await fetch("/session");
    const data = await tokenResponse.json();

    if (!data.client_secret?.value) {
      throw new Error("Failed to get ephemeral token");
    }

    const EPHEMERAL_KEY = data.client_secret.value;

    // Create peer connection
    peerConnection = new RTCPeerConnection();

    // Set up audio element
    audioElement = document.createElement("audio");
    audioElement.autoplay = true;
    peerConnection.ontrack = (e) => (audioElement.srcObject = e.streams[0]);

    // Add local audio track
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    peerConnection.addTrack(mediaStream.getTracks()[0]);

    // Set up data channel
    dataChannel = peerConnection.createDataChannel("oai-events");
    dataChannel.addEventListener("message", handleDataChannelMessage);
    dataChannel.addEventListener("open", () => {
      updateStatus("Connected", true);
      stopButton.disabled = false;
      startButton.disabled = true;
      addMessage("Connection established");
      configureTools();
    });

    // Create and set local description
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Connect to OpenAI Realtime API
    const baseUrl = "https://api.openai.com/v1/realtime";
    const model = "gpt-4o-realtime-preview-2024-12-17";
    const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
      method: "POST",
      body: offer.sdp,
      headers: {
        Authorization: `Bearer ${EPHEMERAL_KEY}`,
        "Content-Type": "application/sdp",
      },
    });

    if (!sdpResponse.ok) {
      throw new Error("Failed to connect to OpenAI Realtime API");
    }

    const answer = {
      type: "answer",
      sdp: await sdpResponse.text(),
    };
    await peerConnection.setRemoteDescription(answer);

    showLoading(false);
  } catch (error) {
    console.error("Error:", error);
    showLoading(false);
    updateStatus("Error: " + error.message);
    addMessage(error.message, "error");
  }
}

// Function to adjust zoom level
async function adjustZoom(zoomIn = true, amount = 1) {
  try {
    const currentZoom = map.getZoom();
    const newZoom = zoomIn ? currentZoom + amount : currentZoom - amount;
    const boundedZoom = Math.min(
      Math.max(newZoom, map.getMinZoom()),
      map.getMaxZoom()
    );

    // Get current center
    const center = map.getCenter();

    // Enhanced radius calculation based on zoom level
    const baseRadius = 1000; // Base radius in kilometers
    const zoomFactor = Math.pow(1.8, 16 - boundedZoom); // Adjusted exponential factor
    const searchRadius = Math.min(baseRadius * zoomFactor, 5000); // Cap at 5000km

    // Find nearby locations with enhanced filtering
    const nearbyLocations = mockupData
      .filter((location) => {
        const [lat, lng] = location.Coordinates.split(", ").map(Number);
        const distance = calculateDistance(center.lat, center.lng, lat, lng);
        return distance <= searchRadius;
      })
      .sort((a, b) => {
        // Sort by distance from center
        const [latA, lngA] = a.Coordinates.split(", ").map(Number);
        const [latB, lngB] = b.Coordinates.split(", ").map(Number);
        const distA = calculateDistance(center.lat, center.lng, latA, lngA);
        const distB = calculateDistance(center.lat, center.lng, latB, lngB);
        return distA - distB;
      });

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Add markers with enhanced popup and animations
    nearbyLocations.forEach((location, index) => {
      const [lat, lng] = location.Coordinates.split(", ").map(Number);
      const distance = calculateDistance(center.lat, center.lng, lat, lng);

      const marker = L.marker([lat, lng], {
        icon: customIcon,
        zIndexOffset: 1000 - index, // Closer locations appear on top
      }).bindPopup(`
                <div class="p-3">
                    <h3 class="font-bold text-lg">${location["First Name"]} ${
        location["Last Name"]
      }</h3>
                    <p class="text-sm mt-2">Address: ${location.Street}</p>
                    <p class="text-sm">City: ${location.City}</p>
                    <p class="text-sm">Country: ${location.Country}</p>
                    <p class="text-sm">Distance: ${distance.toFixed(
                      2
                    )} km from center</p>
                    <hr class="my-2">
                    <p class="text-sm">Status: ${location.Status}</p>
                    <p class="text-sm">Agent: ${location["Agents Name"]}</p>
                    <p class="text-sm">Call Duration: ${
                      location["Call Duration"]
                    }</p>
                </div>
            `);

      // Add marker with staggered animation
      marker.addTo(map);
      anime({
        targets: marker._icon,
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 500,
        delay: index * 50, // Staggered animation
        easing: "easeOutElastic(1, .8)",
      });

      // Highlight markers on hover
      marker.on("mouseover", function () {
        this._icon.style.transform += " scale(1.2)";
        this._icon.style.transition = "transform 0.2s";
        this._icon.style.zIndex = 1000;
      });

      marker.on("mouseout", function () {
        this._icon.style.transform = this._icon.style.transform.replace(
          " scale(1.2)",
          ""
        );
        this._icon.style.zIndex = 900 - index;
      });
    });

    // Smooth zoom animation
    map.setZoom(boundedZoom, {
      animate: true,
      duration: 1,
    });

    addMessage(
      `Zoomed ${zoomIn ? "in" : "out"} to level ${boundedZoom} (${
        nearbyLocations.length
      } locations within ${searchRadius.toFixed(1)}km)`
    );

    return {
      success: true,
      newZoom: boundedZoom,
      visibleLocations: nearbyLocations.length,
      searchRadius: searchRadius,
      nearestLocation: nearbyLocations[0] || null,
    };
  } catch (error) {
    addMessage(`Failed to adjust zoom: ${error.message}`, "error");
    return { success: false, error: error.message };
  }
}

// Function to pan the map in a direction
async function panMap(direction, amount = 100) {
  try {
    const center = map.getCenter();
    let newLat = center.lat;
    let newLng = center.lng;

    // Calculate zoom-adjusted movement amount
    // At max zoom (19), movement should be smallest
    // At min zoom (2), movement should be largest
    const currentZoom = map.getZoom();
    const maxZoom = map.getMaxZoom();
    const minZoom = map.getMinZoom();

    // Calculate zoom factor (1 at max zoom, increasing as zoom decreases)
    const zoomFactor = Math.pow(2, maxZoom - currentZoom);

    // Base movement in degrees (smaller for finer control)
    const baseMovement = 0.0001 * amount;

    // Apply zoom-adjusted movement
    const adjustedMovement = baseMovement * zoomFactor;

    // Calculate new center based on direction
    switch (direction.toLowerCase()) {
      case "north":
        newLat += adjustedMovement;
        break;
      case "south":
        newLat -= adjustedMovement;
        break;
      case "east":
        newLng += adjustedMovement;
        break;
      case "west":
        newLng -= adjustedMovement;
        break;
      default:
        throw new Error("Invalid direction. Use north, south, east, or west.");
    }

    // Pan to new position
    map.panTo([newLat, newLng], {
      animate: true,
      duration: 1, // 1 second animation
    });

    addMessage(`Panned ${direction} (zoom level: ${currentZoom})`);
    return {
      success: true,
      direction,
      newCenter: { lat: newLat, lng: newLng },
      zoomLevel: currentZoom,
      movement: adjustedMovement,
    };
  } catch (error) {
    addMessage(`Failed to pan map: ${error.message}`, "error");
    return { success: false, error: error.message };
  }
}

function configureTools() {
  const event = {
    type: "session.update",
    session: {
      modalities: ["text", "audio"],
      tools: [
        {
          type: "function",
          name: "navigateToLocation",
          description:
            "Navigate the map to find people and places using various search criteria including names, addresses, phone numbers, and more.",
          parameters: {
            type: "object",
            properties: {
              locationName: {
                type: "string",
                description:
                  "Search by any of these criteria:\n" +
                  '- Full name (e.g., "John Smith")\n' +
                  '- First name only (e.g., "John")\n' +
                  '- Last name only (e.g., "Smith")\n' +
                  '- Phone number (e.g., "1208563290")\n' +
                  '- Full address (e.g., "123 Main St, New York, United States")\n' +
                  '- Street name (e.g., "Main St")\n' +
                  '- City name (e.g., "New York")\n' +
                  '- Country name (e.g., "United States")',
              },
            },
            required: ["locationName"],
          },
        },
        {
          type: "function",
          name: "adjustZoom",
          description: "Zoom in or out on the map by a specified amount.",
          parameters: {
            type: "object",
            properties: {
              zoomIn: {
                type: "boolean",
                description: "True to zoom in, false to zoom out",
              },
              amount: {
                type: "number",
                description: "Amount to zoom by (default is 1)",
                minimum: 0.1,
                maximum: 3,
              },
            },
            required: ["zoomIn"],
          },
        },
        {
          type: "function",
          name: "panMap",
          description: "Pan the map in a specified direction.",
          parameters: {
            type: "object",
            properties: {
              direction: {
                type: "string",
                description: "Direction to pan (north, south, east, or west)",
                enum: ["north", "south", "east", "west"],
              },
              amount: {
                type: "number",
                description: "Amount to pan in pixels (default is 100)",
                minimum: 50,
                maximum: 500,
              },
            },
            required: ["direction"],
          },
        },
        {
          type: "function",
          name: "provideLocationStats",
          description:
            "Provide detailed statistics and information about a location.",
          parameters: {
            type: "object",
            properties: {
              cityName: {
                type: "string",
                description:
                  "The name of the location to provide statistics for",
              },
              population: {
                type: "object",
                properties: {
                  years: {
                    type: "array",
                    items: { type: "string" },
                  },
                  data: {
                    type: "array",
                    items: { type: "number" },
                  },
                },
                required: ["years", "data"],
              },
              climate: {
                type: "object",
                properties: {
                  months: {
                    type: "array",
                    items: { type: "string" },
                  },
                  temperature: {
                    type: "array",
                    items: { type: "number" },
                  },
                  rainfall: {
                    type: "array",
                    items: { type: "number" },
                  },
                },
                required: ["months", "temperature", "rainfall"],
              },
              keyFacts: {
                type: "array",
                items: { type: "string" },
              },
            },
            required: ["cityName", "population", "climate", "keyFacts"],
          },
        },
      ],
    },
  };
  dataChannel.send(JSON.stringify(event));
}

function handleDataChannelMessage(event) {
  try {
    const msg = JSON.parse(event.data);

    // Handle function calls
    if (msg.type === "response.function_call_arguments.done") {
      if (msg.name === "navigateToLocation") {
        const args = JSON.parse(msg.arguments);
        navigateToLocation(args.locationName).then((result) => {
          const responseEvent = {
            type: "conversation.item.create",
            item: {
              type: "function_call_output",
              call_id: msg.call_id,
              output: JSON.stringify(result),
            },
          };
          dataChannel.send(JSON.stringify(responseEvent));
        });
      } else if (msg.name === "adjustZoom") {
        const args = JSON.parse(msg.arguments);
        adjustZoom(args.zoomIn, args.amount || 1).then((result) => {
          const responseEvent = {
            type: "conversation.item.create",
            item: {
              type: "function_call_output",
              call_id: msg.call_id,
              output: JSON.stringify(result),
            },
          };
          dataChannel.send(JSON.stringify(responseEvent));
        });
      } else if (msg.name === "panMap") {
        const args = JSON.parse(msg.arguments);
        panMap(args.direction, args.amount || 100).then((result) => {
          const responseEvent = {
            type: "conversation.item.create",
            item: {
              type: "function_call_output",
              call_id: msg.call_id,
              output: JSON.stringify(result),
            },
          };
          dataChannel.send(JSON.stringify(responseEvent));
        });
      } else if (msg.name === "provideLocationStats") {
        const args = JSON.parse(msg.arguments);
        updateLocationStats({
          cityName: args.cityName,
          keyFacts: args.keyFacts,
          populationYears: args.population.years,
          populationData: args.population.data,
          climateMonths: args.climate.months,
          temperatureData: args.climate.temperature,
          rainfallData: args.climate.rainfall,
        });

        const responseEvent = {
          type: "conversation.item.create",
          item: {
            type: "function_call_output",
            call_id: msg.call_id,
            output: JSON.stringify({ success: true }),
          },
        };
        dataChannel.send(JSON.stringify(responseEvent));
      }
    }

    // Log all messages for debugging
    addMessage(`Event: ${JSON.stringify(msg, null, 2)}`);
  } catch (error) {
    console.error("Error parsing message:", error);
    addMessage(`Error parsing message: ${error.message}`, "error");
  }
}

function cleanup() {
  try {
    // Stop all media tracks
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
      mediaStream = null;
    }

    // Clean up audio element
    if (audioElement) {
      audioElement.srcObject = null;
      audioElement.remove();
      audioElement = null;
    }

    // Remove marker
    if (currentMarker) {
      map.removeLayer(currentMarker);
      currentMarker = null;
    }

    // Close data channel
    if (dataChannel) {
      dataChannel.close();
      dataChannel = null;
    }

    // Close peer connection
    if (peerConnection) {
      peerConnection.close();
      peerConnection = null;
    }

    updateStatus("Disconnected");
    startButton.disabled = false;
    stopButton.disabled = true;
    addMessage("Connection closed and resources cleaned up");
  } catch (error) {
    console.error("Error during cleanup:", error);
    addMessage(`Error during cleanup: ${error.message}`, "error");
  }
}

// Event listeners
startButton.addEventListener("click", initializeWebRTC);
stopButton.addEventListener("click", cleanup);

// Add this at the beginning of your file, before any other initialization
async function initializeData() {
  try {
    // mockupData = await fetchCallRecords(); // using DB
    console.log(`Successfully ${mockupData.length} Call records loaded !!!`);

    // Initialize the map after data is loaded
    initMap();

    // Update status and add initial message
    updateStatus("Disconnected");
    addMessage("Ready to connect");

    // Add animations
    anime({
      targets: ".card",
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutElastic(1, .8)",
    });
  } catch (error) {
    console.error("Error in initialize data:", error);
    addMessage("Error loading call records", "error");
  }
}

// Initialize everything when the page loads
document.addEventListener("DOMContentLoaded", initializeData);

async function fetchCallRecords() {
  try {
    const response = await fetch("/api/call-records");
    const data = await response.json();
    if (data.success) {
      return data.data; // This will be your call records array
    } else {
      throw new Error("Failed to fetch call records");
    }
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
