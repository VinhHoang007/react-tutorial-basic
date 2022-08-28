import { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { getAllUsers } from '../../../services/ApiServices';
import './ManageUser.scss';
import ModalCreateUser from './ModalCreateUser';
import ModalDeleteUser from './ModalDeleteUser';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import TableUser from './TableUser';

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListusers();
  }, []);

  const fetchListusers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataView(user);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const resetData = () => {
    setDataUpdate({});
    setDataView({});
    setDataDelete({});
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>

      <div className="users-content">
        <div className="btn-add-user">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FaPlusCircle /> Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          />
        </div>
      </div>
      <ModalCreateUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        fetchListusers={fetchListusers}
      />
      <ModalUpdateUser
        show={showModalUpdateUser}
        setShow={setShowModalUpdateUser}
        dataUpdate={dataUpdate}
        fetchListusers={fetchListusers}
        resetUpdateData={resetData}
      />
      <ModalViewUser
        show={showModalViewUser}
        setShow={setShowModalViewUser}
        dataView={dataView}
        resetViewData={resetData}
      />
      <ModalDeleteUser
        show={showModalDeleteUser}
        setShow={setShowModalDeleteUser}
        dataDelete={dataDelete}
        fetchListusers={fetchListusers}
      />
    </div>
  );
};

export default ManageUser;
