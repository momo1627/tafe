/*
Learner: Xuexiang Yin	
Assessement 1 - Partial Requirement - Lesson 7
*/


/* Create the table students executing the query from the link below:
													
https://drive.google.com/file/d/1I6mqIgtJ_ZLbAV35bY8YdPJR4hpc1XZl/view?usp=sharing

*/


#1) Create SQL commands and execute the following:
/** Create and use database **/
CREATE DATABASE University;
USE University;

/** Create table student **/
CREATE TABLE students(
	student_id int NOT NULL,
	student_number int NOT NULL,
	student_usi varchar(50) NOT NULL,
	student_firstname varchar(50) NOT NULL,
	student_m_initial char(1) NULL,
	student_lastname varchar(50) NULL,
	student_dob date NULL,
	student_gender varchar(10) NOT NULL,
	student_address1 varchar(255) NULL,
	student_address2 varchar(255) NULL,
	student_suburb varchar(50) NULL,
	student_state varchar(50) NULL,
	student_postcode int NULL,
	student_type varchar(20) NULL,
	student_special_needs varchar(255) NULL,
	student_english_ability varchar(50) NULL,
	student_course varchar(50) NULL,
	student_fees float NULL,
	student_fees_status varchar(20) NULL,
	student_score int NULL,
	student_percentage float NULL,
	student_created_date date NULL,
	student_updated_date date NULL,
 CONSTRAINT PK_students PRIMARY KEY (student_id)
 );



/** Insert **/

USE University;

INSERT INTO students
(student_id,student_number,student_usi,student_firstname,student_m_initial,student_lastname,
student_dob,student_gender,student_address1,student_address2,student_suburb,
student_state,student_postcode,student_type,student_special_needs,student_english_ability,
student_course,student_fees,student_fees_status,student_score,student_percentage
,student_created_date,student_updated_date)
VALUES
(1,20170201,'F17TAFE1','Cecil','A','Hartman',null,'Male',null,null,null,'NSW',null,'Local',null,'Beginners',null,null,'Paid','234',null,null,null),
(2,20170202,'F17TAFE2','Sheldon','F','Morgan',null,'Male',null,null,null,'VIC',null,'Local',null,'Beginners',null,null,'Paid','460',null,null,null),
(3,20170203,'F17TAFE3','Gary','M','Golden',null,'Male',null,null,null,'NSW',null,'International',null,'Beginners',null,null,'Not yet Paid','320',null,null,null),
(4,20170204,'F17TAFE4','Georgie','J','Macias',null,'Female',null,null,null,'QLD',null,'International',null,'Beginners',null,null,'Paid','300',null,null,null),
(5,20170205,'F17TAFE5','Tomeka','H','Jordan',null,'Female',null,null,null,'VIC',null,'International',null,'Intermediate ',null,null,'Paid','250',null,null,null),
(6,20170206,'F17TAFE6','Craig','N','Vaughan',null,'Male',null,null,null,'VIC',null,'Local',null,'Intermediate ',null,null,'Not yet Paid','360',null,null,null),
(7,20170207,'F17TAFE7','Burton','B','Riddle',null,'Male',null,null,null,'NSW',null,'Local',null,'Intermediate ',null,null,'Paid','210',null,null,null),
(8,20170208,'F17TAFE8','Mary','B','Castro',null,'Female',null,null,null,'VIC',null,'Local',null,'Intermediate ',null,null,'Paid','480',null,null,null),
(9,20170209,'F17TAFE9','Mora','M','Horn',null,'Female',null,null,null,'QLD',null,'Local',null,'Intermediate ',null,null,'Not Yet Paid','470',null,null,null),
(10,20170210,'F17TAFE10','Gary','B','Olsen',null,'Male',null,null,null,'VIC',null,'International',null,'Intermediate ',null,null,'Paid','320',null,null,null),
(11,20170211,'F17TAFE11','Gerrard','O','Scott',null,'Male',null,null,null,'TAS',null,'Local',null,'Advanced',null,null,'Paid','214',null,null,null),
(12,20170212,'F17TAFE12','Beau','K','Powell',null,'Female',null,null,null,'QLD',null,'International',null,'Advanced',null,null,'Paid','460',null,null,null),
(13,20170213,'F17TAFE13','Zofia','L','Smith',null,'Female',null,null,null,'TAS',null,'International',null,'Advanced',null,null,'Paid','450',null,null,null),
(14,20170214,'F17TAFE14','Denisse','G','Campbell',null,'Female',null,null,null,'TAS',null,'International',null,'Advanced',null,null,'Paid','360',null,null,null);


/** update special needs **/
Use University;
update students set student_special_needs = 'needs glasses' WHERE student_id=5;
update students set student_special_needs = 'needs glasses' WHERE student_id=9;
update students set student_special_needs = 'needs a wheelchair' WHERE student_id=12;
#2) Select student number and name of all students whose first name begins with G or M
select student_number, student_firstname,student_m_initial,student_lastname from students
where student_lastname like 'G%' or student_lastname like 'M%';
#3) Select students whose name starts with G and ends with Y
select * from students 
where student_firstname like 'G%Y'; 
#4) Select all students who have E anywhere in their first names
select * from students
where student_firstname like '%E%';
#5) Select students who have their first names beginning with G and last name finishing with N
select * from students
where student_firstname like 'G%' and student_lastname like '%N';
#6) Select students who have their first names beginning with G, third letter as R and any number of letters after that.
SELECT * FROM students 
WHERE student_firstname LIKE 'G_R%';
#7) Select students from NSW, TAS or QLD (use IN)
SELECT * FROM students 
where student_state in ('NSW','TAS','QLD');
#8) Select student first name, middle initial, last name as an alias name of student 
select concat(student_firstname,' ',student_m_initial,' ',student_lastname) as student_name from students;
#9) Select the student with the maximum score (use an alias for the column)
select MAX(student_score) as Max_score from students; 
#10)Select average score of the students (use an alias name for the column
select AVG(student_score) as Average_score from students; 
#11) Get the count of students who have paid their fees
select Count(student_id) as count_paid_student from students
group by student_fees_status
having student_fees_status = 'Paid';
#12) Select all students with first names ending with G and has at least 5 characters in their names
select * from students
where student_firstname like '%_%_%_%_G%';
#13) Select male students with ‘e’ as a second character of their first names 
select * from students
where student_gender = 'Male' and student_firstname like '_e%';
#14) Select all female students last names ending with ‘ell’ from Tasmania
select * from students 
where student_gender = 'Female' and student_lastname like '%ell%' and student_state = 'TAS';
#15) Select the count of students grouped by state
select COUNT(student_id),student_state from students 
group by student_state
order by student_state;
#16) Select the count of students grouped by state, but only display those states with more than 4 students
select COUNT(student_id),student_state from students 
group by student_state
having Count(student_id) > 4;
