const headerComponent = {
    // option
    template: `
        <div class="row" id="headerDiv" :style="headerCss">
            {{username}}，你好
            <button class="btn btn-info" :style="buttonCss" id="logout">登出</button>
        </div>
    `,
    props:['username'],
    data: function () {
        return {
            headerCss:{
                lineHeight: '30px',
                borderBottomStyle: 'solid',
                borderBottomColor: '#120000',
                borderBottomWidth: '1px',
                paddingLeft: '2%',
                paddingRight: '2%',
                paddingBottom: '10px',
                paddingTop:'10px',
            },
            buttonCss: {
                marginLeft: '85%',
            }
        }
    }
};

const leftPanelComponent = {


};

let indexVue = new Vue({
    el:'#index',
    data:{
    },
    components: {
        headerComponent
    }
});
