async function init() {
  const node = document.querySelector("#type-text");

  await sleep(1000);
  node.innerText = "";
  await node.type("I'm_");

  while (true) {
    await node.type("Piotr");
    await sleep(2000);
    await node.delete("Piotr");
    await node.type("Developer");
    await sleep(2000);
    await node.delete("Developer");
    await node.type("Designer");
    await sleep(2000);
    await node.delete("Designer");
    await node.type("Student");
    await sleep(2000);
    await node.delete("Student");
  }
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 100 * Math.random();
    return randomMs < 50 ? 10 : randomMs;
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character;
      await sleep(this.typeInterval);
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1);
      await sleep(this.typeInterval);
    }
  }
}

customElements.define("type-async", TypeAsync, { extends: "span" });

init();

async function Cursor(){
 
  var cursorinner = document.querySelector('.cursor');
  var a = document.querySelectorAll('a');
  
 
  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });

  document.addEventListener('mouseup', function(){
    cursorinner.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
  });
  
  document.addEventListener('mousedown', function(){
    cursorinner.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
  });
  

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursorinner.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursorinner.classList.remove('hover');
    });
  })
}
Cursor();