import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ components }) => {
  debugger;
  return (
    <div>
      <ul className="navigation">
        {
          components.map((name) => {
            return (
              <li key={name}>
                <a href={`#${name}`}>{name}</a>
              </li>
            )
          }
          )
        }
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
