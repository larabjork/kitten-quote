export class Inspiration {

  async apiQuote() {
    let response = await fetch(`http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`)
    let jsonifiedResponse = await response.json();
    console.log("back end response");
    return jsonifiedResponse;
  }
}
