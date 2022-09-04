import { useEffect, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { getAllUsers, getUserWithPaginate } from '../../../services/ApiServices';
import './ManageUser.scss';
import ModalCreateUser from './ModalCreateUser';
import ModalDeleteUser from './ModalDeleteUser';
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import TableUserPaginate from './TableUserPaginate';

const ManageUser = (props) => {

  const LIMIT_USER = 4;
  const [pageCount, setPageCount] = useState(0);
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // fetchListusers();
    fetchListusersPaginations(1);
  }, []);

  const fetchListusers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchListusersPaginations = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      console.log(res.DT)
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
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
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListusersPaginations={fetchListusersPaginations}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <ModalCreateUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        // fetchListusers={fetchListusers}
        fetchListusersPaginations={fetchListusersPaginations}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}        
      />
      <ModalUpdateUser
        show={showModalUpdateUser}
        setShow={setShowModalUpdateUser}
        dataUpdate={dataUpdate}
        resetUpdateData={resetData}
        fetchListusersPaginations={fetchListusersPaginations}
        // fetchListusers={fetchListusers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalViewUser
        show={showModalViewUser}
        setShow={setShowModalViewUser}
        dataView={dataView}
        resetViewData={resetData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ModalDeleteUser
        show={showModalDeleteUser}
        setShow={setShowModalDeleteUser}
        dataDelete={dataDelete}
        // fetchListusers={fetchListusers}
        fetchListusersPaginations={fetchListusersPaginations}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default ManageUser;
