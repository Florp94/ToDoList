const input = document.querySelector("input");
const addbtn = document.querySelector(".btn_add");
const ul= document.querySelector("ul");
const empty = document.querySelector(".empty");

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);
})