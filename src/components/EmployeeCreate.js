import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../components/common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm.js';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    // set default value incase user selects Monday (first value) without changing the Picker
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          {/* // take all the props and pass them on */}
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
