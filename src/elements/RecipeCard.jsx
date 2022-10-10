import React from "react";
import { Navigate } from "react-router-dom";
import "./RecipeCardStyles.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className="recipe_card">
      <div>
        <div className="recipe_img">
          <img src="https://images.unsplash.com/photo-1597289124948-688c1a35cb48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <h3>Lasagna</h3>
      </div>
      <button className="blue-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
