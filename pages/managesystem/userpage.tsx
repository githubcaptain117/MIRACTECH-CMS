import type { NextPage } from 'next';
import Select from 'react-select';
import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from 'react';
import { Button, Col, Form, Row, Card, Table } from 'react-bootstrap';
import styles from '../../styles/employsave.module.css';
import { BsCheckBox, BsFileEarmarkArrowDown, BsPencilSquare, BsPlus, BsSearch, BsTrash, BsTrashFill } from 'react-icons/bs';
import { MdPrint, MdSearch } from 'react-icons/md';
//-------------------------------------------------------------------
import th from 'date-fns/locale/th';
import AddandEditUser from '../../component/usermanagement/addandedituser';
registerLocale('th', th)



const Userpage: NextPage = () => {
    const [validated, setValidated] = useState(false);
    const [today, settoday] = useState(new Date(new Date().setFullYear(new Date().getFullYear() + 543)));
    const [toyear, settoyear] = useState(new Date(new Date().setFullYear(new Date().getFullYear() + 543)));
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const options = [
        { value: '01', label: 'วิลัย - สอนดี' },
        { value: '02', label: 'โสพล - สอนเก่ง' },
        { value: '03', label: 'สมหญืง - สอนดีมาก' }
    ]

    const datatable = [
        {
            no: '1',
            username: 'admin',
            agency: '',
            roleuser: 'ผู้ดูแลระบบ',
            status: 'Y',
        },
        {
            no: '2',
            username: 'admin1',
            agency: '',
            roleuser: 'ผู้ดูแลระบบ',
            status: 'Y',
        },
        {
            no: '3',
            username: 'admin2',
            agency: '',
            roleuser: 'ผู้ดูแลระบบ',
            status: 'Y',
        }
    ]

    return (
        <div>
            <main className={styles.main}>
                <Card>
                    <Card.Header className="CardHeader" as="h5">ผู้ใช้งานระบบ</Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <div className={styles.frominput}>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                    <Form.Label>กลุ่มผู้ใช้</Form.Label>
                                                    <Select
                                                        className="basic-single"
                                                        classNamePrefix="select"
                                                        // defaultValue={colourOptions[0]}
                                                        // isDisabled={isDisabled}
                                                        // isLoading={isLoading}
                                                        isClearable={true}
                                                        // isRtl={isRtl}
                                                        isSearchable={true}
                                                        name="color"
                                                        options={options}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                    <Form.Label>หน่วยงาน</Form.Label>
                                                    <Select
                                                        className="basic-single"
                                                        classNamePrefix="select"
                                                        // defaultValue={colourOptions[0]}
                                                        // isDisabled={isDisabled}
                                                        // isLoading={isLoading}
                                                        isClearable={true}
                                                        // isRtl={isRtl}
                                                        isSearchable={true}
                                                        name="color"
                                                        options={options}
                                                    />
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="6" controlId="validationCustom05">
                                                    <Form.Label>ชื่อผู้ใช้ระบบ</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="กรอกข้อมูล....."
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md="3">
                                                    <Button type="submit"><MdSearch size="25px" title="Test" color="#fff" /> ค้นหา</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Body>
                        <Row className="mb-3">
                            <Col md="4">
                                {/* <Button type="submit"><BsPlus /> เพิ่มข้อมูล</Button> */}
                                <AddandEditUser />
                            </Col>
                            <Col md="4">

                            </Col>
                            <Col md="4">
                                <div>
                                    <Card.Text>จำนวนข้อมูล: 3</Card.Text>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Table size="sm" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>ลำดับ</th>
                                        <th style={{ textAlign: 'center' }}>UserNaem</th>
                                        <th style={{ textAlign: 'center' }}>หน่วยงาน</th>
                                        <th style={{ textAlign: 'center' }}>กลุ่มผู้ใช้</th>
                                        <th style={{ textAlign: 'center' }}>แก้ไข</th>
                                        <th style={{ textAlign: 'center' }}>สถานะ</th>
                                        <th style={{ textAlign: 'center' }}>ลบ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datatable.map(data => {
                                            return (
                                                <tr key={data.no}>
                                                    <td>{data.no}</td>
                                                    <td>{data.username}</td>
                                                    <td>{data.agency}</td>
                                                    <td>{data.roleuser}</td>
                                                    <td style={{ textAlign: 'center' }}><Button variant="light"><BsPencilSquare size="25px" color="blue" /></Button></td>
                                                    <td>{data.status}</td>
                                                    <td style={{ textAlign: 'center' }}><Button variant="light"><BsTrash size="25px" color="red" /></Button></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </Row>
                    </Card.Body>
                </Card>
            </main>
        </div>
    )
}
export default Userpage