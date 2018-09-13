create table burgers_db;
use burgers_db;

create table burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (45) NOT NULL,
    devoured BOOLEAN,
    primary key(id)
)