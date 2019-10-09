
/** CREATION OF TABLES */

export const CREATE_TABLE_USERS = 'CREATE TABLE IF NOT EXISTS users ('
    + 'user_id SERIAL PRIMARY KEY, '
    + 'user_authorities VARCHAR(50),'
    + 'fname VARCHAR(50),'
    + 'lname VARCHAR(50),'
    + 'occupation VARCHAR(255),'
    + 'date_of_birth DATE,'
    + 'email VARCHAR(50),'
    + 'username VARCHAR(50),'
    + 'password VARCHAR(50))';

export const CREATE_TABLE_EVENTS = 'CREATE TABLE IF NOT EXISTS events ('
    + 'event_id SERIAL PRIMARY KEY,'
    + 'user_id INT,'
    + 'event_name VARCHAR(50),'
    + 'event_time TIMESTAMP,'
    + 'event_why VARCHAR(255),'
    + 'event_place VARCHAR(50),'
    + 'event_type VARCHAR(255),'
    + 'CONSTRAINT fk_event_users FOREIGN KEY(user_id) REFERENCES users(user_id))';

/** INSERTION OF DATA INTO TABLES */

// insert into table users
export const REGISTERING_A_USER = 'INSERT INTO users('
    + 'user_authorities,'
    + 'fname,'
    + 'lname,'
    + 'occupation,'
    + 'date_of_birth,'
    + 'email,'
    + 'username,'
    + 'password)'
    + ' VALUES($1,$2,$3,$4,$5,$6,$7,$8)';

// insert into table events
export const REGISTERING_AN_EVENT = 'INSERT INTO events('
    + 'user_id,'
    + 'event_name,'
    + 'event_time,'
    + 'event_why,'
    + 'event_place,'
    + 'event_type,'
    + ')'
    + ' VALUES($1,$2,$3,$4,$5,$6)';


/** UPDATING DATA FROM TABLES */
// update a user
export const UPDATING_USER = 'UPDATE users SET '
    + 'user_authorities=$1,'
    + 'fname=$2,'
    + 'lname=$3,'
    + 'occupation=$4,'
    + 'date_of_birth=$5,'
    + 'email=$6,'
    + 'username=$7,'
    + 'password=$8'
    + ' WHERE user_id=$9';
