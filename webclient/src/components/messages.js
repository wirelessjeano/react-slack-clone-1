import React, { Component } from 'react';
import { Container, TextArea, Form } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

import { bindActionCreators } from 'redux';
import { getUsers } from '../redux/actions';
import { connect } from 'react-redux';

import LoginModal from './loginmodal'

import '../styles/messages.css';

class Messages extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Container fluid id='messages-container'>

        <div className='text-input-container'>
          <Form>
            {
              (isEmpty(currentUser) && localStorage.getItem("auth") === null) ? (
                <LoginModal />
              ) : (
                  <TextArea placeholder='chat' autoHeight />
                )
            }
          </Form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUsers,
  }, dispatch)
}

export default connect()(Messages);
