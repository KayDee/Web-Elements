class SpinBatman extends HTMLElement{
  constructor(){
    super()
    console.log('Hey there')
    this.attachShadow({
      mode: 'open'
    })
  }
  connectedCallback(){
    let temp = document.createElement('template')
    let styles = `
    <style>
      :host{
        display: inline-block;
      }
      ::slotted(img){
        width: 600px;
      }
    </style>
    `
    temp.innerHTML = styles + '<slot />'
    this.shadowRoot.appendChild(temp.content.cloneNode(true))
    console.log(this.shadowRoot.querySelector('slot'))

    this.animate([
      {transform: 'scale(0) rotate(1080deg)' },
      {transform: 'scale(1) rotate(0deg)' }
    ], {
      duration: 1000,
      easing: 'ease-out'
    })
  }
}

customElements.define('batman-spin', SpinBatman)