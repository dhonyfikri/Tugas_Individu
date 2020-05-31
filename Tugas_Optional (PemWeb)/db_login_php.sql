CREATE DATABASE `db_login_php` ;

CREATE TABLE `db_login_php`.`user` (
`id` INT NOT NULL AUTO_INCREMENT ,
`nama` VARCHAR( 255 ) NOT NULL ,
`username` VARCHAR( 255 ) NOT NULL ,
`password` VARCHAR( 255 ) NOT NULL ,
PRIMARY KEY ( `id` )
) ENGINE = MYISAM ;

INSERT INTO `db_login_php`.`user` (
`id` ,
`nama` ,
`username` ,
`password`
)
VALUES (
NULL , 'Administrator', 'admin', '0192023a7bbd73250516f069df18b500'
), (
NULL , 'fikri', 'fikri123', '19da9ebef1ca88a6cb3ffcb997054199'
);
