var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        artist: "Abba Gold",
    }
};


// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(objects, id, prop, value) {

    // Only change code below this line
    if (prop !== "tracks" && objects[id].tracks === undefined) {
        objects[id].album = value;
    } else if (prop === "tracks" && objects[id].tracks === undefined) {
        objects[id].tracks = [value];
    } else if (prop === "tracks" && value !== "" ) {
        objects[id].tracks.push(value);
    } else if (value === "") {
        delete objects[id][prop];
    }

    return objects;
    // Only change code above this line
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love")); // Change this line
module.exports = updateRecords;