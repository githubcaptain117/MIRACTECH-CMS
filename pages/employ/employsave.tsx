import type { NextPage } from 'next';
import Select from 'react-select';
import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from 'react';
import { Button, Col, Form, Row, Card, Table } from 'react-bootstrap';
import styles from '../../styles/employsave.module.css';
import { BsCheckBox, BsFileEarmarkArrowDown, BsPencilSquare, BsPlus, BsSearch, BsTrash, BsTrashFill } from 'react-icons/bs';
import { MdPrint, MdSearch } from 'react-icons/md';
//-------------------------------------------------------------------
import AddEmploysave from '../../component/employ/addemploysave';
import th from 'date-fns/locale/th';
registerLocale('th', th)



const Employsave: NextPage = () => {
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
            status: 'N',
            numberpaper: 'xx/xxxx',
            title: 'Test1',
            namearrb: 'Test1',
            duedate: 'xx/xx/xxxx',
            price: 'xxxxxx',
            nameuser: 'xxxxxxxxx',
        },
        {
            no: '2',
            status: 'N',
            numberpaper: 'xx/xxxx',
            title: 'Test2',
            namearrb: 'Test2',
            duedate: 'xx/xx/xxxx',
            price: 'xxxxxx',
            nameuser: 'xxxxxxxxx',
        },
        {
            no: '3',
            status: 'N',
            numberpaper: 'xx/xxxx',
            title: 'Test3',
            namearrb: 'Test3',
            duedate: 'xx/xx/xxxx',
            price: 'xxxxxx',
            nameuser: 'xxxxxxxxx',
        }
    ]

    return (
        <div>
            <main className={styles.main}>
                <Card>
                    <Card.Header className="CardHeader" as="h5">บันทึกขอจัดซื้อ/จัดจ้าง/ซ่อม</Card.Header>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <div className={styles.frominput}>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="3" controlId="validationCustom01">
                                                    <Form.Label>เลขที่ใบขอซื้อ/จ้าง/ซ่อม</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="กรอกข้อมูล....."
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                {/* <Form.Group as={Col} md="2" controlId="validationCustom02">
                                                    <Form.Label>เรื่อง รายงานขอซื้อ/จ้าง/ซ่อม</Form.Label>
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
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                                                    <Form.Label>ผู้ขอจัดซื้อ</Form.Label>
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
                                                </Form.Group> */}
                                            </Row>
                                            {/* <Row className="mb-3">
                                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                    <Form.Label>เลขที่ใบขอซื้อ/จ้าง/ซ่อม</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="กรอกข้อมูล....."
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                                    <Form.Label>เรื่อง รายงานขอซื้อ/จ้าง/ซ่อม</Form.Label>
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
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                                                    <Form.Label>ผู้ขอจัดซื้อ</Form.Label>
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
                                            </Row> */}
                                            <Row className="mb-3">
                                                {/* <Form.Group as={Col} md="2" controlId="validationCustom03">
                                                    <Form.Label>สถานะเอกสาร</Form.Label>
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
                                                </Form.Group> */}
                                                {/* <Form.Group as={Col} md="2" controlId="validationCustom04">
                                                    <Form.Label>ผู้จัดทำ</Form.Label>
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
                                                </Form.Group> */}
                                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                    <Form.Label>ปีงบประมาณ </Form.Label>
                                                    <DatePicker
                                                        selected={toyear}
                                                        dateFormat="yyyy"
                                                        locale={'th'}
                                                        yearItemNumber = {6}
                                                        onChange={(e: any) => {
                                                            settoyear(e)
                                                            // setFieldValue('date', e);
                                                            // setFieldTouched('date');
                                                        }}
                                                        className="form-control"
                                                        // minDate={today}
                                                        // customInput={
                                                        //     <input
                                                        //         type="text"
                                                        //         id="validationCustom01"
                                                        //         placeholder="First name"
                                                        //     />
                                                        // }
                                                        showYearPicker
                                                        isClearable
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                    <Form.Label>วันที่ </Form.Label>
                                                    <DatePicker
                                                        selected={today}
                                                        dateFormat="dd/MM/yyyy"
                                                        locale={'th'}
                                                        onChange={(e: any) => {
                                                            settoday(e)
                                                            // setFieldValue('date', e);
                                                            // setFieldTouched('date');
                                                        }}
                                                        className="form-control"
                                                        // minDate={today}
                                                        // customInput={
                                                        //     <input
                                                        //         type="text"
                                                        //         id="validationCustom01"
                                                        //         placeholder="First name"
                                                        //     />
                                                        // }
                                                        isClearable
                                                    />
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                {/* <Form.Group as={Col} md="2" controlId="validationCustom04">
                                                    <Form.Label>จัดซื้อโดย</Form.Label>
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
                                                <Form.Group as={Col} md="2" controlId="validationCustom04">
                                                    <Form.Label>การจ่ายเงิน</Form.Label>
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
                                                </Form.Group> */}

                                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                                    <Form.Label>เรื่อง รายงานขอซื้อ/จ้าง/ซ่อม</Form.Label>
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
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                                                    <Form.Label>ผู้ขอจัดซื้อ</Form.Label>
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
                                                <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                    <Form.Label>สถานะเอกสาร</Form.Label>
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
                                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                                    <Form.Label>การจ่ายเงิน</Form.Label>
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
                                                <Col>
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
                                <AddEmploysave />
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
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>ลำดับ</th>
                                        <th style={{ textAlign: 'center' }}>สถานะ</th>
                                        <th style={{ textAlign: 'center' }}>ใบขอซื้อ/จ้าง/ซ่อม</th>
                                        <th style={{ textAlign: 'center' }}>เรื่อง</th>
                                        <th style={{ textAlign: 'center' }}>ผู้ขอจัดซื้อ</th>
                                        <th style={{ textAlign: 'center' }}>วันที่</th>
                                        <th style={{ textAlign: 'center' }}>จำนวนเงิน</th>
                                        <th style={{ textAlign: 'center' }}>ผู้จัดทำ</th>
                                        <th style={{ textAlign: 'center' }}>ตรวจรับ</th>
                                        <th style={{ textAlign: 'center' }}>ลบ</th>
                                        <th style={{ textAlign: 'center' }}>ผ่าน</th>
                                        <th style={{ textAlign: 'center' }}>พิมพ์</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datatable.map(data => {
                                            return (
                                                <tr key={data.no}>
                                                    <td>{data.no}</td>
                                                    <td>{data.status}</td>
                                                    <td>{data.numberpaper}</td>
                                                    <td>{data.title}</td>
                                                    <td>{data.namearrb}</td>
                                                    <td>{data.duedate}</td>
                                                    <td>{data.price}</td>
                                                    <td>{data.nameuser}</td>
                                                    <td style={{ textAlign: 'center' }}><Button variant="light"><BsPencilSquare size="25px" color="blue" /></Button></td>
                                                    <td style={{ textAlign: 'center' }}><Button variant="light"><BsTrash size="25px" color="red" /></Button></td>
                                                    <td style={{ textAlign: 'center' }}><Button variant="light"><BsCheckBox size="25px" color="green" /></Button></td>
                                                    <td style={{ textAlign: 'center' }}><Button variant="light"><MdPrint size="25px" /></Button></td>
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
export default Employsave