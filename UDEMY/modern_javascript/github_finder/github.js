class Github {
    constructor() {
        this.client_id = '8ae85c5c4c65a68ea0bc';
        this.client_secret = '85ecb90ff84ddc89286649b9b628deb9b0084508';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}