const titulo = document.querySelector('.titulo')
const imagemPerfil = document.querySelector('.imagem-perfil')
const loginPerfil = document.querySelector('.login-perfil')
const segPerfil = document.querySelector('.seg-perfil')
const reposPerfil = document.querySelector('.repos-perfil')
const perfilBio = document.querySelector('.perfil-bio')
const locPerfil = document.querySelector('.loc-perfil')

const getInfos = async () =>{
    const response = await fetch('https://api.github.com/users/LuMi-Yo')
    const data = await response.json()
    console.log(data)
    
    if(!data){
        titulo.innerHTML = ('Miguelito')
        reposPerfil.innerHTML = ("Número de repertórios: 4")
        imagemPerfil.innerHTML = ('src', 'https://avatars.githubusercontent.com/u/163542693?v=4')
        perfilBio.innerHTML = ('Olá')
        segPerfil.innerHTML = ('Seguidores: 0 \n Seguindo: 0')
        locPerfil.innerHTML = ('Casa de Inha')
    }else{
        titulo.innerHTML = data.name
        reposPerfil.innerHTML = `Número de repositórios: ${data.public_repos}`
        imagemPerfil.setAttribute('src', data.avatar_url)
        perfilBio.innerHTML = data.bio
        segPerfil.innerHTML = `Seguidores: ${data.followers} \n Seguindo: ${data.following}`
        locPerfil.innerHTML = data.location
    }
}

getInfos()