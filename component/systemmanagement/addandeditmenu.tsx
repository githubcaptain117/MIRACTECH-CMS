

import type { NextComponentType } from 'next';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { Button, Col, Form, Row, Card, Table, Modal, Accordion } from 'react-bootstrap';
import styles from '../../styles/employsave.module.css';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';

const AddandEditMenu: NextComponentType = () => {
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
        { cid: '01', values: true, label: 'ฝ่ายแผนงาน' },
        { cid: '02', values: true, label: 'ผู้บริหาร' },
        { cid: '03', values: false, label: 'ผู้ใช้ตามหน่วยงาน' },
        { cid: '04', values: true, label: 'หัวหน้าหน่วยงาน' },
        { cid: '05', values: true, label: 'ผู้ดูแลระบบ' }
    ]

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onchangecheckbox = (e: any) => {
        console.log(e)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <BsPlus size="25px" title="Test" color="#fff"/>เพิ่มข้อมูล
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
                            <Card.Header className="CardHeader" as="h5">จัดการเมนู</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <div className={styles.frompopupinput}>
                                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เมนูย่อย</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>path menu</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เมนูหลัก</Form.Label>
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
                                                            <Form.Label>ลำดับ</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                                                            <Form.Label>กลุ่มผู้ใช้</Form.Label>
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

export default AddandEditMenu