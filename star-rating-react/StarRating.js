import { useState } from 'react';
import './StarRating.css'

export const StarRating = ({ title, value, disabled }) => {
  const starIcon = String.fromCodePoint(0x2B50);

  const [rating, setRating] = useState(value);
  const [hovered, setHovered] = useState(null);

  const onClick = (newRating) => {
    if (disabled) return;
    setRating(rating === newRating ? null : newRating);
  }

  const onMouseOver = (i) => {
    if (disabled) return;
    setHovered(i);
  };

  const onMouseLeave = () => {
    if (disabled) return;
    setHovered(null);
  };


  return (
    <div className="star-rating">
      {title && <div className="title">{title}</div>}
      <div className="stars">
      {
        new Array(5).fill(null).map((_, i) => {
          const isActive = rating && i < rating;
          const isHovered = hovered && i < hovered;

          const className = `star ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''} ${disabled ? 'disabled' : ''}`;

          return (
            <span
              key={i}
              role="button"
              className={className}
              onClick={() => onClick(i + 1)}
              onMouseOver={() => onMouseOver(i + 1)}
              onMouseLeave={onMouseLeave}
            >
              {starIcon}
            </span>
          );
        })
      }
      </div>
    </div>
  );
};
