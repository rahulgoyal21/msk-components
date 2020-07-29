import React from 'react';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white'
  },
  headlineText: {
    margin: 0
  },
  hobbiesItem: {
    margin: 5
  }
});

const Basic = ({ theme, headlineText, hobbies }) => {
  const styles = useStyles(theme);

  return (
    <div
      style={{
        ...styles.root,
        color: 'black'
      }}
    >
      <h1
        style={{
          backgroundColor: theme.value.color,
          margin: 0,
          padding: 20,
          color: 'white'
        }}
      >
        {headlineText.value}
      </h1>
      <hr style={{ margin: 0 }} />
      <div style={{ padding: 20 }}>
        {hobbies.value.map((hobby, id) => {
          return (
            <div
              key={id}
              style={{
                lineHeight: 2,
                display: 'flex'
              }}
            >
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
