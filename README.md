
**Setup Instructions**

Clone the Repository: <br>
   git clone https://github.com/ppsirker/instawork.git<br>


Backend (Django)

1. cd instawork_interview/instawork/

2. Run Migrations:<br>
   python manage.py makemigrations<br>
   python manage.py migrate

3. Run the Django Development Server:<br>
   python manage.py runserver<br>
   The Django server will run on http://127.0.0.1:8000.

Frontend (React)

1. Navigate to the Frontend Directory:<br>
   cd frontend

2. Install Node.js Dependencies:<br>
   npm install

3. Run the React Development Server:<br>
   npm start

   Open http://localhost:3000 in your browser.
   Navigate through the pages to ensure that adding, editing, and deleting team members works as expected.


**Project Overview**
Instawork Team Management Application

This is a team member management application built with Django for the backend and React for the frontend. The app allows users to view, add, edit, and delete team members. 

Features
- List Page: Displays all team members and the total number of members.
- Add Page: Allows users to add a new team member.
- Edit Page: Allows users to edit or delete the member.

Prerequisites
- Python 3.x
- Node.js and npm
- Django 5.x
- Django Rest Framework
- React 18.x

