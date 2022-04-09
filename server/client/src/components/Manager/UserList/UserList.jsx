import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userList } from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import UserListItem from "./UserListItem/UserListItem";
import Loading from "../../Common/Loading/Loading";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, users } = useSelector((state) => state.userList);
  const { userInfo } = useSelector((state) => state.userLogin);

  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo?.user.role === 1) {
      dispatch(userList());
    } else {
      navigate("/");
    }

    // if (deleteError) {
    //   addToast(deleteError, { appearance: "error", autoDismiss: true });
    // }
    // if (deleteStatus) {
    //   addToast(deleteStatus.message, {
    //     appearance: "success",
    //     autoDismiss: true,
    //   });
    // }
  }, [dispatch, navigate, userInfo, callback]);
  return (
    <>
      <hr />
      <div className="profile__admin">
        <div className="profile__admin__users">
          <h2 className="profile__admin__users-title">Users</h2>

          {loading ? (
            <Loading />
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <UserListItem
              callback={callback}
              setCallback={setCallback}
              users={users}
            />
          )}
          {/* <div style={{ overflowX: "auto" }}>
      <table className="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === 1 ? (
                  <i className="fas fa-check" title="Admin"></i>
                ) : (
                  <i className="fas fa-times" title="User"></i>
                )}
              </td>
              <td>
                <Link to={`/edit_user/${user._id}`}>
                  <i className="fas fa-edit" title="Edit"></i>
                </Link>
                <i
                  className="fas fa-trash-alt"
                  title="Remove"
                  onClick={() => handleDelete(user._id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
        </div>
      </div>
    </>
  );
};

export default UserList;
