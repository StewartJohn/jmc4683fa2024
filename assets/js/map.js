// Create the map
const map = L.map('map').setView([35.2200, -97.4400], 13);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Inject styles for custom icons
const style = document.createElement('style');
style.innerHTML = `
.icon {
    background-color: #ffffff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.icon.solid.major.fa-utensils.accent1 {
    font-size: 6px;
    font-weight: 900;
}
.icon.solid.major.fa-leaf.accent2 {
    font-size: 6px;
    font-weight: 900;
}
.icon.solid.major.fa-wine-glass.accent3 {
    font-size: 6px;
    font-weight: 900;
}
.icon.solid.major.fa-medal.accent4 {
    font-size: 6px;
    font-weight: 900;
}
.icon.solid.major.fa-building.accent5 {
    font-size: 6px;
    font-weight: 900;
}
`;
document.head.appendChild(style);

// Define icons for different categories
const icons = {
    restaurant: L.divIcon({
        className: 'icon solid major fa-utensils accent1',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: '<i class="fa fa-utensils"></i>'
    }),
    park: L.divIcon({
        className: 'icon solid major fa-leaf accent2',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: '<i class="fa fa-leaf"></i>'
    }),
    bar: L.divIcon({
        className: 'icon solid major fa-wine-glass accent3',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: '<i class="fa fa-wine-glass"></i>'
    }),
    sports: L.divIcon({
        className: 'icon solid major fa-medal accent4',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: '<i class="fa fa-medal"></i>'
    }),
    housing: L.divIcon({
        className: 'icon solid major fa-building accent5',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: '<i class="fa fa-building"></i>'
    })
};

// Define locations with categories
const locations = [
    { name: "Reaves Park | City of Norman, OK", lat: 35.2053, lon: -97.4386, category: 'park', url: 'reaves.html' },
    { name: "Jimmie Austin Golf Club Norman, OK", lat: 35.1936, lon: -97.4263, category: 'park', url: 'jimmy.html'},
    { name: "Sutton Wilderness Park Norman OK", lat: 35.2357, lon: -97.4376, category: 'park', url: "sutton.html" },
    { name: "Tarahumara's Mexican Cafe & Cantina", lat: 35.227951, lon: -97.441422, category: 'restaurant', url: "tarahumaras.html" },
    { name: "The Winston restaurant", lat: 35.2171, lon: -97.4457, category: 'restaurant', url: "winston.html" },
    { name: "Picklemans restaurant", lat: 35.212051, lon: -97.443352, category: 'restaurant', url: "picklemans.html" },
    { name: "Torchy’s", lat: 35.2115, lon: -97.4447, category: 'bar', url: "torchys.html" },
    { name: "Logie’s on the Corner", lat: 35.2116, lon: -97.4441, category: 'bar', url: "logies.html" },
    { name: "Rock House Bar", lat: 35.2118, lon: -97.4443, category: 'bar', url: "rockhouse.html" },
    { name: "Lloyd Noble Center", lat: 35.2035, lon: -97.4452, category: 'sports', url: "lloyd.html" },
    { name: "Gaylord Memorial Stadium", lat: 35.2059, lon: -97.4423, category: 'sports', url: "gaylord.html" },
    { name: "Loves Field", lat: 35.2038, lon: -97.4450, category: 'sports', url: "loves.html" },
    { name: "The Flats at Norman", lat: 35.2089, lon: -97.4551, category: 'housing', url: "flats.html" },
    { name: "Montara Park", lat: 35.2371, lon: -97.4589, category: 'housing', url: "montara.html" },
    { name: "The Avenue at Norman | Premier Student Housing With a Modern Twist", lat: 35.2272, lon: -97.4630, category: 'housing', url: "avenue.html" }
];

// Add markers with appropriate icons
locations.forEach(location => {
    if (!isNaN(location.lat) && !isNaN(location.lon)) {
        const icon = icons[location.category] || icons['restaurant']; // Default to restaurant icon
        L.marker([location.lat, location.lon], { icon: icon })
            .addTo(map)
            .bindPopup(`<a href='${location.url}'>${location.name}</a>`);
    }
});

// Automatically fit the map bounds to the locations
const bounds = L.latLngBounds(locations.map(location => [location.lat, location.lon]));
map.fitBounds(bounds);
