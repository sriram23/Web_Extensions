document.getElementById("convert").addEventListener("click", function() {
    let px = document.getElementById('px-val').value;
    let base = document.getElementById('base-val').value;
    let rem = px/base;
    document.getElementById('rem-val').value = rem;
});