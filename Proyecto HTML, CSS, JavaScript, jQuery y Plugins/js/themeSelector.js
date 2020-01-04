// Theme selector
$('#to-green').click(() => {
  var theme = $('#theme')

  if(theme.attr('href') != 'css/green.css') {
    theme.attr('href', 'css/green.css')
  }
})

$('#to-red').click(() => {
  var theme = $('#theme')

  if(theme.attr('href') != 'css/red.css') {
    theme.attr('href', 'css/red.css')
  }
})

$('#to-blue').click(() => {
  var theme = $('#theme')

  if(theme.attr('href') != 'css/blue.css') {
    theme.attr('href', 'css/blue.css')
  }
})
