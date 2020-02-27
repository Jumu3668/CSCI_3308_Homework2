var counter = 0;
function addCard(interest) {


    // generate unique id
    var tweet = $('<div class="card-body" id = twitter'+counter+'><img class="card-img-top" src="https://tctechcrunch2011.files.wordpress.com/2012/08/twitter-logo.jpg" alt="Card image cap"><div class="card-body"><button type="button" class="btn btn-danger btn-sm btn-circle" onclick="deleteCard(twitter'+counter+')"></button><h5 class="card-title">Tweet</h5><p class="card-text">Witty and Inspirint Tweet</p></div></div>');
    tweet.appendTo(interest);
    counter++;
    console.log(counter)

}

function deleteCard(id) {
    $(id).remove();
    counter--;
    console.log(counter)

}
