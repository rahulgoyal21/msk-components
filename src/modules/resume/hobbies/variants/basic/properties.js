import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadowPurple,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Hobbies',
    required: true
  },
  hobbies: {
    name: 'Projects',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'First',
        type: propertyTypes.STRING,
        required: true,
        value: 'Lorem ipsum dolor sit amet'
      },
      {
        name: 'Second',
        type: propertyTypes.STRING,
        required: true,
        value: 'Consectetur adipiscing elit'
      },
      {
        name: 'Third',
        type: propertyTypes.STRING,
        required: true,
        value: 'Sed do eiusmod tempor incididunt ut'
      },
      {
        name: 'Fourth',
        type: propertyTypes.STRING,
        required: true,
        value: 'Consectetur adipiscing elit'
      }
    ]
  }
};

export default properties;
