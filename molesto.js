const where = document.getElementById('malasaña')
const goWithTheFlow = () => {
  where.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'center',
  })
}
