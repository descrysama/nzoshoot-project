<style>
@import url('https://fonts.googleapis.com/css2?family=Kulim+Park:wght@300&display=swap');


* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body {
    font-family: 'Kulim Park', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: #121212;
    overflow-x: hidden;
}

a:visited {
    color: white;
}

/* NAVBAR */
nav {
    background-color: 121212;
    height: 100px;
    border-bottom: 2px solid #ffffff21;
    width: 80%;
}

.logo{
    width: 100px;
    padding: 10px;
}

nav ul {
    text-align: center;
    float: right;
    margin-right: 20px;
    
}

nav ul li{
    display: inline-block;
    line-height: 100px;
    margin: 0 5px;
}

nav ul li a {
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    padding: 15px 20px;
    border-radius: 50px;
}

a.active, a:hover{
    color: rgb(255, 255, 0);
    transition: 1s;
}



.yellowbutton {
    border: 2px solid rgb(255, 255, 0);
    color: white;
    padding: 10px 30px 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 10px;
    cursor: pointer;
    border-radius: 21px;
    background-color: transparent;
}

.yellowbutton:hover {
    background-color: rgb(255, 255, 0);
    color: black;
    transition: 1s;
}

.d-flex {
    display: flex;
}

.d-block {
    display: block;
}

.container {
    flex-wrap: wrap;
}

.flex-direction-column {
    flex-direction: column;
}

.flex-direction-row {
    flex-direction: row;
}

.justify-content-center {
    justify-content: center;
}

.justify-content-space-around {
    justify-content: space-around;
}


.align-items-center {
    align-items: center;
}

.checkbtn {
    font-size: 30px;
    color: white;
    float: right;
    line-height: 100px;
    margin-right: 20px;
    cursor: pointer;
    display: none;
}

#check {
    display: none;
}


@media (max-width: 838px) {
    .checkbtn {
        display: block;
    }
    nav ul{
        position: fixed;
        width: 80%;
        height: 100vh;
        left: -100%;
        background-color: #121212b9;
        transition: all 0.5s;
        z-index: 100;
    }
    nav ul li{
        display: block;
    }
    nav ul li a {
        font-size: 20px;
    }

    a:hover, a.active{
        background: none;
    }
    #check:checked ~ ul{
        left: 10%;
    }

    footer {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

/* NAVBAR END */

p {
    font-size: 16px;
    line-height: 1.5;
    width: 80%;
}

.w-50 {
    width: 50%;
}

.w-75 {
    width: 75%;
}

.w-100 {
    width: 100%;
}

.h-50 {
    height: 50%;
}

.m-2 {
    margin: 2rem;
}

.mb-2 {
    margin-bottom: 1.5rem;
}

.p-2 {
    padding: 2rem;
}

.white-icon {
    color: white;
}

.social-links {
    padding: 10px 0px;
}

.social-links:hover {
    background-color: #1a1a1ab9;
    transition: 0.5s;
    border-radius: 100px;
}

#home-section{
    background-size: cover;
    height: calc(100vh - 80px);
    width: 80%;
    opacity: 1;
}

#about-section{
    width: 100%;
    background: linear-gradient(135.18deg, #FFFFFF -15.2%, #E3E3E3 152.11%);
    padding: 24px;
}

#testimonials-section{
    width: 100%;
    background-color: #0a0a0a;
    padding: 24px;
}

.left-content {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.left-content h2 {
    font-weight: bold;
    font-style: italic;
    font-size: 1.5em;
    color: white;
    
}

.left-content h3 {
    font-weight: 100;
    font-size: 1rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
}

h3 {
    text-align: center;
}


.right-content {
    background: url(./assets/images_content/DSC6400-2.png);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

@media (max-width: 530px) {
    #social-links {
        display: none;
    }
    
    .admin-album-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}

@media (max-width: 1235px) {
    #right-content {
        display: none;
    }

    #left-content {
        width: 100%;
    }

    #about-section-1 {
        display: block;
    }

    p {
        width: 100%;
    }

    #img-pro {
        width: 80%;
    }

    .w-75 {
        width: 100%;
    }
}


