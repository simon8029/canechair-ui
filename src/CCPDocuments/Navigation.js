import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ Components }) => {
  // debugger;
  return (
    <div>
      <ul className="navigation">
        {
          Components.map((component) => {
            return (
              <li key={component.ComponentName}>
                <a href={`#${component.ComponentName}`}>{component.ComponentName}</a>
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
  Components: PropTypes.array.isRequired
};

export default Navigation;
