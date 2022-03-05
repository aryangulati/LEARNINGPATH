# SQL 

<b> Join</b> <br>
Select __ tableA.column_name from tableA INNER JOIN tableB ON __ = __ 

Select column_name ,column_name_from_othertable from TableA INNER JOIN tableB ON __ = __ WhereClause Order By;

---

<b>SUB Queries </b> <br>
Select column_name from tableA Where Column_name in (Select column_nmae from tableB );

---

<b> HAVING CLAUSE</b> <br>
select tableA.column_name,tableB.column_name from tableA, table B where ___ = ___
group by ___
Having count(_);--what else we have to do for further grouping

---
<b> Concating 2 Columns </b> <br>
Select CONCAT(column1,",",Column2) As Name_given from table_name 

---

<b>If we want Substring from some columns after that concat it </b> <br>
Select Concat(Substr(column_name,start,end),substr(column_name,1,3)) from table_name

---

<b>Inserting Records in table </b> <br>
insert into table_name (column_name1,column_name2,..) 
values (val1,val2,..),(val1,val2,..)

---

<b>Insert the below Records into table that has already been created</b> <br>
insert into table_name values (val1,val2,..),(val1,val2,..)

---

<b>How to use BETWEEN</b> <br>
Select column_names, , ,  from table_name Where column_names between range1 and range2;

---

<b>How to use IN operator</b> <br>
Select column_names, , , from table_name Where column_names in ("row_value",row_value1")

---

<b>LIKE Operator</b> <br>

---

<b>Update records</b> <br>
update table_name set  column_name = value  Where column =value

---

<b>Alter table records (add new Column)</b> <br>
Alter TABLE table_name ADD Column_name Datatype

---

<b>Alter table records (change datatype of column)</b> <br>
Alter TABLE table_name MODIFY COLUMN Column_name New_Datatype

---

<b>Create table with specified column and constraints</b> <br>
CREATE TABLE table_name(column_name datatype, , , )
also,
CREATE TABLE table_name(column_name datatype PRIMARY KEY, , , )

---

<b>How to find Month , Year</b> <br>
Select column_names, , ,  from table_name Where month(column_names)= 2 [month if feb] , year(column_names) = 2018 [year]

---



