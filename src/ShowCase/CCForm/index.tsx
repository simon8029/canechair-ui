import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withStyles, WithStyles, StyleRules, Theme } from 'material-ui/styles';
import CCContainerHeader from 'Parts/CCContainerHeader';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    root: {
      flexGrow: 1
    },
    formAppBar: {

    }
  };
  return styles;
}, { withTheme: true });

export const CCForm = decorate<ThisPropsType>(
  class InnerClass extends React.Component<ThisPropsType & WithStyles<'root' | 'formAppBar'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div className={this.props.classes.root}>
          <CCContainerHeader
            className={this.props.classes.formAppBar}
            title="Form"
            subTitle="subTitle"
          />
          {/* <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Text Fields" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center" heading="TextField">
                    <TextFields/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center" heading="Components">
                    <ComposedTextField/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center" heading="Layout">
                    <TextFieldMargins/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center" heading="Inputs">
                    <Inputs/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center" heading="Checkboxes">
                    <Checkboxes/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Switches">
                    <Switches/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Switches">
                    <SwitchLabels/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Radio Buttons">
                    <RadioButtons/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Radio Buttons Group">
                    <RadioButtonsGroup/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Simple select">
                    <SimpleSelect/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Native Select">
                    <NativeSelect/>
                </CardBox>
                <CardBox heading="Multiple select">
                    <MultipleSelect/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Dialog select">
                    <DialogSelect/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox childrenStyle="d-flex justify-content-center" heading="Indeterminate Circular">
                    <CircularIndeterminate/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Determinate Circular">
                    <CircularDeterminate/>
                </CardBox>
                <CardBox heading="Indeterminate Linear">
                    <LinearIndeterminate/>
                </CardBox>
                <CardBox heading="Determinate Linear">
                    <LinearDeterminate/>
                </CardBox>
                <CardBox heading="Buffer Linear">
                    <LinearBuffer/>
                </CardBox>
                <CardBox heading="Query Linear">
                    <LinearQuery/>
                </CardBox>
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading="Interactive Integration">
                    <CircularFab/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox childrenStyle="d-flex justify-content-center" heading="Date pickers">
                    <DatePickers/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Time pickers">
                    <TimePickers/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Date & Time pickers">
                    <DateAndTimePickers/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Custom Date & Time pickers">
                    <CustomDateTimePicker/>
                </CardBox>
                <CardBox childrenStyle="d-flex justify-content-center" heading="Week picker">
                    <WeekPicker/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox childrenStyle="text-center" heading="Alerts">
                    <AlertDialog/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Alert Dialogs">
                    <AlertDialogSlide/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Simple Dialogs">
                    <SimpleDialogDemo/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Full-Screen Dialogs">
                    <FullScreenDialog/>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Form Dialog">
                    <div className="card d-inline-block">
                        <FormDialog/>
                    </div>
                </CardBox>
                <CardBox childrenStyle="text-center" heading="Confirmation Dialogs">
                    <div className="card d-inline-block">
                        <ConfirmationDialogDemo/>
                    </div>
                </CardBox>

            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Chip">
                    <Chip/>
                </CardBox>
                <CardBox styleName="col-lg-12" heading="Chip Array">
                    <ChipsArray/>
                </CardBox>
            </div>
        </div> */}
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

export default connect<StateToPropsType, DispatchToPropsType>(mapStateToProps, mapDispatchToProps)(CCForm);
