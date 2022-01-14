

import type { NextComponentType } from 'next';
import { useState } from 'react';
import { Button, Col, Form, Row, Card, Modal } from 'react-bootstrap';
import styles from '../../styles/employsave.module.css';
import { BsPlus } from 'react-icons/bs';

const Addroomlist: NextComponentType = () => {
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
                            <Card.Header className="CardHeader" as="h5">หมวดเงินงบประมาณ</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <div className={styles.frompopupinput}>
                                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>รหัส</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="กรอกข้อมูล....."
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                                                            <Form.Label>ชื่อสถานที่ </Form.Label>
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

export default Addroomlist