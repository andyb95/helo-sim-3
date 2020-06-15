create table users(
    user_id serial primary key,
    username varchar(500),
    password varchar(3000)
);

create table user_info(
    user_id integer references users(user_id),
    first_name varchar(100),
    last_name varchar(100),
    profile_pic varchar(3000),
    birthday DATE
);

create table groups(
group_id serial primary key,
name varchar(100),
description varchar(3000),
organizer int references users(user_id),
creation_date date
);

select users.user_id, groups.group_id, groups.creation_date
into group_members
from users
join groups on users.user_id = groups.group_id;

create table user_posts(
id serial primary key,
user_id integer references users(user_id),
title varchar(100),
post_img varchar(3000)
text varchar(3000),
date date
);

create table group_posts(
id serial primary key,
group_id int references groups(group_id),
title varchar(100),
post_img varchar(3000)
text varchar(3000),
date date
);

create table user_post_comments(
id serial primary key,
user_id int references users(user_id),
post_id int references user_posts(id),
title varchar(100),
text varchar(3000),
date date
);

create table group_post_comments(
id serial primary key,
user_id int references users(user_id),
post_id int references group_posts(id),
title varchar(100),
text varchar(3000),
date date
);

create table friends(
user_id int references users(user_id),
friend_id int references users(user_id),
accepted boolean
);