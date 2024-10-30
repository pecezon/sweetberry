const Review = require('../models/Review');

exports.createReview = async (req,res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        console.log("New review created successfully");
        res.status(201).json({ message: "Review created successfully" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to create review", details: err });
    }
}

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "Failed to fetch reviews", details: err });
    }
}