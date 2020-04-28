class Github{
    constructor(){
        this.client_id = 'db997fd377e0476bd300';
        this.client_secret = 'a140ed73db4d96fdf6272f69e321c373df559ca1';
        this.repose_count = 5;
        this.repose_sort = "created: asc";
    };

    async getUser(userName){
        const profile = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profile.json();

        const repos = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repose_count}&sort=${this.repose_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoData = await repos.json();

        return{
            profile: profileData,
            repos: repoData
        };
    };
};