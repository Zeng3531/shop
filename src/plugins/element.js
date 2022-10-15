import Vue from 'vue'
import {
    Form,
    FormItem,
    Input,
    Button,
    Message
} from 'element-ui'
import { Loading } from 'element-ui';
Vue.use(Loading.directive);
Vue.use(Form),
    Vue.use(FormItem),
    Vue.use(Input)
Vue.prototype.$message = Message
Vue.use(Button)