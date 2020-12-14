const formComponent = {
    // option
    template: `
        <form action="emp/login" method="post">
            <div class="form-group">
                <label for="accountId">{{accountName}}</label>
                <input class="form-group" type="text" id="accountId" :name=loginAccount v-model="account">
            </div>
            <div class="form-group">
                <label for="pwdId">{{passwordName}}</label>
                <input class="form-group" type="password" id="pwdId" :name=loginPwd v-model="password">
            </div>
              <div class="form-group">
                <label for="pwdId">{{googleVerifyName}}</label>
                <input class="form-group" type="text" id="codeId" :name=googleVerify v-model="code">
            </div>
            <button type="submit" class="btn btn-info" id="loginSubmit">登入</button>
        </form>
    `,
    props:['accountName', 'loginAccount', 'passwordName', 'loginPwd', 'googleVerifyName', 'googleVerify'],
    data: function () {
        return {
            account: '',
            password: '',
            code:''
        }
    }
};


let loginVue = new Vue({
    el:"#login",
    data: {
        loginAccount: '',
        loginPwd: '',
        googleVerify: ''
    },
    components: {
        'form-component': formComponent
    },
});