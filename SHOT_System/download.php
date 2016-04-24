<?php

require_once 'app/php/common.php';
require_once 'app/php/Classes/PHPExcel.php';

$post = $_POST;

// cast array
foreach ($post as &$value) {
    $value = (array) json_decode($value);
} unset($value);
// echo '<pre>' . print_r($post, 1) . '</pre>';
$length = count($post);

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

$objPHPExcel = new PHPExcel();
$objPHPExcel->getProperties()->setCreator("SHOT creator")
                             ->setLastModifiedBy("SHOT mod")
                             ->setTitle("SHOT Title")
                             ->setSubject("SHOT subject")
                             ->setDescription("SHOT desc")
                             ->setKeywords("SHOT keywords")
                             ->setCategory("SHOT category");
$objPHPExcel->setActiveSheetIndex(0);
$objPHPExcel->getActiveSheet()->setTitle('Shot sheet');

// Headers
$row = 1;
$column = 'A';
foreach ($post[0] as $key => $value) { // value is not used
    // echo "$column $row: $key<br>";
    $objPHPExcel->getActiveSheet()->setCellValue($column++ . $row, $key);
}

// data
for ($row = 0; $row < $length; $row++) {
    $column = 'A';
    foreach ($post[$row] as $value) {
        // echo "$column $row: $value<br>";
        $objPHPExcel->getActiveSheet()->setCellValue($column++ . ($row + 2), $value);
    }
}

// Redirect output to a client’s web browser (Excel5)
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename="shot.xls"');
header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
header('Cache-Control: max-age=1');

// If you're serving to IE over SSL, then the following may be needed
header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
header ('Pragma: public'); // HTTP/1.0

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter->save('php://output');
exit;

/* End of file */
