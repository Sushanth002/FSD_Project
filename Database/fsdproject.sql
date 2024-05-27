create database cozy_haven_stay;

use cozy_haven_stay;


DROP TABLE IF EXISTS admin;

 CREATE TABLE IF NOT EXISTS admin (
 	admin_id INT PRIMARY KEY AUTO_INCREMENT,
    admin_name VARCHAR(255) NOT NULL ,
   admin_email VARCHAR(255) NOT NULL UNIQUE ,
    admin_password VARCHAR(255) NOT NULL ,
   admin_phoneno VARCHAR(255) NOT NULL UNIQUE,
   refresh_token VARCHAR(255) UNIQUE
);

INSERT INTO admin (admin_name, admin_email, admin_password, admin_phoneno) VALUES ("testadmin1", "testadmin1@gmail.com", "testadminpassword1", "testadminphoneno1");
INSERT INTO admin (admin_name, admin_email, admin_password, admin_phoneno) VALUES ("testadmin2", "testadmin2@gmail.com", "testadminpassword2", "testadminphoneno2");

DROP TABLE IF EXISTS hotel_owner_detail;

CREATE TABLE IF NOT EXISTS hotel_owner_detail (
owner_id INT AUTO_INCREMENT PRIMARY KEY,
    owner_name VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
     gender ENUM("MALE" ,"FEMALE", "OTHER" ) CHECK (gender IN ("MALE" ,"FEMALE", "OTHER" )),
     contact_no VARCHAR(20) UNIQUE,
     address text,
 	refresh_token VARCHAR(255) UNIQUE
    ) ;

 INSERT INTO hotel_owner_detail (owner_name, email, password, contact_no) VALUES ("testowner1", "testowner1@gmail.com", "testownerpassword1", "testownerphoneno1");
 INSERT INTO hotel_owner_detail (owner_name, email, password, contact_no) VALUES ("testowner2", "testowner2@gmail.com", "testownerpassword2", "testownerphoneno2");
 
  DROP TABLE IF EXISTS admin_logs;
 CREATE TABLE IF NOT EXISTS admin_logs (
 id INT NOT NULL AUTO_INCREMENT,
`timestamp` DATETIME NOT NULL,
label VARCHAR(2048) NOT NULL DEFAULT "admin_service",
log_level VARCHAR(16) NOT NULL,
message VARCHAR(1024) NOT NULL,
`metadata` VARCHAR(2048) NOT NULL,
 PRIMARY KEY (id));
 
 DROP TABLE IF EXISTS owner_logs;
 CREATE TABLE IF NOT EXISTS owner_logs (
 id INT NOT NULL AUTO_INCREMENT,
`timestamp` DATETIME NOT NULL,
label VARCHAR(2048) NOT NULL DEFAULT "owner_service",
log_level VARCHAR(16) NOT NULL,
message VARCHAR(1024) NOT NULL,
`metadata` VARCHAR(2048) NOT NULL,
 PRIMARY KEY (id));
 
 
DROP TABLE IF EXISTS user_logs;
CREATE TABLE IF NOT EXISTS user_logs (
 id INT NOT NULL AUTO_INCREMENT,
`timestamp` DATETIME NOT NULL,
label VARCHAR(2048) NOT NULL DEFAULT "user_service",
log_level VARCHAR(16) NOT NULL,
message VARCHAR(1024) NOT NULL,
`metadata` VARCHAR(2048) NOT NULL,
 PRIMARY KEY (id));
 
 
  DROP TABLE IF EXISTS hotel_detail;
 CREATE TABLE IF NOT EXISTS hotel_detail (
 	hotel_id INT AUTO_INCREMENT PRIMARY KEY,
     hotel_name VARCHAR(255) NOT NULL,
 	location VARCHAR(255) NOT NULL,
     address TEXT NOT NULL,
    -- amenities
     parking BOOL ,
    wifi BOOL,
     room_service BOOL,
     swimming_pool BOOL,
     fitness_center BOOL,
     dining BOOL,
 	owner_id INT NOT NULL,
     CONSTRAINT FK_hd_hod FOREIGN KEY (owner_id) REFERENCES hotel_owner_detail(owner_id)
     );

 INSERT INTO hotel_detail(hotel_name, location , address, parking, wifi, room_service, swimming_pool, fitness_center, dining, owner_id)
 	VALUES( "testhotelbyowner1", "testlocation1", "testaddress1", TRUE, TRUE, TRUE, TRUE, TRUE, TRUE, 1);
 INSERT INTO hotel_detail(hotel_name, location , address, parking, wifi, room_service, swimming_pool, fitness_center, dining, owner_id)
 	VALUES( "testhotelbyowner2", "testlocation2", "testaddress2", FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, 2);
    
    
