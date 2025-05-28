import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Students.css';

function Students() {
  const [students, setStudents] = useState([]);
  const [show, setShow] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });

  // Load students from localStorage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem('crmStudents');
    if (stored) {
      setStudents(JSON.parse(stored));
    }
  }, []);

  // Save students to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('crmStudents', JSON.stringify(students));
  }, [students]);

  const handleClose = () => {
    setShow(false);
    setEditingStudent(null);
    setFormData({ name: '', email: '', course: '' });
  };

  const handleShow = (student = null) => {
    setEditingStudent(student);
    setFormData(student || { name: '', email: '', course: '' });
    setShow(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editingStudent) {
      setStudents(students.map((s) =>
        s.id === editingStudent.id ? { ...editingStudent, ...formData } : s
      ));
    } else {
      const newStudent = {
        id: Date.now(),
        ...formData,
      };
      setStudents([...students, newStudent]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className='student_container'>
      <h3 className="mb-3">Students</h3>
      <Button variant="primary" onClick={() => handleShow()}>Add Student</Button>
      <table className="table table-striped table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleShow(student)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(student.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingStudent ? 'Edit Student' : 'Add Student'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" name="course" value={formData.course} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Students;
