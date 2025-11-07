"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { motion } from "framer-motion";
import { Star, Loader2 } from "lucide-react";
import { loadRazorpay } from "../utils/razorpay";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // ---------------- Fetch food details ----------------
  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const docRef = doc(db, "foods", id);
        const snap = await getDoc(docRef);
        if (snap.exists()) setFood({ id: snap.id, ...snap.data() });
      } catch (err) {
        console.error("Error fetching food details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFoodDetails();
  }, [id]);

  // ---------------- Fetch reviews ----------------
  const fetchReviews = async () => {
    try {
      const reviewRef = collection(db, "foods", id, "reviews");
      const snap = await getDocs(reviewRef);
      const reviewList = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewList.sort((a, b) => b.createdAt - a.createdAt));
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  // ---------------- Handle Submit Review ----------------
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!reviewText.trim() || rating === 0) return alert("Please add text & rating");

    try {
      const user = auth.currentUser;
      if (!user) return alert("Please login to submit a review");

      setSubmitting(true);

      // Fetch user data
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.exists() ? userDoc.data() : {};

      await addDoc(collection(db, "foods", id, "reviews"), {
        text: reviewText,
        rating,
        createdAt: serverTimestamp(),
        userId: user.uid,
        userName: userData.name || user.displayName || "Anonymous",
        userPhoto: userData.photoURL || user.photoURL || "https://i.pravatar.cc/100",
      });

      setReviewText("");
      setRating(0);
      fetchReviews();
      alert("Review added successfully!");
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Something went wrong while adding review.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleBuyNow = async () => {
    await loadRazorpay(food);
  };

  if (loading || !food)
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="animate-spin text-yellow-500" size={36} />
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-10 px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        <motion.img
          src={food.imageUrl}
          alt={food.name}
          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
        />

        <div className="p-8 space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900"
          >
            {food.title}
          </motion.h1>

          <p className="text-gray-600 leading-relaxed">{food.description}</p>

          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-yellow-600">
              ₹{food.price}
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBuyNow}
              className="bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 font-semibold px-6 py-2.5 rounded-lg shadow-lg"
            >
              Buy Now
            </motion.button>
          </div>

          {/* ---------------- Reviews Section ---------------- */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-4 border rounded-2xl bg-gray-50 flex items-start gap-3"
                  >
                    <img
                      src={rev.userPhoto || "https://i.pravatar.cc/100"}
                      alt={rev.userName}
                      className="w-10 h-10 rounded-full border"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {rev.userName}
                      </h4>
                      <div className="flex items-center text-yellow-500 text-sm mb-1">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{rev.text}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet. Be the first!</p>
              )}
            </div>

            {/* ---------------- Add Review ---------------- */}
            <form
              onSubmit={handleSubmitReview}
              className="mt-8 bg-white p-4 border rounded-2xl shadow-sm space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Add Your Review
              </h3>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i} 
                    size={22}
                    className={`cursor-pointer ${
                      i < rating ? " strokeWidth={7} absoluteStrokeWidth text-yellow-400   " : "text-gray-300"
                    }`}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>

              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your thoughts..."
                className="w-full border rounded-xl p-3 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400"
                rows="3"
              ></textarea>

              <button
                type="submit"
                disabled={submitting}
                className="bg-yellow-400 hover:bg-yellow-500 transition text-gray-900 font-semibold px-5 py-2.5 rounded-lg shadow-md"
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodDetails;