import * as request from 'request';

export class GitHubApiService {
getUserInfo(userName: string) {
request.get('https://api.github.com/users/' + userName, null, (response: any) => {
console.log(response);
})
}

getRepo() {

}

}

