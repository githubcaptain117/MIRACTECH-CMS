import { Button } from 'react-bootstrap'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/templatepdf.module.css'

const Tempalte: NextPage = () => {

    // const Export2Word = (element: string, filename: String = '') => {
    //     if (typeof window === 'object') {
    //         // Check if document is finally loaded
    //         let preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To document</title></head><body>";
    //         let postHtml = "</body></html>";
    //         // let document = new documentument();
    //         var sourceHTML = preHtml + document.getElementById(element).innerHTML + postHtml;
    //         var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    //         var fileDownload = document.createElement("a");
    //         document.body.appendChild(fileDownload);
    //         fileDownload.href = source;
    //         fileDownload.download = 'filename.doc';
    //         fileDownload.click();
    //         document.body.removeChild(fileDownload);
    //     }
    // }

    return (
        <>
            <div id="exportContent">
                <div className={styles.saveA4}>
                    <p>
                        <img className={styles.savelogo} src='../img/logopdf.jpg' />
                        <span className={styles.savetoppic}>บันทึกข้อความ</span>
                    </p>
                    <p>ส่วนราชการ</p>
                    <div>
                        <span>ที่</span>
                        <span style={{ paddingLeft: '47%' }}>วันที่</span>
                    </div>
                    <p>เรื่อง รายงาน</p>
                    <hr />
                    <p>เรียน ผู้อำนวยการโรงเรียน</p>

                    <p className={styles.saveparagraph}>
                        ด้วย กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา มีความประสงค์จะซื้อครุภัณฑ์ จำนวน 1 รายการ เพื่อใช้ในการเรียนการสอนและฝึกซ้อม ซึ่งได้รับอนุมัติเงินจากแผนงาน แผนปฏิบัติการโรงเรียนวัดนวลนรดิศ งาน/โครงการ - กิจกรรม - จำนวนเงิน 75,000.00 บาท (เจ็ดหมื่นห้าพันบาทถ้วน) รายละเอียดดังแนบ
                    </p>

                    <p className={styles.saveparagraph}>
                        งานพัสดุได้ตรวจสอบแล้วเห็นควรจัดซื้อตามเสนอ และเพื่อให้เป็นไปตามพระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560  มาตรา 56 วรรคหนึ่ง (2)(ข) และระเบียบกระทรวงการคลังว่าด้วยการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 ข้อ 22 ข้อ 79 ข้อ 25 (5) และกฎกระทรวงกำหนดวงเงินการจัดซื้อจัดจ้างพัสดุ โดยวิธีเฉพาะเจาะจง วงเงินการจัดซื้อจัดจ้างที่ไม่ทำข้อตกลงเป็นหนังสือ และวงเงินการจัดซื้อจัดจ้างในการแต่งตั้งผู้ตรวจรับพัสดุ
                    </p>

                    <p>พ.ศ. 2560 ข้อ 1 และข้อ 5 จึงขอรายงานขอซื้อ ดังนี้</p>

                    <p className={styles.saveparagraph}>1. เหตุผลและความจำเป็นที่ต้องซื้อ คือ ใช้ในการเรียนการสอนและฝึกซ้อม</p>
                    <p className={styles.saveparagraph}>2. รายละเอียดของที่จะซื้อ คือ จัดซื้อเสาบาส</p>
                    <p className={styles.saveparagraph}>3. ราคากลางของพัสดุที่จะซื้อเป็นเงิน 75,000.00 บาท (เจ็ดหมื่นห้าพันบาทถ้วน)</p>
                    <p className={styles.saveparagraph}>4. วงเงินที่จะขอซื้อครั้งนี้ จำนวน 75,000.00 บาท (เจ็ดหมื่นห้าพันบาทถ้วน) ด้วย เงินอุดหนุน</p>
                    <p className={styles.saveparagraph}>5. กำหนดเวลาที่ต้องการใช้พัสดุ ภายใน 3 วัน (วันทำการ) นับถัดจากวันที่ลงนามในใบสั่งซื้อ</p>
                    <p className={styles.saveparagraph}>6. ซื้อโดยวิธีเฉพาะเจาะจง เนื่องจากการจัดซื้อพัสดุที่มีการผลิต จำหน่าย ก่อสร้าง หรือให้บริการทั่วไป</p>
                    <p className={styles.saveparagraph}>และมีวงเงินในการจัดซื้อจัดจ้างครั้งหนึ่งไม่เกิน 500,000 บาท ที่กำหนดในกฎกระทรวง</p>
                    <p className={styles.saveparagraph}>7. หลักเกณฑ์การพิจารณาคัดเลือกข้อเสนอ โดยใช้เกณฑ์ราคา</p>
                    <p className={styles.saveparagraph}>8. ข้อเสนออื่นๆ เห็นควรแต่งตั้งคณะกรรมการตรวจรับพัสดุ ตามเสนอ</p>

                    <p className={styles.saveparagraph}>จึงเรียนมาเพื่อโปรดพิจารณา</p>
                    <p className={styles.saveparagraph}>1. เห็นชอบในรายงานขอซื้อดังกล่าวข้างต้น</p>
                    <p className={styles.saveparagraph}>2. อนุมัติแต่งตั้งบุคคลดังต่อไปนี้เป็นคณะกรรมการการตรวจรับพัสดุ</p>

                    <table className={styles.savetablename}>
                        <tr>
                            <td>1) นายกฤติภัทร ศุภนันทพร</td>
                            <td>ตำแหน่ง</td>
                            <td>ครู</td>
                            <td>ประธานกรรมการ</td>
                        </tr>
                        <tr>
                            <td>2) นายโกศล  สุขประเสริฐ</td>
                            <td>ตำแหน่ง</td>
                            <td>ครู</td>
                            <td>กรรมการ</td>
                        </tr>
                        <tr>
                            <td>3) นายวิษณุ เสือโต</td>
                            <td>ตำแหน่ง</td>
                            <td>ครู</td>
                            <td>กรรมการ</td>
                        </tr>
                    </table>
                    <br />
                    <table className={styles.savetablesignaturename}>
                        <tr>
                            <td>
                                <p>ลงชื่อ.......................................................เจ้าหน้าที่</p>
                                <p>(นายสุเมธ สงวนสุข)</p>
                                <p>5 กรกฎาคม 2564</p>
                            </td>
                            <td>
                                <p>ลงชื่อ.......................................................เจ้าหน้าที่</p>
                                <p>(นายสุธีธร  รังสิมาหริวงศ์)</p>
                                <p>5 กรกฎาคม 2564</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <p>เห็นชอบอนุมัติ</p>
                                <p>ลงชื่อ....................................................................</p>
                                <p>(นายสมเกียรติ ผ่องจิต)</p>
                                <p>ผู้อำนวยการโรงเรียนวัดนวลนรดิศ</p>
                                <p>5 กรกฎาคม 2564</p>
                            </td>
                        </tr>
                    </table>
                    <div className={styles.textcenter}>
                        <p>รายละเอียดแนบท้ายบันทึกข้อความ ที่ 29/2564 ลงวันที่  5  กรกฎาคม  2564</p>
                        <p>งานจัดซื้อครุภัณฑ์ จำนวน 1 รายการ กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา</p>
                        <p>โรงเรียนวัดนวลนรดิศ</p>
                    </div>

                    <table className={styles.savetablepricereport}>
                        <tr>
                            <td rowSpan={2}>ลำดับที่</td>
                            <td rowSpan={2}>รายละเอียดของพัสดุที่จะขอซื้อ</td>
                            <td rowSpan={2}>จำนวนหน่วย</td>
                            <td rowSpan={2}>( )ราคามาตรฐาน<br />
                                ( )ราคาที่ได้มาจากการสืบ<br />
                                จากท้องตลาด (หน่วยละ)
                            </td>
                            <td colSpan={2}>จำนวนเงินที่ขอซื้อครั้งนี้</td>
                        </tr>
                        <tr>
                            <td>หน่วยละ</td>
                            <td>จำนวนเงิน</td>
                        </tr>
                        <tr>
                            <td>22222</td>
                            <td>22222</td>
                            <td>22222</td>
                            <td>22222</td>
                            <td>22222</td>
                            <td>22222</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}></td>
                            <td>ราคาสินค้า</td>
                            <td>70,093.46</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={3}></td>
                            <td>ภาษีมูลค่าเพิ่ม</td>
                            <td>4,906.54</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>รวมเงิน          ( เจ็ดหมื่นห้าพันบาทถ้วน )</td>
                            <td>รวมเป็นเงิน</td>
                            <td>75,000.00</td>
                        </tr>
                    </table>
                    <br />
                    <table className={styles.savetablesignaturename}>
                        <tr>
                            <td>
                                <p>ลงชื่อ.......................................................เจ้าหน้าที่</p>
                                <p>(นายสุเมธ สงวนสุข)</p>
                            </td>
                            <td>
                                <p>ลงชื่อ.......................................................เจ้าหน้าที่</p>
                                <p>(นายสุธีธร  รังสิมาหริวงศ์)</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Tempalte
