class StarRating {
  constructor(config) {
    this.target = config.target;
    this.value = null;
    this.stars = null;
    this.template =
      `<div class="stars">
        <span class="star" data-id="0">&#11088;</span>
        <span class="star" data-id="1">&#11088;</span>
        <span class="star" data-id="2">&#11088;</span>
        <span class="star" data-id="3">&#11088;</span>
        <span class="star" data-id="4">&#11088;</span>
      </div>`;
    this.init();
  }

  removeClass(elem, className) {
    elem.classList.contains(className) && elem.classList.remove(className);
  }

  addClass(elem, className) {
    !elem.classList.contains(className) && elem.classList.add(className);
  }

  onStarsClick = (e) => {
    const newValue = e.target.dataset.id;
    if (!newValue) return;

    for (let i = 0; i < 5; i++) {
      const child = this.stars.children[i];

      if (newValue === this.value) {
        this.removeClass(child, 'active');
        continue;
      }

      if (newValue >= i) {
        this.addClass(child, 'active');
        continue;
      }

      this.removeClass(child, 'active');
    }

    this.value = newValue === this.value ? null : newValue;
  }

  onStarsMouseOver = (e) => {
    const newValue = e.target.dataset.id;
    if (!newValue) return;

    for (let i = 0; i < 5; i++) {
      const child = this.stars.children[i];

      if (newValue >= i) {
        this.addClass(child, 'hovered');
        continue;
      }

      this.removeClass(child, 'hovered');
    }
  }

  onStarsMouseLeave = () => {
    for (let i = 0; i < 5; i++) {
      const child = this.stars.children[i];
      this.removeClass(child, 'hovered');
    }
  }

  init() {
    this.target.insertAdjacentHTML('beforeend', this.template);
    this.stars = this.target.getElementsByClassName('stars')[0];
    this.stars.addEventListener('click', this.onStarsClick);
    this.stars.addEventListener('mouseover', this.onStarsMouseOver);
    this.stars.addEventListener('mouseleave', this.onStarsMouseLeave);
  }
}

const container = document.getElementById('container');

new StarRating({ target: container });
