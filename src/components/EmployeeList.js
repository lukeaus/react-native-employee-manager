import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView  } from 'react-native';
import { employeesFetch } from '../actions/EmployeeActions';
import { Spinner } from './common';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  // get new data on coming back to the page
  // gets called with the new set of props
  componentWillReceiveProps(nextProps) {
    // nextProps: are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} key={employee.name}>{employee.name}</ListItem>;
  }

  render() {
    const { employees } = this.props;
    if (Array.isArray(employees) && !employees.length) {
      return <Spinner size="large" />;
    }
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
