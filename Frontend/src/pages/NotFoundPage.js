import React from "react";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <img 
        src="https://via.placeholder.com/400x300?text=404+Not+Found" 
        alt="404 Not Found" 
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h2>404 - Page Not Found</h2>
    </div>
  );
};

export default NotFoundPage;
