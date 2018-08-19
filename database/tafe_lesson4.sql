USE TAFE;
DESCRIBE lesson4;
alter table lesson4 add dateofbirth date not null;
alter table lesson4 drop column Empzig;
alter table lesson4 add Empzip varchar(60);
insert into lesson4 (EmpId,EmpName,EmpAddress)
values (01,'daniel','258 Burwood road');
select * from lesson4;
/*drop delete whole table,truncate delete data in the table, not table itself*/
update lesson4 
set EmpName = 'yin'
where EmpId = 01;
insert into lesson4 (EmpId,EmpName,EmpAddress)
values (02,'daniel','12 victory parade');
delete from lesson4 
where EmpName = 'yin';
/*选中哪一行代码就执行哪一行代码，不能全部重复执行*/
/*create/alter/drop/truncate/use 用于操作table*/
/*insert into tablename(column name,column name) values (data) 如果此数据输入所有数据内容则不需要声明column name
update tablename set columnname = data  where condition用于改变已有数据 如果不限定条件，将会改变选中列的所有数据内容
delete from tablename where condition 将会删除符合条件的数据（行）delete * from table 删除表里所有数据，保留数据表
where 用于限定update delete insert的具体record/行*/