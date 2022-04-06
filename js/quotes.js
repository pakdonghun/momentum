const quotes = [
    {
        quote:"삶이 있는 한 희망은 있다",
        author: "키케로",
    },
    {
        quote:"피할수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
    {
        quote:"행복은 습관이다,그것을 몸에 지니라",
        author: "허버드",
    },
    {
        quote:"사랑하고 이별하는 것이, 전혀 사랑하지 않는 것보다 낫다",
        author: "알렉산더 테니슨",
    },
    {
        quote:"사랑은 내게 질문하지 않으며, 다만 끝없는 지지를 준다",
        author: "윌리엄 세익스피어)",
    },
    {
        quote:"사랑받고 싶다면, 사랑하고 사랑스러워져라",
        author: "벤자민 프랭클린",
    },
    {
        quote:"인생에서 최고의 행복은 사랑받고 있다는 확신을 갖고 있을 때이다",
        author: "빅터 휴고",
    },
    {
        quote:"사랑을 이야기하면 사랑을 하게 된다",
        author: "W.G 베넘",
    },
    {
        quote:"용서없는 사랑은 없고 사랑없는 용서는 없다",
        author: "브라이언트맥길",
    },
    {
        quote:"존경없이 참된 연애는 성립되지 않는다",
        author: "피히테",
    },
    {
        quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author: "괴테"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
