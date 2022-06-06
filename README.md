# noteIt

Noteit, clone to the popuplar website Evernote, allows users to create notebooks, notes and keep deleted notes safe if it ever wants to be restored.  


## Links
* [Live Site](https://note--it.herokuapp.com/)
* [Database Schema](https://github.com/jmartinezsal/noteIt/wiki/Database-Schema)
* [MVP Feature List](https://github.com/jmartinezsal/noteIt/wiki/MVP-Feature-List)


## Technologies Used

### Hosting Services
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

### Backend 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## How to get started
1. Clone this repository

<code>git clone https://github.com/jmartinezsal/noteit.git</code>

2. CD into the backend directory and install dependencies

<code>npm install</code>

3. CD into the frontend directory and install dependencies

<code>npm install</code>

4. Create a .env file based on the .env.example given

5. Create a user in psql based on your .env DB_USERNAME

<code>psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB" </code>

6. Create the database, migrate, and seed

  <code> npx dotenv sequelize db:create</code>

  <code> npx dotenv sequelize db:migrate</code>

  <code> npx dotenv sequelize db:seed:all </code>

7. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:

  <code>npm start </code>
  
## Features 
 
## Splash Page
  
![Screen Shot 2022-06-06 at 12 26 14 AM](https://user-images.githubusercontent.com/96754787/172115211-76974829-ec8b-454b-9646-2ceb52a747a1.png)


## User Authentication
![Screen Shot 2022-06-06 at 12 26 59 AM](https://user-images.githubusercontent.com/96754787/172115314-939321e4-0772-4fbf-9db6-d92af387019b.png)

  
## User Home Page
  
### Navigation
  
Once the user is logged in, they can view all their contnent created.

 ![Screen Shot 2022-06-06 at 12 25 10 AM](https://user-images.githubusercontent.com/96754787/172115063-ee2ddd2d-6d5b-4a52-9b3a-de8dd9ca1e8c.png)
 
 
## Notebooks 

A user can post a new notebook by clicking any the 'plus' icon in the sidebar, edit the title for a notebook they've creted, and delete them (unless its their 
  primary notebook).

* Edit and delete buttons only show up on hover to achieve a clean look on the site and create a pop up modal for the user to complete action. 
These features are available anywhere the notebook can be viewed...

![Screen Shot 2022-06-06 at 12 34 59 AM](https://user-images.githubusercontent.com/96754787/172116522-4075f679-bdcc-4bbf-90ad-96e7ad8cd4d6.png)


 
## Notes
A user can post a note to to a notebook, by clicking on the text area. 
  * Notes that are made by the user can also be edited and deleted.  
  
 ![Screen Shot 2022-06-06 at 12 37 26 AM](https://user-images.githubusercontent.com/96754787/172116888-1855f091-ddac-4dac-9771-a7c676664242.png)

## Trash 
  A user can retrieve or permantly delelete notes that were deleted before. 
  
  ![Screen Shot 2022-06-06 at 12 40 48 AM](https://user-images.githubusercontent.com/96754787/172117444-b4a81afb-90f3-4d94-8279-86bab13b637e.png)

  

## Upcoming Features
  * Creating profile pages and allow for user to edit their information, avatars and backgrounds. 
  * Add favorits features
  * Add tags feature
  * Search feature for the tags 
  
  
  
  
  
  
  
  
  
  
  
  
