const Flavor = require('../models/Flavor');

exports.createFlavor = async (req,res) => {
    try {
        const newFlavor = new Flavor(req.body);
        await newFlavor.save();
        console.log("New flavor created successfully");
        res.status(201).json({ message: "Flavor created successfully" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to create flavor", details: err });
    }
}

exports.getFlavors = async (req, res) => {
    try {
        const flavors = await Flavor.find();
        res.status(200).json(flavors);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to fetch flavors", details: err });
    }
}