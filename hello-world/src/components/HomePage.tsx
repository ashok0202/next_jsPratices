"use client"
const HomePage = () => {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <iframe
          src="java/html/index.html"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="SCORM Content"
          allowFullScreen
        />
      </div>
    );
  };
  
  export default HomePage;
  