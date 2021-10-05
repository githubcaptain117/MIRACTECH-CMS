

import type { NextComponentType } from 'next';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { Button, Col, Form, Row, Card, Table, Modal, Accordion } from 'react-bootstrap';
import styles from '../../styles/employsave.module.css';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';

const AddandEditUser: NextComponentType = () => {
    const [validated, setValidated] = useState(false);
    const [today, settoday] = useState(new Date(new Date().setFullYear(new Date().getFullYear() + 543)));
    const [toyear, settoyear] = useState(new Date(new Date().setFullYear(new Date().getFullYear() + 543)));
    const [show, setShow] = useState(false);
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

    const checkboxoptions = [
        { cid: '01', values: true, label: 'กลุ่มสาระการเรียนรู้ภาษาไทย' },
        { cid: '02', values: true, label: 'กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี' },
        { cid: '03', values: true, label: 'กลุ่มสาระการเรียนรู้คณิตศาสตร์' },
        { cid: '04', values: true, label: 'กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ' },
        { cid: '05', values: true, label: 'กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนา และวัฒนธรรม' },
        { cid: '05', values: true, label: 'กลุ่มสาระการเรียนรู้ศิลปะ' },
        { cid: '07', values: true, label: 'กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา' },
        { cid: '08', values: true, label: 'กลุ่มสาระการเรียนรู้การงานอาชีพ' }
    ]

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onchangecheckbox = (e: any) => {
        console.log(e)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <BsPlus />เพิ่มข้อมูล
            </Button>

            <div className="modal-container custom-map-modal">
                <Modal
                    size="xl"
                    show={show}
                    fullscreen={true}
                    onHide={handleClose}
                    backdrop="static"
                    scrollable={true}
                // keyboard={false}
                >
                    {/* <Modal.Header closeButton>
                    <Modal.Title>บันทึกขอจัดซื้อ / จัดจ้าง / ซ่อม</Modal.Title>
                </Modal.Header> */}
                    <Modal.Body>
                        <Card>
                            <Card.Header className="CardHeader" as="h5">ผู้ใช้งานระบบ</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <div className={styles.frompopupinput}>
                                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>Username </Form.Label>
                                                            <DatePicker
                                                                selected={toyear}
                                                                dateFormat="yyyy"
                                                                locale={'th'}
                                                                yearItemNumber={6}
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
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ชื่อ - นามสกุล</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="text"
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>E-mail</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เบอร์โทรศัพท์</Form.Label>
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
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>หน่วยงานหลัก</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                                                            <Form.Label>หน่วยงานอื่นๆ (ถ้ามี)</Form.Label>
                                                            <Form className="groupbox">
                                                                <Row>
                                                                    {
                                                                        checkboxoptions.map((obj: any, index: number) => {
                                                                            return (
                                                                                <Col md="3" xs="6">
                                                                                    <div key={`inline-${index}`} className="mb-3">
                                                                                        <Form.Check
                                                                                            inline
                                                                                            label={obj.label}
                                                                                            name="group1"
                                                                                            type='checkbox'
                                                                                            checked={obj.values}
                                                                                            id={`inline-${obj.cid}-1`}
                                                                                            onChange={onchangecheckbox}
                                                                                        />
                                                                                    </div>
                                                                                </Col>
                                                                            )
                                                                        })
                                                                    }
                                                                </Row>
                                                            </Form>
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
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
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>รหัสผ่าน</Form.Label>
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
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
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
                                                </Form>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            ไม่บันทึก
                        </Button>
                        <Button variant="primary">บันทึก</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default AddandEditUser