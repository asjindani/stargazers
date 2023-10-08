<?php include "base/header.html";?>

<style>

    main {
        background: url('background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        flex-direction: column;
        text-align: center;
    }

    main .container {
        background: #000a;
        border-radius: 25px;
        padding: 20px;
    }

    main .container div {
        font-size: 80px;
    }

    main .container p {
        font-size: 30px;
    }

</style>

<div class="container" style="font-family: sans-serif!important;">
    <div>Stargazers</div>
    <p>Your go-to app for planetary guide and travelling!</p>
</div>

<?php include "base/footer.html";?>