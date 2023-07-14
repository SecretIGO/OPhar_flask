-- import database on mysql or phpmyadmin

- - XAMPP/WAMP server - -
1. Open XAMPP/WAMP

2. Open mysql/phpmyadmin
    sql query:
        create database db_onphar;

3. Copy db_onphar.sql to xampp/mysql/bin/ or wamp/mysql/bin/ directory.

4. Find wamp/xampp on file manager and copy link
    usually found in C:


- - COMMAND LINE - -
5. change directory to wamp/xampp bin directory
    ex. cd C:wamp64\bin

6. run mysql -u username -p password root database_name < import.sql
    ex. mysql -u root -p root db_onphar < db_onphar.sql