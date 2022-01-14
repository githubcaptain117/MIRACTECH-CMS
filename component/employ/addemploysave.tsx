

import type { NextComponentType } from 'next';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { Button, Col, Form, Row, Card, Table, Modal, Accordion } from 'react-bootstrap';
import styles from '../../styles/employsave.module.css';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';

const AddEmploysave: NextComponentType = () => {
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Card.Header className="CardHeader" as="h5">บันทึกขอจัดซื้อ/จัดจ้าง/ซ่อม</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <div className={styles.frompopupinput}>
                                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ปีงบประมาณ </Form.Label>
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
                                                            <Form.Label>ลำดับเอกสาร</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="text"
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เลขที่ใบขอซื้อ/จ้าง/ซ่อม</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>วันที่ขอซื้อ/จ้าง/ซ่อม</Form.Label>
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
                                                            <Form.Label>เลขที่ใบสั่งซื้อ/สั่งจ้าง</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>วันที่สั่งซื้อ/สั่งจ้าง</Form.Label>
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
                                                            <Form.Label>ประเภทรายการ</Form.Label>
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
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เรื่อง รายงานซื้อ/จ้าง/ซ่อม</Form.Label>
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
                                                            <Form.Label>วิธีการขอซื้อ/จ้าง/ซ่อม</Form.Label>
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
                                                            <Form.Label>ด้วย/หน่วยงาน</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เพื่อ/เหตุผล</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>กำหนดใช้ภายใน</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>รายละเอียดการซื้อ/จ้าง</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ครบกำหนดส่งมอบวันที่/วันที่ตรวจรับ</Form.Label>
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
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>โครงการ</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
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
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>กิจกรรม</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>อ้างอิงเลขที่สัญญา</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>กลุ่มสาระ</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>หัวหน้ากลุ่ม/กลุ่มสาระ/งาน</Form.Label>
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
                                                            <Form.Label>ผู้ขอซื้อ/จ้าง/พัสดุ/กลุ่ม/งาน/ฝ่าย</Form.Label>
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
                                                            <Form.Label>เจ้าหน้าที่พัสดุกลุ่ม/กลุ่มสาระ/งาน</Form.Label>
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
                                                            <Form.Label>รองผู้อำนวยการกลุ่มบริหารงบประมาณ</Form.Label>
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
                                                            <Form.Label>หัวหน้างานแผนงาน</Form.Label>
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
                                                            <Form.Label>รองฯในสังกัดงาน</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เจ้าหน้าที่งานแผนงาน</Form.Label>
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
                                                            <Form.Label>กลุ่มสาระ</Form.Label>
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
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>เห็นชอบและอนุมัติโดย</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                            <Form.Label>ผู้อำนวยการ</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label></Form.Label>
                                                            <Form.Check type="checkbox" />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                            <Form.Label>รองผู้อำนวยการ</Form.Label>
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
                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label></Form.Label>
                                                            <Form.Check type="checkbox" />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">

                                                        </Form.Group>
                                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                            <Form.Label>รักษาการในตำแหน่งผู้อำนวยการ</Form.Label>
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
                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label></Form.Label>
                                                            <Form.Check type="checkbox" />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">

                                                        </Form.Group>
                                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                            <Form.Label>ปฏิบัติราชการแทนผู้อำนวยการ</Form.Label>
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
                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label></Form.Label>
                                                            <Form.Check type="checkbox" />
                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>เจ้าหน้าที่พัสดุและการเงิน</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ชุดเจ้าหน้าที่</Form.Label>
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
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>เจ้าหน้าที่</Form.Label>
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
                                                            <Form.Label>เจ้าหน้าที่การเงิน</Form.Label>
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
                                                            <Form.Label>หัวหน้าเจ้าหน้าที่</Form.Label>
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
                                                            <Form.Label>ผู้สั่งจ่าย</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>คณะกรรมการตรวจรับพัสดุ</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ประธานกรรมการ/ผู้ตรวจรับ</Form.Label>
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
                                                            <Form.Label>กรรมการ(1)</Form.Label>
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
                                                            <Form.Label>กรรมการ(2)</Form.Label>
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
                                                            <Form.Label>กรรมการ(3)</Form.Label>
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
                                                            <Form.Label>พยาน(1)</Form.Label>
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
                                                            <Form.Label>พยาน(2)</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />

                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>จัดซื้อจาก</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ลำดับ</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                required
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>บริษัท/ห้าง/ร้าน</Form.Label>
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
                                                            <Form.Label>ใบเสนอราคา เลขที่</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                            <Form.Label>วันที่เสนอราคา</Form.Label>
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

                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label></Form.Label>
                                                            <Form.Check type="checkbox" label="ติ๊กเพื่อแสดงวันที่" />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ผู้ขาย/ผู้รับจ้าง</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ระยะเวลารับประกัน</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>รายละเอียดใบเสร็จ/ใบส่งของ</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>บริษัท/ห้าง/ร้าน</Form.Label>
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
                                                        <Form.Group as={Col} md="3" controlId="validationCustom01">
                                                            <Form.Label>สถานะ : </Form.Label>
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
                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label>เล่มที่</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label>เลขที่ </Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ใบส่งของ/ใบเสร็จ วันที่</Form.Label>
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
                                                            <Form.Label>จ่ายเมื่อวันที่ </Form.Label>
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
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>รายการซื้อ/จ้าง/ซ่อม</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="3" controlId="validationCustom01">
                                                            <Form.Label>ลำดับ</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                required
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>บริษัท/ห้าง/ร้าน</Form.Label>
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
                                                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                                                            <Form.Label>รหัสพัสดุ</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                            <Form.Label>ชื่อพัสดุ </Form.Label>
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
                                                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                                                            <Form.Label>รายละเอียดพัสดุ</Form.Label>
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
                                                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                            <Form.Label>หน่วยนับ</Form.Label>
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
                                                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                            <Form.Label>จำนวนหน่วย</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                            <Form.Label>ราคาต่อหน่วย</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                            <Form.Label>รวมเงิน (บาท)</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>หมายเลขครุภัณฑ์</Form.Label>
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
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ค่าใช้จ่ายระบบแผนงาน</Form.Label>
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
                                                            <Form.Label>งบดำเนินการ</Form.Label>
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
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>รายการส่วนลด</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.frompopupinput}>
                                                <Form>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="3" controlId="validationCustom01">
                                                            <Form.Label>ลำดับ</Form.Label>
                                                            <Form.Control
                                                                disabled
                                                                required
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>บริษัท/ห้าง/ร้าน</Form.Label>
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
                                                            <Form.Label>รายละเอียดส่วนลด</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                            <Form.Label>ส่วนลด % </Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                                                            <Form.Label>ยอดเงิน</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
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

export default AddEmploysave