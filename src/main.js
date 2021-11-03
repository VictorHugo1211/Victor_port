const SocialMedia = {
    github: 'VictorHugo1211',
    instagram: 'seraquevoa',
    twitter: 'victorhugo639'
}

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${SocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        bio_git.textContent = data.bio
    })
}

getGitHubProfileInfos()
