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

| LIKE Operator |	Description |
|-------------|-----------------------------|                
WHERE CustomerName LIKE 'a%'	|Finds any values that start with "a"
WHERE CustomerName LIKE '%a'	|Finds any values that end with "a"
WHERE CustomerName LIKE '%or%'	|Finds any values that have "or" in any position
WHERE CustomerName LIKE '_r%'|	Finds any values that have "r" in the second position
WHERE CustomerName LIKE 'a_%'	|Finds any values that start with "a" and are at least 2 characters in length
WHERE CustomerName LIKE 'a__%'	|Finds any values that start with "a" and are at least 3 characters in length
WHERE ContactName LIKE 'a%o'	|Finds any values that start with "a" and ends with "o"

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
<b>Some Miscellaneous</b> <br>
<b>1.) </b>
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
<b>4.) </b>
Refer to the schema. Write a query to display the username and password of all owners. Give an alias name as USERNAME and PASSWORD. Sort the result based on the username in ascending order.

Username and password is generated as mentioned below

USERNAME: concatenate the owner's name with owner id.

PASSWORD: concatenate first 3 character of owner name with owner id.

For Example: 

          Owner_id - 01

          Owner_name - jeeva

Sample Output:


USERNAME	PASSWORD
jeeva01	jee01


(HINT: Use Owners table to retrieve records.)
NOTE: Maintain the same sequence of column order, as specified in the question description
![Rental_car_mysql](https://user-images.githubusercontent.com/42711978/156917306-6862c02c-a4c2-4a8e-94f4-6024872a57e8.png)

select concat(owner_name, owner_id) as username, concat(left(owner_name, 3), owner_id) as password
from owners
order by concat(owner_name, owner_id);

---
<b>5.) </b>
Write a query to display car id and number of times car taken for rental. Give an alias name to the number of times car taken for rental as 'NO_OF_TRIPS'. Sort the records based on car id in ascending order.

(HINT: Use Rentals table to retrieve records.)

NOTE: Maintain the same sequence of column order, as specified in the question description
![Rental_car_mysql](https://user-images.githubusercontent.com/42711978/156917397-7f3e3817-142b-4b00-8188-ac5d57f72b4b.png)


select car_id, count(car_id) as 'NO_OF_TRIPS'
from rentals
group by car_id
order by car_id;


---
<b>6.) </b>
Write a query to display hotel id, hotel name and hotel type of hotels which has not taken any orders in the month of 'MAY 19'. Sort the result based on hotel id in ascending order.

(HINT: Use Hotel_details and Orders tables to retrieve records. Eg: order_date= 2019-05-12)

NOTE: Maintain the same sequence of column order, as specified in the question description



![Hotel_mysql](https://user-images.githubusercontent.com/42711978/156917456-10022745-069f-4c6b-825a-042c4c63bc8f.png)

select hotel_id, hotel_name, hotel_type
from hotel_details
where hotel_id not in (select hotel_id
from orders
where month(order_date) = 5 and year(order_date) = 2019);

---
<b> 7.)</b>
Write a query to display the unique user name and their city who have booked their tickets by not using the HDFC bank for any of the bookings. Sort the result based on the user name.

(HINT: Use Users and Bookingdetails table to retrieve records. Data is case sensitive)

(Note: Evaluate only the respective query to get the desired result.

Maintain the same sequence of column order as given in the problem description)

![BUSShema](https://user-images.githubusercontent.com/42711978/156917653-f1ed9e9e-3db7-446c-88fa-29417b7d20e9.jpg)

-- Select NAME , ADDRESS from (Select USER_ID from BOOKINGDETAILS where NAME NOT IN "HDFC") Order by NAME;
-- Wrong Query as name and Address are not in BOOKINGDETAILS So we can't call like above

Select distinct USERS.NAME , USERS.ADDRESS from 
USERS JOIN BOOKINGDETAILS ON USERS.USER_ID = BOOKINGDETAILS.USER_ID 
WHERE USERS.USER_ID NOT IN ( Select USER_ID from BOOKINGDETAILS WHERE NAME="HDFC")
order by USERS.NAME;

---
<b> 8.)</b> 

Write a query to display the user name and password. Password should be generated by concatenating the first three characters of the user name and the first three numbers of the phone number attribute. Give an alias name as PASSWORD. Sort the result based on the user name.

(HINT: Use Users table to retrieve records. Data is case sensitive)

(Note: Evaluate only the respective query to get the desired result.

Maintain the same sequence of column order as given in the problem description)


![BUSShema (1)](https://user-images.githubusercontent.com/42711978/156917707-65342e0e-31aa-437c-a9c4-877ef2c5d3d0.jpg)

Select NAME , CONCAT(substr(NAME,1,3),substr(PHNO,1,3)) AS password from USERS order by NAME;
