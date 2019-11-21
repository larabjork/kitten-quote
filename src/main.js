// import { FUNCTION } from './PROJECT NAME';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Inspiration } from "./project.js";

$(document).ready(function() {
  $('.stupid').submit(function(event) {
    event.preventDefault();
    // const name = $('#name').val();
    // $('#name').val("");
console.log("button click");
    (async () => {
      let newInspiration = new Inspiration();
      let response = await newInspiration.apiQuote();
      console.log(newInspiration);
      getElements(response)
      console.log(response);

    })();


    function getElements(response) {
      $('.showQuote').html(`${response.quoteText}`);
      $('.showKitten').attr();//might need to pass in source and variable that will store the api image
    }
  });
});
