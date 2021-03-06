import { connect } from 'react-redux';
import UsersList from './users-list-component';
import {
    fetchUsers,
    removeUser,
    addUser,
    changePassword,
    updateUser,
    validatePassword,
} from './../../../store/e-user-admin/actions';
import { hasPermission } from '../../../permissions';

const mapStateToProps = state => ({
    users: state.userAdmin.toJS(),
    location: state.settings.toJS().location || {},
    hasPermission: permission => hasPermission(state.user.get('profile'), permission),
});

const Container = connect(mapStateToProps, {
    fetchUsers,
    removeUser,
    addUser,
    changePassword,
    updateUser,
    validatePassword,
})(UsersList);

export default Container;
