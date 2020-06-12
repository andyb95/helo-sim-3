select * from user_posts up
join user_info ui on up.user_id = ui.user_id
where up.user_id = $1;