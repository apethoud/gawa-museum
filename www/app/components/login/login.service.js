(function(angular) {
  angular
    .module("application")
    .service("loginService", function() {
      // public API
      this.loggedInUser = {};
      this.login = _login;
      this.logout = _logout;
      this.isLoggedIn = _isLoggedIn;




      // implementation
      function _login() {
        this.loggedInUser = {
          name : "Jon",
          photo : "angularicon.jpg",
          loginTime : Date.now(),
        };
      }

      function _logout() {
        this.loggedInUser = {};
      }

      function _isLoggedIn() {
        if(this.loggedInUser != {}) {
          return true;
        }
      }
    });
}(window.angular));
