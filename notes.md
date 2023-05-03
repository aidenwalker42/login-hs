Make create account
make login
encrypt all to json

https://www.youtube.com/watch?v=mbsmsi7l3r4
make user roles

if login success, generate an access token server side and send to user. everytime the user makes a request, send the access token to the server to make sure they have permission to access that request.

create seperate database of access tokens and user who created the access token (active sessions)

goals today

Let admins create a code, code is required when registering an account. code contains information on what permissions the user will recieve. only admins can generate codes
make sure the code is DEFINITELY required when logging in.

Admin perms
perms 1
perms 2
perms 3

create an admin panel that can see the list of users and their perms.
be able to change users perms.
be able to delete and add users.

start off by cleaning up code--comments, variable names, error messages
refresh on how forms work regarding refreshing page, and going to another page on submit.
make sure that if you try to access a page without logging in, you are redirected.
figure out most secure way of loading in admin page. /admin or innerHTML?
