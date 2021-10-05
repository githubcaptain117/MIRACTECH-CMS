import type { NextPage } from 'next'
import { useState } from 'react';
import Image from 'next/image'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsExclamationOctagonFill, BsQuestionOctagonFill, BsPersonLinesFill, BsPencilSquare, BsPersonBoundingBox } from "react-icons/bs";

const Mynavbar: NextPage = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    const menu1 = [
        {
            id: 1,
            norow: 1,
            namesubmenu: 'ผู้ใช้ระบบ',
            path: '/managesystem/userpage',
            namemenu: 'จัดการระบบ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 2,
            norow: 2,
            namesubmenu: 'จัดการเมนู',
            path: '/managesystem/menupage',
            namemenu: 'จัดการระบบ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 3,
            norow: 3,
            namesubmenu: 'Back up',
            path: '',
            namemenu: 'จัดการระบบ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 4,
            norow: 4,
            namesubmenu: 'ลงทะเบียนผลิตภัณฑ์',
            path: '',
            namemenu: 'จัดการระบบ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
    ]

    const menu2 = [
        {
            id: 1,
            norow: 1,
            namesubmenu: 'รายชื่อฝ่ายงาน/งาน/กลุ่มสาระ',
            path: '/basicinfo/agencylist',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 2,
            norow: 2,
            namesubmenu: 'หมวดเงินงบประมาณ',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 3,
            norow: 3,
            namesubmenu: 'สถานที่ตั้งครุภัณฑ์',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 4,
            norow: 4,
            namesubmenu: 'ประเภทภาษีหัก ณ ที่จ่าย',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 5,
            norow: 5,
            namesubmenu: 'ประเภทเสื่อมราคา',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 6,
            norow: 6,
            namesubmenu: 'หน่วยนับ',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 7,
            norow: 7,
            namesubmenu: 'หมวดพัสดุ',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 8,
            norow: 8,
            namesubmenu: 'รายชื่อพัสดุ',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 9,
            norow: 9,
            namesubmenu: 'ประเภทอ้างอิง',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 10,
            norow: 10,
            namesubmenu: 'รายชื่อบุคลากร',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 11,
            norow: 11,
            namesubmenu: 'รายชื่อผู้ขาย',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 12,
            norow: 12,
            namesubmenu: 'สถานะใบเสร็จ/ใบส่งของ',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 13,
            norow: 13,
            namesubmenu: 'กำหนดค่าเริ่มต้น (sysyem config)',
            path: '',
            namemenu: 'ข้อมูลพื้นฐาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
    ]

    const menu3 = [
        {
            id: 1,
            norow: 1,
            namesubmenu: 'บันทึกขอจัดซื้อ/จัดจ้าง/ซ่อม',
            path: '',
            namemenu: 'ซื้อจ้าง-พัสดุ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 2,
            norow: 2,
            namesubmenu: 'ค่าเสื่อมราคาครุภัณฑ์',
            path: '',
            namemenu: 'ซื้อจ้าง-พัสดุ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 3,
            norow: 3,
            namesubmenu: 'ตรวจนับครุภัณฑ์',
            path: '',
            namemenu: 'ซื้อจ้าง-พัสดุ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 4,
            norow: 4,
            namesubmenu: 'ครุภัณฑ์ขึ้นทะเบียน',
            path: '',
            namemenu: 'ซื้อจ้าง-พัสดุ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 5,
            norow: 5,
            namesubmenu: 'บันทึกยอดครุภัณฑ์/ตรวจพบครุภัณฑ์',
            path: '',
            namemenu: 'ซื้อจ้าง-พัสดุ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 6,
            norow: 6,
            namesubmenu: 'จำหน่ายครุภัณฑ์',
            path: '',
            namemenu: 'ซื้อจ้าง-พัสดุ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 7,
            norow: 7,
            namesubmenu: 'บันทึกรับบริจาคพัสดุ',
            path: '',
            namemenu: 'ซื้อจ้าง-พัสดุ',
            typeuser: ['', '', ''],
            status: 'Y'
        },
    ]

    const menu4 = [
        {
            id: 1,
            norow: 1,
            namesubmenu: 'รายงานทะเบียนครุภัณฑ์',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 2,
            norow: 2,
            namesubmenu: 'รายงานค่าเสื่อมราคาประจำปี',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 3,
            norow: 3,
            namesubmenu: 'รายงานสรุปใบเบิกพัสดุ',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 4,
            norow: 4,
            namesubmenu: 'รายงานวัสดุถาวรจัดซื้อ',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 5,
            norow: 5,
            namesubmenu: 'รายงานบัญชีวัสดุ',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 6,
            norow: 6,
            namesubmenu: 'รายงานทะเบียนครุภัณฑ์ (ตรวจสอบ)',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 7,
            norow: 7,
            namesubmenu: 'รายงานทะเบียนคุมขอซื้อ/ขอจ้าง',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 8,
            norow: 8,
            namesubmenu: 'รายงานรายละเอียดค่าใช้จ่าย',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 9,
            norow: 9,
            namesubmenu: 'รายงานจำหน่ายครุภัณฑ์',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 10,
            norow: 10,
            namesubmenu: 'รายงานยกเลิกชุดเบิก',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 11,
            norow: 11,
            namesubmenu: 'รายงานยกเลิกใบยกยอดครุภัณฑ์',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
        {
            id: 12,
            norow: 12,
            namesubmenu: 'รายงานยกเลิกใบขอรับบริจาค',
            path: '',
            namemenu: 'รายงาน',
            typeuser: ['', '', ''],
            status: 'Y'
        },
    ]

    const showDropdown1 = (e: any) => {
        setShow1(!show1);
    }
    const hideDropdown1 = (e: any) => {
        setShow1(false);
    }

    const showDropdown2 = (e: any) => {
        setShow2(!show2);
    }
    const hideDropdown2 = (e: any) => {
        setShow2(false);
    }

    const showDropdown3 = (e: any) => {
        setShow3(!show3);
    }
    const hideDropdown3 = (e: any) => {
        setShow3(false);
    }

    const showDropdown4 = (e: any) => {
        setShow4(!show4);
    }
    const hideDropdown4 = (e: any) => {
        setShow4(false);
    }

    const showDropdown5 = (e: any) => {
        setShow5(!show5);
    }
    const hideDropdown5 = (e: any) => {
        setShow5(false);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"> <img src="../img/logo.png" alt="Vercel Logo" width="35px" height="35px" /> NDR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">หน่าแรก</a>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="จัดการระบบ" id="basic-nav-dropdown" show={show1} onMouseEnter={showDropdown1} onMouseLeave={hideDropdown1}>
                                    {
                                        menu1.map((obj: any, index: number) => {
                                            return (
                                                <>
                                                    <NavDropdown.Item href={obj.path}>{obj.namesubmenu}</NavDropdown.Item>
                                                </>
                                            )
                                        })
                                    }
                                </NavDropdown>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="ข้อมูลพื้นฐาน" id="basic-nav-dropdown" show={show2} onMouseEnter={showDropdown2} onMouseLeave={hideDropdown2}>
                                    {
                                        menu2.map((obj: any, index: number) => {
                                            return (
                                                <>
                                                    <NavDropdown.Item href={obj.path}>{obj.namesubmenu}</NavDropdown.Item>
                                                </>
                                            )
                                        })
                                    }
                                </NavDropdown>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="ซื้อจ้าง-พัสดุ" id="basic-nav-dropdown" show={show3} onMouseEnter={showDropdown3} onMouseLeave={hideDropdown3}>
                                    {
                                        menu3.map((obj: any, index: number) => {
                                            return (
                                                <>
                                                    <NavDropdown.Item href={obj.path}>{obj.namesubmenu}</NavDropdown.Item>
                                                </>
                                            )
                                        })
                                    }
                                </NavDropdown>
                            </li>
                            <li className="nav-item dropdown">
                                <NavDropdown title="รายงาน" id="basic-nav-dropdown" show={show4} onMouseEnter={showDropdown4} onMouseLeave={hideDropdown4}>
                                    {
                                        menu4.map((obj: any, index: number) => {
                                            return (
                                                <>
                                                    <NavDropdown.Item href={obj.path}>{obj.namesubmenu}</NavDropdown.Item>
                                                </>
                                            )
                                        })
                                    }
                                </NavDropdown>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" >วิลัย - สอนดี</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavDropdown title="ตั้งค่า" id="basic-nav-dropdown" show={show5} onMouseEnter={showDropdown5} onMouseLeave={hideDropdown5}>
                                        <NavDropdown.Item href="#"><BsPersonLinesFill /> ข้อมูลส่วนตัว</NavDropdown.Item>
                                        <NavDropdown.Item href="#"><BsPencilSquare /> แก้ไขรหัสผ่าน</NavDropdown.Item>
                                        <NavDropdown.Item href="#"><BsQuestionOctagonFill /> ช่วยเหลือ</NavDropdown.Item>
                                        <NavDropdown.Item href="#"><BsExclamationOctagonFill /> แจ้งปัญหาการใช้งาน</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">ออกจากระบบ</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>

            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">หน่าแรก</Nav.Link>
                            <NavDropdown title="จัดการระบบ" id="basic-nav-dropdown" show={show1} onMouseEnter={showDropdown1} onMouseLeave={hideDropdown1}>
                                <NavDropdown.Item href="#">ผู้ใช้ระบบ</NavDropdown.Item>
                                <NavDropdown.Item href="#">เมนูย่อย</NavDropdown.Item>
                                <NavDropdown.Item href="#">กำหนดสิทธิ์เมนู</NavDropdown.Item>
                                <NavDropdown.Item href="#">Back up</NavDropdown.Item>
                                <NavDropdown.Item href="#">ลงทะเบียนผลิตภัณฑ์</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="ข้อมูลพื้นฐาน" id="basic-nav-dropdown" show={show2} onMouseEnter={showDropdown2} onMouseLeave={hideDropdown2}>
                                <NavDropdown.Item href="#">รายชื่อฝ่ายงาน/งาน/กลุ่มสาระ</NavDropdown.Item>
                                <NavDropdown.Item href="#">หมวดเงินงบประมาณ</NavDropdown.Item>
                                <NavDropdown.Item href="#">สถานที่ตั้งครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">ประเภทภาษีหัก ณ ที่จ่าย</NavDropdown.Item>
                                <NavDropdown.Item href="#">ประเภทเสื่อมราคา</NavDropdown.Item>
                                <NavDropdown.Item href="#">หน่วยนับ</NavDropdown.Item>
                                <NavDropdown.Item href="#">หมวดพัสดุ</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายชื่อพัสดุ</NavDropdown.Item>
                                <NavDropdown.Item href="#">ประเภทอ้างอิง</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายชื่อบุคลากร</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายชื่อผู้ขาย</NavDropdown.Item>
                                <NavDropdown.Item href="#">สถานะใบเสร็จ/ใบส่งของ</NavDropdown.Item>
                                <NavDropdown.Item href="#">กำหนดค่าเริ่มต้น (sysyem config)</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="ซื้อจ้าง-พัสดุ" id="basic-nav-dropdown" show={show3} onMouseEnter={showDropdown3} onMouseLeave={hideDropdown3}>
                                <NavDropdown.Item href="employ/employsave">บันทึกขอจัดซื้อ/จัดจ้าง/ซ่อม</NavDropdown.Item>
                                <NavDropdown.Item href="#">ค่าเสื่อมราคาครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">ตรวจนับครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">ครุภัณฑ์ขึ้นทะเบียน</NavDropdown.Item>
                                <NavDropdown.Item href="#">บันทึกยอดครุภัณฑ์/ตรวจพบครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">จำหน่ายครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">บันทึกรับบริจาคพัสดุ</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="รายงาน" id="basic-nav-dropdown" show={show4} onMouseEnter={showDropdown4} onMouseLeave={hideDropdown4}>
                                <NavDropdown.Item href="#">รายงานทะเบียนครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานค่าเสื่อมราคาประจำปี</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานสรุปใบเบิกพัสดุ</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานวัสดุถาวรจัดซื้อ</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานบัญชีวัสดุ</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานทะเบียนครุภัณฑ์ (ตรวจสอบ)</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานทะเบียนคุมขอซื้อ/ขอจ้าง</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานรายละเอียดค่าใช้จ่าย/ค่าซ่อมแซม</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานจำหน่ายครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานยกเลิกชุดเบิก</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานยกเลิกใบยกยอดครุภัณฑ์</NavDropdown.Item>
                                <NavDropdown.Item href="#">รายงานยกเลิกใบขอรับบริจาค</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">ชื่อ - นามสกุล</Nav.Link>
                            <NavDropdown title="ตั้งค่า" id="basic-nav-dropdown" show={show5} onMouseEnter={showDropdown5} onMouseLeave={hideDropdown5}>
                                <NavDropdown.Item href="#"><BsPersonLinesFill /> ข้อมูลส่วนตัว</NavDropdown.Item>
                                <NavDropdown.Item href="#"><BsPencilSquare /> แก้ไขรหัสผ่าน</NavDropdown.Item>
                                <NavDropdown.Item href="#"><BsQuestionOctagonFill /> ช่วยเหลือ</NavDropdown.Item>
                                <NavDropdown.Item href="#"><BsExclamationOctagonFill /> แจ้งปัญหาการใช้งาน</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey={2} href="#">
                                ออกจากระบบ
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    )
}

export default Mynavbar