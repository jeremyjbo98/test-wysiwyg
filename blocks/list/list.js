export default function decorate(block) {
    const items = block.querySelectorAll(':scope > div');
    const ul = document.createElement('ul');
  
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.textContent.trim();
      ul.appendChild(li);
    });
  
    block.innerHTML = '';
    block.appendChild(ul);
  }
  