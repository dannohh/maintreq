const form = document.querySelector('form')

const submitForm = (e) => {
    e.preventDefault()
    console.log('submitted!')
    console.log(e.target.querySelector('#name').value)
    console.log(e.target.querySelector('#streetName').value)
    console.log(e.target.querySelector('#houseNumber').value)
    console.log(e.target.querySelector('#textArea').value)
}