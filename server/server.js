import express from "express";

const app = express();

/*********************
 * Defines server port
 *********************/
const PORT = 3000;

/*********************
 * GET request, response 
 * from server.
 *********************/
app.get("/", (req, res) => {
    res.send("Garden2Plate server is running!")
});

/*********************
 * Test endpoint
 *********************/
app.get("/api/plants/search", async (req, res) => {
    const plantName = req.query.q;

    if (!plantName) {
        return res.status(400).json({
            error: "A plant name is required."
        });
    }

    const url = `https://perenual.com/api/species-list?key=${apiKey}&edible=1&q=${encodeURIComponent(plantName)}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return res.status(502).json({
                error: "The plant data service returned an error."
            });
        }

        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error("Perenual request failed:", error);

        res.status(500).json({
            error: "Unable to retrieve plant data."
        });
    }
});

/*********************
 * Calls API key for
 * Perenual API
 *********************/
const apiKey = process.env.PERENUAL_API_KEY;

if (apiKey) {
    console.log("Perenual API key loaded successfully.");
} else {
    console.log("Perenual API key was NOT loaded.");
}



/*********************
 * express listening to
 * assigned PORT
 *********************/
app.listen(PORT, () => {
    console.log(`Garden2Plate server running on port ${PORT}`);
});