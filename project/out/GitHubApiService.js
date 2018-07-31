"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (userName) {
        request.get('https://api.github.com/users/' + userName, null, function (response) {
            console.log(response);
        });
    };
    GitHubApiService.prototype.getRepo = function () {
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
