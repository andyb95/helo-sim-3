select * from user_posts up
join user_info ui on up.user_id = ui.user_id
where ui.first_name = $1;