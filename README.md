
**Setup Instructions**

Clone the Repository
```
git clone https://github.com/ppsirker/instawork.git
```

**Backend (Django)**

```
cd instawork/
```

1. Create and activate a Virtual Environment
```
python -m venv venv
```
```
source venv/bin/activate
```
    
2. Install Project Dependencies
```
pip install -r requirements.txt
```
3. Run Migrations:
```
python manage.py makemigrations
```
```
python manage.py migrate
```
4. Run the Django Development Server
```
python manage.py runserver
```
The Django server will run on http://127.0.0.1:8000.

**Frontend (React)**

1. Navigate to the Frontend Directory
```
cd ../frontend
```
2. Install Node.js Dependencies
```
npm install
```

3. Run the React Development Server
```
npm start
```
Open http://localhost:3000 in your browser.<br>
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

