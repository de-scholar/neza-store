
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
    + 'password VARCHAR(50),'
    + 'user_registered_at TIMESTAMP,'
    + 'user_edited_at TIMESTAMP)';

export const CREATE_TABLE_EVENTS = 'CREATE TABLE IF NOT EXISTS events ('
    + 'event_id SERIAL PRIMARY KEY,'
    + 'user_id INT,'
    + 'event_name VARCHAR(50),'
    + 'event_time TIMESTAMP,'
    + 'event_why VARCHAR(255),'
    + 'event_place VARCHAR(50),'
    + 'event_type VARCHAR(255),'
    + 'event_created_at TIMESTAMP,'
    + 'event_edited_at TIMESTAMP,'
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
    + 'password,'
    + 'user_registered_at,'
    + 'user_edited_at)'
    + ' VALUES($1,$2,$3,$4,$5,$6,$7,$8)';

// insert into table events
export const REGISTERING_AN_EVENT = 'INSERT INTO events('
    + 'user_id,'
    + 'event_name,'
    + 'event_time,'
    + 'event_why,'
    + 'event_place,'
    + 'event_type,'
    + 'event_created_at,'
    + 'event_edited_at'
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
    + 'password=$8,'
    + 'user_registered_at=$9,'
    + 'user_edited_at=$10'
    + ' WHERE user_id=$11';

// update an event
export const UPDATING_AN_EVENT = 'UPDATE events SET '
    + 'event_name=$1,'
    + 'event_time=$2,'
    + 'event_why=$3,'
    + 'event_place=$4,'
    + 'event_type=$5,'
    + 'event_created_at=$6,'
    + 'event_edited_at=$7'
    + ' WHERE event_id=$8';

/** SELECTION OF DATA */
// selecting all users
export const GET_ALL_USERS = 'SELECT * FROM users';

// selecting a user depending on userId
export const GET_A_SPECIFIC_USER = 'SELECT * FROM users WHERE user_id=$1';

// selecting all events
export const GET_ALL_EVENTS = 'SELECT * FROM events';

// selecting an event depending on eventId
export const GET_A_SPECIFIC_EVENT = 'SELECT * FROM events WHERE event_id=$1';

// selecting an event depending on eventId
export const GET_EVENTS_BETWEEN_DATES = 'SELECT * FROM events WHERE event_created_at BETWEEN $1 AND $2';
