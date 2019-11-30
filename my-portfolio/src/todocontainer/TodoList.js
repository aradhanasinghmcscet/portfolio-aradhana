import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/actionCreater';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
  render() {
    return (
      <div className='container'>
        {this.props.todos.length !== 0 ? (
          <ul class='collection'>
            {this.props.todos.map(todo => (
              <li key={todo.id} class='collection-item '>
                <span className='index'>{todo.id}</span>
                <p>{todo.text}</p>
                <a href='#!' className='secondary-content'>
                  <i className='material-icons add green'>add</i>
                </a>
                <a
                  href='#!'
                  onClick={() => this.props.deleteTodo(todo.id)}
                  className='secondary-content'
                >
                  <i className='material-icons delete red'>delete</i>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ marginTop: '50px' }} className='container'>
            <div className='alert alert-danger' role='alert'>
              Todo List is empty or Filter results show no results
            </div>
          </div>
        )}{' '}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo
    },
    dispatch
  );
};
export default connect(mapDispatchToProps)(TodoList);
