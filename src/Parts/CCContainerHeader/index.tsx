import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles, StyleRules, Theme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    wrapper: {
      maxWidth: 400,
    },
    paper: {
      margin: theme.spacing.unit,
      padding: theme.spacing.unit * 2,
    }
  };
  return styles;
}, { withTheme: true });

export const CCContainerHeader = decorate<ThisPropsType>(
  class InnerClass extends React.Component<ThisPropsType & WithStyles<'root' | 'paper' | 'wrapper'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div className={this.props.classes.root}>
          <div className={this.props.classes.wrapper}>
            <Paper className={this.props.classes.paper} >
              <Grid container wrap="nowrap"  >
                <Grid item xs={6}>
                  <Typography variant="headline" component="h3">
                    {this.props.title}
                  </Typography>
                  <Typography >
                    {this.props.subTitle}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      );
    }
  }
);

function mapStateToProps(state: StateToPropsType, ownProps: OwnPropsType): StateToPropsType {
  return {
    title: ownProps.title,
    subTitle: ownProps.subTitle
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
};

type StateToPropsType = {
};

type DispatchToPropsType = {
};

type OwnPropsType = {
  title: string;
  subTitle: string;
};

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnPropsType;

export default connect<StateToPropsType, DispatchToPropsType, OwnPropsType>(mapStateToProps, mapDispatchToProps)(CCContainerHeader);
