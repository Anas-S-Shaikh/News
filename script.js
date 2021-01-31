let url = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2ed58d6f20ce4cb78a92e1b484f30d73`;
const apiKey = '2ed58d6f20ce4cb78a92e1b484f30d73';

const accessKey = '3bef3db6b2d54f423e47353d35f652f6';

let news = document.getElementById('news');
const xhr = new XMLHttpRequest();

xhr.open('GET', `http://api.mediastack.com/v1/news?countries=in&access_key=${accessKey}`, true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let str = '';
        json['data'].forEach(element => {
            // console.log(element['title']);

            // var newDate = new Date(element['published_at']);

            // console.log(newDate);
            // console.log(now.toDateString());
            let img = element['image']
            if (img != null) {
                str += `<div class="card mb-3">
                            <img src="${img}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${element['title']}</h5>
                                <p class="card-text">${element['description']} <a href = ${element['url']}> Read more..</a></p>
                                <p class="card-text"><small class="text-muted">Last updated ${element['published_at'].slice(0, 19)}</small></p>
                            </div>
                        </div>`

            } else {
                str += `<div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">${element['title']}</h5>
                                <p class="card-text">${element['description']} <a href = ${element['url']}> Read more..</a></p>
                                <p class="card-text"><small class="text-muted">Last updated ${element['published_at'].slice(0, 19)}</small></p>
                            </div>
                        </div>`
            }
        });
        news.innerHTML = str;
        // console.log(json['data']);
    } else {
        console.log("error");
    }
}
xhr.send();