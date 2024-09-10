import React, { useContext, useState, useEffect } from 'react';
import './Tasks.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  Container,
  Form,
  FormControl,
  ListGroup,
  Modal
} from 'react-bootstrap';
import { assets } from "../../assets/assets.js";
import FormInput from "../../component/FormInput/FormInput.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEmployeeSchema, editEmployeeSchema } from "../../assets/assets.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faDollarSign, faImage, faPen } from '@fortawesome/free-solid-svg-icons';

function Tasks() {
  const { employee_list, setEmployeeList } = useContext(StoreContext);
  const [search, setSearch] = useState('');
  const [listFilter, setListFilter] = useState(employee_list);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const {
    register: registerADD,
    handleSubmit: handlesubADD,
    reset: resetAdd,
    formState: { errors: addError },
    clearErrors: clearAddError,
  } = useForm({
    resolver: zodResolver(addEmployeeSchema),
    mode: 'onBlur',
  });

  const {
    register: registerEdit,
    handleSubmit: handlesubEdit,
    reset: resetEdit,
    formState: { errors: editError },
    clearErrors: clearEditError
  } = useForm({
    resolver: zodResolver(editEmployeeSchema),
    mode: "onBlur"
  });

  const handleCloseEdit = () => setShowEdit(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowEdit = (employee) => {
    setSelectedEmployee(employee);
    resetEdit(employee);
    setShowEdit(true);
  };
  const handleShowAdd = () => {
    setSelectedEmployee(null);
    setShowAdd(true);
  };

  const handleDelete = (id) => {
    const updatedList = employee_list.filter(employee => employee._id !== id);
    setEmployeeList(updatedList);
    setListFilter(updatedList);
  };

  useEffect(() => {
    const filtered = employee_list.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
    setListFilter(filtered);
  }, [search, employee_list]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (data) => {
    clearAddError();

    const newEmp = {
      ...data,
      _id: employee_list.length ? employee_list.length + 1 : 1,
      position:  data.position
    };

    setEmployeeList([...employee_list, newEmp]);
    setListFilter([...employee_list, newEmp]);
    resetAdd();
    handleCloseAdd();
  };

  const handleEdit = (data) => {
    clearEditError();
    const index = employee_list.findIndex(employee => employee._id === selectedEmployee._id);

    if (index > -1) {
      const updateEmployee = {
        ...selectedEmployee,
        ...data,
        position:  data.position
      }
      const updateList = [...employee_list];
      updateList[index] = updateEmployee;
      setEmployeeList(updateList);
      setListFilter(updateList);
      resetEdit();
      handleCloseEdit();
    }
  }

  return (
    <>
      <Container className="mt-5 shadow task" >
        <Card>
          <CardHeader>
            <h1>
              Employees List
              <Badge pill bg="success" className="ms-2" onClick={handleShowAdd} style={{ cursor: 'pointer' }}>
                Add +
              </Badge>
            </h1>
            <FormControl
              type="text"
              placeholder="Search by name..."
              className="mt-3 mb-3"
              value={search}
              onChange={handleSearchChange}
            />
          </CardHeader>
          <CardBody className="row">
            {listFilter.length > 0 ? (
              listFilter.map((item, index) => (
                <Card key={index} style={{ width: '18rem' }} className="me-4 mb-4 cb">
                  <Card.Img variant="top" src={item.image} className="mm" />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Salary: <span className={'text-danger fw-bold'}>$ {item.salary}</span></ListGroup.Item>
                    <ListGroup.Item>Position: {item.position}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <CardLink onClick={() => handleShowEdit(item)} className="edit" style={{ cursor: 'pointer' }}>
                      Edit
                    </CardLink>
                    <Card.Link onClick={() => handleDelete(item._id)} style={{ cursor: 'pointer' }}>
                      Delete
                    </Card.Link>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p className="text-danger text-center">
                No employees found <img src={assets.sad} className="sad pb-2 ms-3" />
              </p>
            )}
          </CardBody>
        </Card>
      </Container>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Editing Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubEdit(handleEdit)}>
            <FormInput id="editname" label="Name" type="text" placeholder="Edit name" registerProps={registerEdit('name')} error={editError.name} icon={faUser} />
            <FormInput id="editdescription" label="Description" type="text" placeholder="Edit description..." registerProps={registerEdit('description')} error={editError.description} icon={faPen} />
            <FormInput id="editsalary" label="Salary" type="number" placeholder="Edit salary..." registerProps={registerEdit('salary')} error={editError.salary} icon={faDollarSign} />
            <FormInput id="editposition" label="Position" type="text" placeholder="Edit position..." registerProps={registerEdit('position')} error={editError.position} icon={faBriefcase} />
            <FormInput id="editimage" label="Image URL" type="text" placeholder="Edit image URL..." registerProps={registerEdit('image')} error={editError.image} icon={faImage} />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Cancel Edit
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubADD(handleAdd)}>
            <FormInput
              id="addname"
              label="Name"
              type="text"
              placeholder="Enter name"
              registerProps={registerADD('name')}
              error={addError.name}
              icon={faUser}
            />
            <FormInput
              id="adddescription"
              label="Description"
              type="text"
              placeholder="Enter description..."
              registerProps={registerADD('description')}
              error={addError.description}
              icon={faPen}
            />
            <FormInput
              id="addsalary"
              label="Salary"
              type="number"
              placeholder="Enter salary..."
              registerProps={registerADD('salary')}
              error={addError.salary}
              icon={faDollarSign}
            />
            <FormInput
              id="addposition"
              label="Position"
              type="text"
              placeholder="Enter position..."
              registerProps={registerADD('position')}
              error={addError.position}
              icon={faBriefcase}
            />
            <FormInput
              id="addimage"
              label="Image URL"
              type="text"
              placeholder="Enter image URL..."
              registerProps={registerADD('image')}
              error={addError.image}
              icon={faImage}
            />
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Add
              </Button>
              <Button variant="secondary" onClick={handleCloseAdd}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Tasks;
