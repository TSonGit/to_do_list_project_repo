drop table TaskInfo;

create table TaskInfo
(Task_Name text NOT NULL,
 Task_Description text NOT NULL,
 Task_Status text NOT NULL,
 Due_Date text NOT NULL,
 
 primary key(Task_Name)
);

--Adds into the TaskInfo Table.
insert into TaskInfo values ('task1', 'desc1', 'stat1', 'date1');

insert into TaskInfo values ('task2', 'desc2', 'stat2', 'date2');

insert into TaskInfo values ('task3', 'desc3', 'stat3', 'date3');

insert into TaskInfo values ('task4', 'desc4', 'stat4', 'date4');

insert into TaskInfo values ('task5', 'desc5', 'stat5', 'date5');