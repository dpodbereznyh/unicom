<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];


// Формирование самого письма
$title = "Проверка связи";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
//    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.bk.ru'; // SMTP сервера вашей почты
    $mail->Username   = '962289@bk.ru'; // Логин на почте
    $mail->Password   = '4835414898a'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('962289@bk.ru', '962289'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('dpodbereznyh@gmail.com');

    // Прикрипление файлов к письму
//if (!empty($file['name'][0])) {
//    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//        $filename = $file['name'][$ct];
//        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//            $mail->addAttachment($uploadfile, $filename);
//            $rfile[] = "Файл $filename прикреплён";
//        } else {
//            $rfile[] = "Не удалось прикрепить файл $filename";
//        }
//    }
//}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);