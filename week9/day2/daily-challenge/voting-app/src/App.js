import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const voteLanguage = (languageName) => {
    const updatedLanguages = languages.map(lang => {
      if (lang.name === languageName) {
        return { ...lang, votes: lang.votes + 1 };
      }
      return lang;
    });
    setLanguages(updatedLanguages);
  };

  
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '40px'  
    },
    title: {
      fontSize: '50px',  
      color: '#333'
    },
    listContainer: {
      width: '400px', 
    },
    listItem: {
      background: '#FFDAB9', 
      border: '1px solid #333',  
      margin: '5px 0', 
      padding: '20px', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '22px', 
    },
    button: {
      padding: '12px 24px', 
      fontSize: '18px',  
      border: 'none',
      borderRadius: '10px', 
      cursor: 'pointer',
      color: 'green',
      backgroundColor: '#0000',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Vote Your Language!</h1>
      <div style={styles.listContainer}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {languages.map((lang, index) => (
            <li key={index} style={styles.listItem}>
              <span>{lang.votes}</span>
              <span>{lang.name}</span>
              <button style={styles.button} onClick={() => voteLanguage(lang.name)}>Click Here</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;