/* ALBUM CARD */

.album-info {
    color: white;
    font-weight: 400;
    width: 100%;   
}




.album-card img:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 0, 0.3);
    transition: 0.5s;
    cursor: pointer;
}

/* ALBUM CARD END */

/* TARIFS CARD */

.pricing-title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    justify-content: end;
}

.pricing-attribute {
    text-align: center;
    font-size: 16px;
    font-weight: lighter;
    color: white;
    margin-bottom: 16px;
}

.pricing-card {
    max-width: 300px;
    height: 350px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
    background-color: #1C1C1C;
    transition: 0.5s;
}

.pricing-card:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 0, 0.2);
}

/* TARIFS CARD END */

/* FORM */

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    font-size: 16px;
    color: white;
    margin-bottom: 8px;
}

.form-input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding: 8px;
    font-size: 16px;
    color: white;
    background-color: #1C1C1C;
    transition: 0.5s;
}

form {
    max-width: 80%;
    width: 30em;
    margin: 2rem;
}

.form-textarea {
    border-radius: 5px;
    border: none;
    padding: 8px;
    font-size: 16px;
    color: white;
    background-color: #1C1C1C;
    transition: 0.5s;
}

.form-input:focus, .form-input:active, .form-textarea:focus {
    box-shadow: 0px 0px 5px 0px rgb(255, 208, 0);
    outline: none;
}

input[type='file']::-webkit-file-upload-button {
    background: #1C1C1C;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px;
    font-size: 16px;
    transition: 0.5s;
}

input[type='file']::-webkit-file-upload-button:hover {
    cursor: pointer;
}

.error-badge {
    color: white;
    font-size: 16px;
    margin-top: 8px;
    background-color: rgb(211, 0, 0);
    max-width: 600px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
}

.success-badge {
    color: white;
    font-size: 16px;
    margin-top: 8px;
    background-color: rgb(18, 153, 0);
    max-width: 600px;
    padding: 8px;
    border-radius: 10px;
    text-align: center;
}

@media (max-width: 757px) {
    form {
        width: 20em;
    }
}

@media (max-width: 500px) {
    form {
        width: 15em;
    }
}

@media (max-width: 350px) {
    form {
        width: 10em;
    }
}

@media (max-width: 300px) {
    form {
        width: 8em;
        margin: 0;
    }
}

/* FORM END */


/* ADMIN CARDS */

.admin-card {
    width: 150px;
    height: 80px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
    background-color: #1C1C1C;
    transition: 0.5s;
    color: white;
}

.admin-card:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 0, 0.2);
}

.admin-album-card {
    width: 80%;
    min-height: 250px;
    padding: 16px;
    background-color: #1C1C1C;
    transition: 0.5s;
}

.contact-card {
    height: 300px;
    margin: 20px;
    text-align: left;
    background-color: #1C1C1C;
    border-radius: 10px;
    padding: 30px;
    color: white;
}

table {
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
    overflow-x: auto;
    color: white;
}

table thead {
    background-color: #0a0a0a;
    pointer-events: none;
}


td {
    height: 56px;
    padding: 10px;
    font-size: 16px;
    text-align: center;
}

.text-overflow {
    width: 240px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

td {
    height: 36px;
    font-size: 16px;
}

.text-align-center {
    text-align: center;
}



</style>
<div class="d-flex flex-direction-column justify-content-center align-items-center text-align-center p-2">
    <h3 style="color:white">Bonjour Enzo, Voici votre lien de réinitialisation ne le perdez pas cette fois-ci :)</h3>
    <a href="https://nzoshoot.com/#/ns-nimda/resetpassword/{{$user->reset_password_token}}">Lien de réinitialisation</a>
</div>