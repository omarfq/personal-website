<template>
  <div class="container">
    <a class="circle__outter--1 button">
        <div class="circle--1">
            <i class="fab fa-youtube circle__icon"></i>
            <h1 class="circle__title">YouTube</h1>
        </div>
    </a>
    
    <a class="circle__outter--2 button">
        <div class="circle--2">
            <i class="fas fa-blog circle__icon" ></i>
            <h1 class="circle__title">Blog</h1>
        </div>
    </a>

    <a class="circle__outter--3 button">
        <div class="circle--3">
            <v-icon class="circle__icon">description</v-icon>
            <h1 class="circle__title">Resumé</h1>
        </div>
    </a> 

    <a class="circle__outter--4 button">
        <div class="circle--4">
            <i class="fab fa-github circle__icon"></i>
            <h1 class="circle__title">GitHub</h1>
        </div>
    </a> 

    <a class="circle__outter--5 button">
        <div class="circle--5">
            <i class="fas fa-laptop-code circle__icon"></i>
            <h1 class="display-3 circle__title button--middle">Projects</h1>
        </div>
    </a> 
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
    $outter-circle-height: 16vw;
    $outter-circle-width: 16vw;

     $outter-circle-shadow: 0 1rem 2rem rgba(#000, .4);
     $inner-circle-shadow: 0 1.5rem 4rem rgba(#000, .4);

    $circle-height: 13vw;
    $circle-width: 13vw;

    .container {
        display: grid;
        justify-items: center;
        justify-content: center;
        grid-template-columns: repeat(3, min-content);
        grid-template-rows: repeat(3, max-content);
        grid-gap: 2rem;

        & a {
            color: #fff;
        }

        & a div h1:last-child {
            position: relative;
        }
    }

    .button {
        &,
        &:link,
        &:visited {
            transition: all .3s;
        }

        &:hover {
            transform: scale(1.1) translateY(-.3rem);
            box-shadow: 0 1.5rem 2rem rgba(#000,.6);
        }

        &:active,
        &:focus {
            outline: none;
            transform: translateY(-.1rem);
            box-shadow: 0 .5rem 1rem rgba(#000,.2);
        }

        &--middle {
            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 50%;
                height: 100%;
                width: 20px;
                background-color: red;
                transform: scaleY(0);
                transition: transform .2s, width .4s cubic-bezier(1,0,0,1) .2s, background-color .1s;
            }

            &:hover::before {
                position: absolute;
                transform: scaleX(1);
                height: 100%;
                color: #fff;
                overflow-y: hidden;
            }
        }

      
    }

    .circle {
        /* OUTTER CIRLES */

        &__outter--1 {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: $outter-circle-height;
            width: $outter-circle-width;
            border-radius: 50%;
            background-color: #757575;
            grid-row: 3 / 4;
            grid-column: 2 / 3;
            box-shadow: $outter-circle-shadow;
        }

        &__outter--2 {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: $outter-circle-height;
            width: $outter-circle-width;
            border-radius: 50%;
            background-color: #757575;
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            box-shadow: $outter-circle-shadow;
        }

        &__outter--3 {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: $outter-circle-height;
            width: $outter-circle-width;
            border-radius: 50%;
            background-color: #757575;
            grid-row: 1 / 2;
            grid-column: 2 / 3;
            box-shadow: $outter-circle-shadow;
        }

        &__outter--4 {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: $outter-circle-height;
            width: $outter-circle-width;
            border-radius: 50%;
            background-color: #757575;
            grid-row: 2 / 3;
            grid-column: 3 / 4;
            box-shadow: $outter-circle-shadow;
        }    

        &__outter--5 {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 2.5rem;
            grid-row: 2 / 3;
            grid-column: 2 / 3;

            & i {
                font-size: 5rem;
            }
        }

        /* INNER CIRCLES */

        &--1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            height: $circle-height;
            width: $circle-width;
            border-radius: 50%;
            background-color: #00c853;
            box-shadow: $inner-circle-shadow;
        }

        &--2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            height: $circle-height;
            width: $circle-width;
            border-radius: 50%;
            background-color: #4DD0E1;
            box-shadow: $inner-circle-shadow;
        }

        &--3 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            height: $circle-height;
            width: $circle-width;
            border-radius: 50%;
            background-color: #00C853;
            box-shadow: $inner-circle-shadow;
        }

        &--4 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            height: $circle-height;
            width: $circle-width;
            border-radius: 50%;
            background-color: #4DD0E1;
            box-shadow: $inner-circle-shadow;
        }

        &--5 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }

        &__icon {
            font-size: 3rem;
            margin-bottom: .5rem;
        }
        
    }
</style>