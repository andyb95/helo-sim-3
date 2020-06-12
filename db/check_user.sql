-- select * from users
-- where username = $1;

select * from user_info ui
join users u on ui.user_id = u.user_id
where u.username = $1;