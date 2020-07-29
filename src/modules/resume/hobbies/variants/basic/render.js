import React from 'react';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    color: 'black'
  },
  headlineText: {
    margin: 0,
    backgroundColor: theme.value.color,
    padding: 20,
    color: 'white'
  },
  hobbiesItem: {
    margin: 5
  },
  hobbiesContainer: {
    lineHeight: 2,
    display: 'flex'
  }
});

const Basic = ({ theme, headlineText, hobbies }) => {
  const styles = useStyles(theme);

  return (
    <div
      style={{
        ...styles.root
      }}
    >
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr style={{ margin: 0 }} />
      <div style={{ padding: 20 }}>
        {hobbies.value.map((hobby, id) => {
          return (
            <div key={id} style={styles.hobbiesContainer}>
              <h4 style={styles.hobbiesItem}>{id + 1}.</h4>
              <h4 style={styles.hobbiesItem}>{hobby.value}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basic;
