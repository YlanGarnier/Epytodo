# Epytodo

Epytodo is a REST API in node js which allow's us to create CRUD type application and manage a mysql database with users and task memos.

## Getting Started

### Quickstart

To launch Epytodo :

Download node and npm (ubuntu)
```bash
sudo apt install nodejs npm
```

Download needed modules
```bash
npm install Express
npm install mysql2
npm install dotenv
npm install jsonwebtoken
npm install bcryptjs
npm install body-parser
```
Download mysql or any replacement (mariadb, etc...)

Create a new mysql user if you don't have one created

create the mysql database
```bash
mysql -u user -p | cat epytodo.sql
```

File the ".env" file with the right informations :
the user password, the user name and a secret key (random hash as you want)

### Usage

launch the server
```bash
node src .
```

you can send requests by differents tools (Postman, curl or others...) to the routes rigth down and test the project

![image](/images/requests.png)

Everything is send by jsonwebtokens

The syntax to use them is the following

Register a user

![image](/images/user_register.png)

Login a user

![image](/images/user_login.png)

Update a user

![image](/images/user_update.png)

Add a task

![image](/images/todos_register.png)

Update a task

![image](/images/todos_update.png)

## Our Team :heart:

Developers
| [<img src="https://github.com/YlanGarnier.png?size=85" width=85><br><sub>[Ylan Garnier]</sub>](https://github.com/YlanGarnier) | [<img src="https://github.com/yorennz.png?size=85" width=85><br><sub>[Yorennz Zelina]</sub>](https://github.com/yorennz)
| :---: | :---: |

<h2 align=center>
Socials Networks
</h2>

<p align='center'>
    <a href="https://www.linkedin.com/in/ylan-garnier/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
</p>