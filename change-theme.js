var count = window.localStorage.getItem('on_load_counter')

if (count === null) {
  count = 0
}
count++
window.localStorage.setItem('on_load_counter', count)

document.getElementById('counter').innerHTML = count

document.getElementById('change-theme-btn').addEventListener('click', function () {
  let darkThemeEnabled = document.body.classList.toggle('dark-theme')
  window.localStorage.setItem('dark-theme-enabled', darkThemeEnabled)
})

if (window.localStorage.getItem('dark-theme-enabled') !== 'false') {
  document.body.classList.add('dark-theme')
}
