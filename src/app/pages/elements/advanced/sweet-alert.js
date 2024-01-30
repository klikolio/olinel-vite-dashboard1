import '@/build/vendors/sweetalert2/styles/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2'

// Initialize Sweet Alert object
const swal = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-label-success btn-wide mx-1',
    denyButton: 'btn btn-label-secondary btn-wide mx-1',
    cancelButton: 'btn btn-label-danger btn-wide mx-1'
  },
  buttonsStyling: false
})

// Initialize Sweet Alert Toast object
const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

document.querySelector('#swal-1').addEventListener('click', () => {
  swal.fire('Any fool can use a computer')
})

document.querySelector('#swal-2').addEventListener('click', () => {
  swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  )
})

document.querySelector('#swal-3').addEventListener('click', () => {
  swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
})

document.querySelector('#swal-4').addEventListener('click', () => {
  swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
})

document.querySelector('#swal-5').addEventListener('click', () => {
  swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: 'Don\'t save'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      swal.fire('Changes are not saved', '', 'info')
    }
  })
})

document.querySelector('#swal-6').addEventListener('click', () => {
  swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
})

document.querySelector('#swal-7').addEventListener('click', () => {
  swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
})

document.querySelector('#swal-8').addEventListener('click', () => {
  swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image'
  })
})

document.querySelector('#swal-9').addEventListener('click', () => {
  let timerInterval

  swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      swal.showLoading()
      const b = swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
})

document.querySelector('#swal-10').addEventListener('click', () => {
  swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })
})

document.querySelector('#swal-11').addEventListener('click', () => {
  toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  })
})
