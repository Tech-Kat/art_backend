DROP DATABASE IF EXISTS paintings_dev;
CREATE DATABASE paintings_dev;

\c paintings_dev;

DROP TABLE  IF EXISTS paintings;
CREATE TABLE paintings (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT,
  price numeric, 
  size TEXT,
  is_available Boolean,
  image TEXT DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf--WupN13x5KLdwkdCHKDOu37AYkESd5tvcYrIGcm5SSMs4rSbmF2W2DNUTa12SYF-yU&usqp=CAU'
);