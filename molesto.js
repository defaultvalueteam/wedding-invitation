const where = document.getElementById('malasaña')
const celebrate = document.getElementById('celebrate')

const randomSticker = [
  'https://media1.giphy.com/media/2AKMlk7Cy9OA6CgUgC/giphy.gif?cid=ecf05e47595vvnf9dvuz8acae5afxjodfezw1os66obyq3gz&ep=v1_stickers_search&rid=giphy.gif&ct=s',
  'https://media0.giphy.com/media/B1trRvFchM5eVRROJO/giphy.gif?cid=ecf05e47edaee1j0mnbl1a4t3jaqv5wlkrdcpt6n86qbxb5h&ep=v1_stickers_search&rid=giphy.gif&ct=s',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzQwNjQ3NWEyYWEwY2NhN2I2NDZlOWNmYmI1ZDQ5MGQ4OGY0MjNmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/3kGpx3hkSUo4xDI7bJ/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTZkZjNmNjk2ZTQ5ZjFjMDlhMDY2Y2JjY2Q4NTI4Njk5ZGMzMWE5ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/kFNghExveIAk7fp6GX/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTA0YzI0OWYzN2U5ODM2MWQ1M2QzYjM2MmI2MGM2YzdkZjBmM2Q1MyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/Xa9gpnyKzWlwNvxxyv/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDY2ZjJhOGE5ZTFhZGUyMjQzYTExNjY2ZWFiZjc3NTg1ZTc3NTVkZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/k6xcUmggxtDj16vGmD/giphy.gif',
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzExNzY0N2EwMzUzMGE5NDRiYzQ5ODliMjQ4ODkyN2QwYjQxOTc3YyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/TgZhTUfWkKOaAd9IWy/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzg4MTdjNmM1MWQwYWM2ZGQyMDdmOTY2NGZmZDBiZWVlYWY1OWEyZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/b3DNq72agfmB64LnVF/giphy.gif',
  'https://media.tenor.com/-ZSr_aYh6FAAAAAi/la-lisa.gif',
]

const randomStickerUrl = randomSticker.map((sticker) => sticker)

window.onload = () => {
  document
    .getElementById('theSticker')
    .setAttribute('src', randomStickerUrl[Math.round(Math.random() * 9)])
}

const goWithTheFlow = () => {
  celebrate.style.display = 'block'
  setTimeout(() => {
    celebrate.style.display = 'none'
  }, '3000')

  where.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'nearest',
  })
}
