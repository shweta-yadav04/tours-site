import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  console.log("Card component received:", { id, name, info, image, price });
  
  const [readmore, setReadmore] = useState(false);
  
  // Handle potential undefined info
  const description = !info ? "" : 
                      readmore ? info : 
                      info.length > 200 ? `${info.substring(0, 200)}...` : info;

  function readmoreHandler() {
    setReadmore(!readmore);
  }
  
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Placeholder image if image path is invalid */}
      <img 
        src={image}
        alt={name || "Tour"} 
        style={{width: '100%', height: '200px', objectFit: 'cover'}}
        onError={(e) => {
          console.log("Image failed to load:", image);
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x300";
        }}
      />
      
      <div style={{padding: '15px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
          <h4 style={{color: '#2c3e50', fontWeight: 'bold'}}>{name}</h4>
          <h4 style={{color: '#e74c3c'}}>₹{price}</h4>
        </div>
      
        <div style={{color: '#555', lineHeight: '1.5', marginBottom: '15px'}}>
          {description}
          {info && info.length > 200 && (
            <span 
              style={{color: '#3498db', cursor: 'pointer', fontWeight: 'bold'}} 
              onClick={readmoreHandler}
            >
              {readmore ? " Show less" : " Read more"}
            </span>
          )}
        </div>
      </div>

      <button 
        style={{
          width: '100%',
          padding: '10px 0',
          backgroundColor: 'white',
          color: '#e74c3c',
          border: '1px solid #e74c3c',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none',
          fontWeight: 'bold',
          cursor: 'pointer'
        }} 
        onClick={() => {
          console.log("Not Interested clicked for tour ID:", id);
          if (removeTour && typeof removeTour === 'function') {
            removeTour(id);
          } else {
            console.error("removeTour is not a function or undefined");
          }
        }}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Card;