DROP TABLE IF EXISTS user_detail;

 CREATE TABLE IF NOT EXISTS user_detail (
 	user_id INT AUTO_INCREMENT PRIMARY KEY,
     user_name VARCHAR(255) NOT NULL,
     password VARCHAR(255) NOT NULL ,
     email VARCHAR(255) UNIQUE NOT NULL,
     gender ENUM("MALE" ,"FEMALE", "OTHER" ) CHECK (gender IN ("MALE" ,"FEMALE", "OTHER" )),
     contact_no VARCHAR(20) UNIQUE,
     address text ,
 	refresh_token VARCHAR(255) UNIQUE
     ) ;

 INSERT INTO user_detail (user_name, email, password, contact_no) VALUES ("testuser1", "testuser1@gmail.com", "testuserpassword1", "testuserphoneno1");
 INSERT INTO hotel_user_detail (user_name, email, password, contact_no) VALUES ("testuser2", "testuser2@gmail.com", "testuserpassword2", "testuserphoneno2");
 
 

 
  DROP TABLE IF EXISTS booking_detail;
 CREATE TABLE IF NOT EXISTS booking_detail (
 	booking_id INT PRIMARY KEY AUTO_INCREMENT,
     hotel_id INT,
     user_id INT,
     no_rooms INT ,
     total_booking_amount INT,
     checkin_date Date,
    checkout_date Date,
     booking_status ENUM('BOOKED', 'REFUND_PENDING','REFUND_APPROVED','REFUND_CANCELED'),
    CONSTRAINT  FK_bd_hd FOREIGN KEY (hotel_id) REFERENCES hotel_detail(hotel_id),
     CONSTRAINT  FK_bd_ud FOREIGN KEY (user_id) REFERENCES user_detail(user_id)
 	);

 
 
  DROP TABLE IF EXISTS room_detail;
CREATE TABLE IF NOT EXISTS room_detail (
 	room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_size INT ,
     bed_size ENUM ('SINGLE_BED', 'DOUBLE_BED', 'KINGSIZE_BED'),
     max_people_accomodate INT,
    base_fare INT,
     ac_non_ac BOOL,
     hotel_id INT NOT NULL ,
     FOREIGN KEY (hotel_id) REFERENCES hotel_detail(hotel_id)
);


 DROP TABLE IF EXISTS booking_description;
 CREATE TABLE IF NOT EXISTS booking_description (
 	uid INT PRIMARY KEY AUTO_INCREMENT,
     booking_id INT NOT NULL,
     room_id INT,
 	booking_amount_room INT,
     checkin_date Date,
     checkout_date Date,
     CONSTRAINT  FK_bd_bd FOREIGN KEY (booking_id) REFERENCES booking_detail(booking_id),
     CONSTRAINT  FK_bd_rd FOREIGN KEY (room_id) REFERENCES room_detail(room_id)
 	);
    
DROP TABLE IF EXISTS review_detail;
 CREATE TABLE IF NOT EXISTS review_detail (
 	review_id INT PRIMARY KEY AUTO_INCREMENT,
     booking_id INT NOT NULL,
     review TEXT,
     rating FLOAT(2,1),
     time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_rd_bd FOREIGN KEY (booking_id) REFERENCES booking_detail(booking_id)
 	);


