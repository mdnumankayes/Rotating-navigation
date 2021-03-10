const jokeEl = document.getElementById('jokes')
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener('click', genarateJokes)


genarateJokes()

//using async/await
async function genarateJokes() {
    const confiq = {
        headers: {
            Accept: 'application/json',
        },

    }
    const res = await fetch(' https://icanhazdadjoke.com', confiq)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}
//using then
// function genarateJokes() {
//     const confiq = {
//         headers: {
//             Accept: 'application/json',
//         },

//     }
//     fetch('https://icanhazdadjoke.com', confiq)
//         .then(res => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }