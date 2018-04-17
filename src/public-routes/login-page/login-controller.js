
class AuthenticationController {
  constructor() {
    this.loginPageName = 'login';
  }

  async loginPage(request, response) {
    response.render(this.loginPageName, { user: '' });
  }
}

export default new AuthenticationController();
