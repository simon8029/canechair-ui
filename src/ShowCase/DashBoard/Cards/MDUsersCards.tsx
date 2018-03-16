import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import purple from 'material-ui/colors/purple';
import pink from 'material-ui/colors/pink';
import blue from 'material-ui/colors/blue';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const decorate = withStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  card_total: {
    // maxWidth: 400,
    // height: 200
  },
  card_md: {
    // maxWidth: 300,
    // minWidth: 200
  },
  media: {
    // height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar_total: {
    backgroundColor: red[500],
  },
  avatar_md: {
    backgroundColor: green[500],
  },
  avatar_au: {
    backgroundColor: purple[500],
  },
  avatar_in: {
    backgroundColor: blue[500],
  },
  avatar_other: {
    backgroundColor: pink[500],
  },
  paper_placeholder_totalCustomer: {
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: theme.spacing.unit * 5,
    textAlign: 'center'
  }
}));

export const CCTotalUsersCard = decorate<ThisPropsType>(
  class TotalUsersCard extends React.Component<ThisPropsType & WithStyles<'root' | 'card_total' | 'card_md' | 'media' | 'actions' | 'expand' | 'expandOpen' | 'avatar_total' | 'avatar_md' | 'avatar_au' | 'avatar_in' | 'avatar_other' | 'paper_placeholder_totalCustomer'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div className={this.props.classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={5}>
              <Card className={this.props.classes.card_total}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="" className={this.props.classes.avatar_total}>
                      T
                  </Avatar>}
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Customers in Total"
                  subheader={`[Amount]`}
                />
                <CardContent>
                  <Paper className={this.props.classes.paper_placeholder_totalCustomer}>
                    <Typography>
                      [Chart]
                    </Typography>
                  </Paper>
                </CardContent>
                <CardActions className={this.props.classes.actions} disableActionSpacing>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={7} >
              <Grid container spacing={24} >
                <Grid item xs={12} md={6}>
                  <Card className={this.props.classes.card_md}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="" className={this.props.classes.avatar_md}>
                          Md
                  </Avatar>}
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="MD Site"
                      subheader={`[Amount]`}
                    />
                    <CardActions className={this.props.classes.actions} disableActionSpacing>
                      <Button size="small" color="primary">
                        Details
                  </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className={this.props.classes.card_md}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="" className={this.props.classes.avatar_au}>
                          Au
                  </Avatar>}
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="AU Site"
                      subheader={`[Amount]`}
                    />
                    <CardActions className={this.props.classes.actions} disableActionSpacing>
                      <Button size="small" color="primary">
                        Details
                  </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className={this.props.classes.card_md}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="" className={this.props.classes.avatar_in}>
                          In
                  </Avatar>}
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Inernational Site"
                      subheader={`[Amount]`}
                    />
                    <CardActions className={this.props.classes.actions} disableActionSpacing>
                      <Button size="small" color="primary">
                        Details
                  </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className={this.props.classes.card_md}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="" className={this.props.classes.avatar_other}>
                          D
                  </Avatar>}
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Dormant"
                      subheader={`[Amount]`}
                    />
                    <CardActions className={this.props.classes.actions} disableActionSpacing>
                      <Button size="small" color="primary">
                        Details
                  </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

function mapStateToProps(state: StateToPropsType): StateToPropsType {
  return {
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

type ThisPropsType = StateToPropsType & DispatchToPropsType;

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCTotalUsersCard);
