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

.d-flex {
    display: flex;
}

.flex-direction-column {
    flex-direction: column;
}

.justify-content-center {
    justify-content: center;
}

.align-items-center {
    align-items: center;
}

.text-align-center {
    text-align: center;
}

.text-align-left {
    text-align: left;
}

.m-2 {
    margin: 1rem;
}

.text-white {
    color: white;
}



</style>
<div class="d-flex flex-direction-column justify-content-center align-items-center text-align-center p-2">
    <h2 class="text-white">Formulaire de contact :</h2>
    <div class="text-align-left">
        <h4 class="m-2 text-white">Nom : {{$contact->name}}</h4>
        <h4 class="m-2 text-white">Email : {{$contact->email}}</h4>
        <h4 class="m-2 text-white">Numero de téléphone : {{$contact->phone_number}}</h4>
        <h4 class="m-2 text-white">Message : {{$contact->message}}</h4>
    </div>
</div>