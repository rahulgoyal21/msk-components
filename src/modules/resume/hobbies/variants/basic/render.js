import React from 'react';
import themes from 'msk-themes';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white'
  },
  headlineText: {
    margin: 0
  },
  hobbiesItem: {
    margin: 0
  }
});

const Basic = ({ theme, headlineText, hobbies }) => {
  const styles = useStyles();

  return (
    <div
      style={{
        ...styles.root,
        color: theme.value.contrast
      }}
    >
      <h1
        style={{
          backgroundColor: headlineText.background.color,
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
            <div key={id} style={{ lineHeight: 2 }}>
              <h4 style={styles.hobbiesItem}>
                {id + 1}. {hobby.value}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basic;
