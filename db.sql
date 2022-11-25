CREATE SCHEMA azdev;

CREATE TABLE azdev.users (
id serial PRIMARY KEY,
username text NOT NULL UNIQUE,
hashed_password text NOT NULL,
first_name text,
last_name text,
hashed_auth_token text,
created_at timestamp without time zone NOT NULL
DEFAULT (now() at time zone 'utc'),
CHECK (lower(username) = username)
);