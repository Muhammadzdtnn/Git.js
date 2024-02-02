
  #close_ad {
    left: 1px;
    top: 1px;
    float: right;
    z-index: 9999999999;
    position: absolute;
    padding: 1px;
    font-weight: 394;
    border-radius: 1px;
    border: 1px solid #000;
    background: #fff;
    color: #000;
    text-align: center;
    cursor: pointer;
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 11px;
  }

  #close_ad:hover {
    color: #000;
    opacity: .9;
  }

  @media only screen and (max-width: 600px) {
    #close_ad {
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 18px;
    }
  }

  #ad_asd div {
    position: relative;
    top: 0px;
  }

  #ad_asd {
    text-align: center;
    position: fixed;
    z-index: 999999999;
    background-color: transparent;
    border: 1px solid #666;
    overflow: hidden;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -khtml-border-radius: 2px;
    top: 55%;
    right: 50%;
    transform: translate(50%, -50%);
    display: none; /* hide initially */
  }

  .slide_in {
    animation: slide_in .5s forwards;
    -webkit-animation: slide_in .5s forwards;
  }

  .slide_out {
    animation: slide_out .5s forwards;
    -webkit-animation: slide_out .5s forwards;
  }

  @keyframes slide_in {
    0% {
      transform: translateX(50%);
    }
  }

  @-webkit-keyframes slide_in {
    50% {
      -webkit-transform: translateX(50%);
    }
  }

  @keyframes slide_out {
    100% {
      transform: translateX(50%);
    }
  }
