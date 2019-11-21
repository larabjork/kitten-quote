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
      let response2 = await newInspiration.apiPic();
      console.log(newInspiration);
      getElements(response,response2);
      // getElements(response2);
      console.log(response2);

    })();


    function getElements(response, response2) {
      $('.showQuote').html(`${response.quoteText}`);
      $('.showAuthor').html(`${response.quoteAuthor}`);
      $('.showPuppy').attr("src", `${response2.message}`);
    }
  });
});
