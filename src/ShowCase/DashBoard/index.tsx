import * as React from 'react';

class Default extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: undefined,
      menuState: false,
    };
  }

  render() {
    return (
      <div>DashBoard</div>
    );
  }
}

export default Default;