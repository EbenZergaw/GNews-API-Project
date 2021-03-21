const topic = "technology"
var articles = []

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        getNews(button.id)
    })
})

function getNews(id) {
    fetch(`https://gnews.io/api/v4/top-headlines?&token=7ef8cab29e19fe08a2c3490a1259cbe1&topic=${id}&lang=en`)
    .then(function (response) {
        return response.json();
    })
    .then((data) => {
        articles = []
        data.articles.forEach((article) => {
            articles.push(article)
        })
        console.log(articles)
    })
    .then(() => {
        paintNews()
    });
}

function paintNews() {
    document.querySelectorAll("li").forEach((li) => {
        li.remove()
    })
    articles.forEach((article) => {
        
        const li = document.createElement("li")
        const a = document.createElement("a")       // Title
        const br = document.createElement("br")
        const div = document.createElement("div")
        const p = document.createElement("p")       // Description
        const img = document.createElement("img")   // Image

        li.append(a, br, div)
        div.append(img, p)
        a.className = "title"
        p.className = "desc"
        
        a.textContent = article.title
        a.setAttribute("href", article.url)
        a.setAttribute("target", "_blank")
        p.textContent = article.description
        img.setAttribute("src", article.image)

        document.querySelector("ul").appendChild(li)
    })
}

if(articles.length === 10){
    paintNews()
}

document.body.addEventListener("click", (e) => {
    if(e.className === "desc"){
        window.open(e.parent.parent.querySelector("a").href)
        console.log("wdwwq")
    }
})