// https://www.hypertextcandy.com/nuxtjs-with-materialize
const materialize = {
  collapsible (option = {}) {
    const elems = document.querySelectorAll('.collapsible')
    M.Modal.init(elems, option)
  },

  datepicker (option = {}) {
      const elems = document.querySelectorAll('.datepicker')
      const i = M.Datepicker.init(elems, option)
      console.log(i)
  },

  dropdown (option = {}) {
      const elems = document.querySelectorAll('.dropdown-trigger')
      M.Dropdown.init(elems, option)
  },

  sidenav (option = {}) {
    const elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems, option)
  },

  modal (option = {}) {
    const elems = document.querySelectorAll('.modal')
    M.Modal.init(elems, option)
  }
}

export default (context, inject) => {
  inject('materialize', materialize)
}
