/*
Learner: Xuexiang Yin
Assessement 1 - Partial Requirement - Lesson 6
*/


/* Create the table students executing the query from the link below:
													
https://drive.google.com/file/d/1I6mqIgtJ_ZLbAV35bY8YdPJR4hpc1XZl/view?usp=sharing

*/

#Create SQL commands and execute the following:
use university;
#1.Select all students
select * from students;
#2. Select all students from NSW 
select * from students
where student_state = 'NSW';
#3. Select Student_firstname and Student_lastname from students 
select Student_firstname,Student_lastname from students;
#4. Select Student_firstname and Student_lastname from students from NSW
select Student_firstname,Student_lastname from students
where student_state = 'NSW';
#5. Select all local students from VIC  
select * from students
where student_type = 'Local' and student_state = 'VIC';
#6. Select student number and special needs of students who need support
select student_number,student_special_needs from students
where student_special_needs is not null;
#7. List out all states
select student_state from students
group by student_state;
#8. Select name and score of the student with the student USI number F17TAFE10
select student_firstname,student_lastname,student_score from students
where student_usi = 'F17TAFE10';
#9. Select names of students who have scored more than 250 and less than 350
select student_firstname,student_lastname from students
where student_score > 250 and student_score < 350;
#10. Select student numbers and names of students who are local students with a beginner’s level of English ability and have scored more than 300
select student_number, student_firstname,student_lastname from students 
where student_type = 'Local' and student_english_ability = 'Beginners' and student_score > 300; 
#11. List out all student numbers, first name, middle initial and last name ordered alphabetically by last name
select student_number,student_firstname,student_m_initial,student_lastname from students
order by student_lastname asc;
#12. List out all student numbers, first name, middle initial and last name ordered alphabetically by first name, middle initial and last name
select student_number,student_firstname,student_m_initial,student_lastname from students
order by student_firstname,student_m_initial,student_lastname asc;
#13. Select student names and scores ordered by scores in the descending order
select student_firstname,student_lastname,student_score from students
order by student_score desc;
#14. Select students with score more than 40 but less than 80 both inclusive
select * from students
where student_score between 40 and 80;
#15. Mora has paid her fees
update students
set student_fees_status = 'Paid'
WHERE student_firstname = 'Mora';
#16. Gary M Golden would like to withdraw
update students
set student_fees_status = 'Withdraw'
WHERE student_firstname = 'Gary' and student_m_initial ='M' and student_lastname = 'Golden';