<?php
        $to ="wasd1234as@gmail.com"// 管理者のメールアドレス
        $name =$_POST["my name"];
        $email =$_POST["email"];
        $subject ="件名テスト";
        $message =$_POST["message"]; 

        $headers = "From: " . $email . "\r\n";

        // 本文の最後に名前を追加
        $message .= "\r\n\r\n" . $name;

        // メール送信
        mb_send_mail($to, $subject, $message, $headers);

        // 完了メッセージ
        $complete_msg = '送信されました！';

        // 全てクリア
        $name = '';
        $email = '';
        $subject = '';
        $message = '';
?>