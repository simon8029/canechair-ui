import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles, StyleRules, Theme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    root: {
      margin: theme.spacing.unit
    }
  };
  return styles;
}, { withTheme: true });

export const CCContainerHeader = decorate<ThisPropsType>(
  class InnerClass extends React.Component<ThisPropsType & WithStyles<'root'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div className={this.props.classes.root}>
          <Grid container>
            <Grid item xs>
              <AppBar position="static" color="default" className={this.props.className}>
                <Toolbar>
                  <Typography variant="title" color="inherit">
                    {this.props.title}
                  </Typography>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

function mapStateToProps(state: StateToPropsType, ownProps: OwnPropsType): StateToPropsType {
  return {
    title: ownProps.title,
    subTitle: ownProps.subTitle,
    className: ownProps.className
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
};

type StateToPropsType = {
  title: string;
  subTitle?: string | undefined;
  className?: string | undefined;
};

type DispatchToPropsType = {
};

type OwnPropsType = {
  title: string;
  subTitle?: string | undefined;
  className?: string | undefined;
};

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnPropsType;

export default connect<StateToPropsType, DispatchToPropsType, OwnPropsType>(mapStateToProps, mapDispatchToProps)(CCContainerHeader);
