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
<b>1.) </b>
Select column_names, , ,  from table_name Where month(column_names)= 2 [month if feb] , year(column_names) = 2018 [year]

---
<b>Some Miscellaneous</b> <br>
Write a query to display the list of bus numbers and names where the source and destination of a bus is the destination and source of another bus. Display the unique records in ascending order by bus_no.

(HINT: Use Schedule table to retrieve records. Data is case sensitive)

(Note: Evaluate only the respective query to get the desired result.

Maintain the same sequence of column order as given in the problem description)
![BUSShema](https://user-images.githubusercontent.com/42711978/156910754-97d5d161-3462-48b5-9176-712d3bb75912.JPG)

select distinct s1.bus_no,
    b.bus_name
from schedule s1
    inner join schedule s2 on s1.source = s2.destination
    and s1.destination = s2.source
    inner join buses b on s1.bus_no = b.bus_no
order by s1.bus_no;


---

<b>2.) </b>Refer to the schema. Write a query to display the customer mail details. Display the details in the below format.

Give an alias name as CUSTOMER_MAIL_INFO. Sort the result in ascending order.

For Example: 

          Customer_id - 'CUST001'

          Email_id - 'mano@hotmail.com'

Sample Output:

CUSTOMER_MAIL_INFO

CUST001 mail id is mano@hotmail.com


(HINT: Use Customers table to retrieve records.)
NOTE: Maintain the same sequence of column order, as specified in the question descriptio


![Hotel_mysql](https://user-images.githubusercontent.com/42711978/156911263-9888448e-3e9e-4382-9ee8-ce8c3ee95519.png)

select concat(customer_id, ' mail id is ', email_id) as customer_mail_info
from customers;

---
<b>3.) </b>
Write a query to display car id, car name, car type of cars which was not taken for rent.  Sort the result based on car id.

(HINT: Use Cars and Rentals tables to retrieve records.)
NOTE: Maintain the same sequence of column order, as specified in the question description
![Rental_car_mysql](https://user-images.githubusercontent.com/42711978/156912047-fdd3bfc7-b946-4bef-9a8f-72006e54c28e.png)

select car_id, car_name, car_type 
from cars
where car_id not in (select distinct car_id from rentals);

---
