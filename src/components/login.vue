<template>
    <div class="backlogin">
    
        <div class="topbody">
            <!-- 头像区域 -->
            <div class="login-box">
                <div class="avatar">
                    <img src="https://img0.baidu.com/it/u=1326250654,2089722006&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500"
                        alt="">
                </div>

                <div class="formlogin">
                    <!--  表单区域 -->
                    <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="100px"
                        class="demo-ruleForm" validatePass2>
                        <el-form-item label="账户" prop="username">
                            <el-input type="username" v-model="ruleForm.username" autocomplete="off" :clearable="true"
                                prefix-icon="el-icon-user-solid" placeholder="请输入您的账户/手机号/邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password" autocomplete="off"
                                placeholder="请输入您的账户密码" :show-password=true></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { fetchLogin } from '../api/login'
export default {
    data() {
        return {
            ruleForm: {
                username: 'admin',
                password: '123456',

            },
            rules: {
                username: [
                    { required: true, message: '请输入账户', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },

                ],

            }

        };
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                console.log('1111', valid);
                if (!valid) return
                let data = await fetchLogin(this.ruleForm.username, this.ruleForm.password)
                console.log(data);
                if (data.meta.status !== 200) {
                    return this.$message.error('登录失败 请检测账户或密码有误!!!');
                }
                this.$message({ message: '恭喜您 登录成功', type: 'success' });
                // 将token 存放在vuex 中  实现数据的存储
                this.$store.commit('storetoken', data.data.token)
                // 在跳转到首页 
                this.$router.push('/home')
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    }
}
</script>

<style lang="scss" scoped>
.backlogin {
    width: 100%;
    height: 100%;
    background-color: #2b4b6b;

}

.login-box {
    position: relative;
    width: 500px;
    height: 350px;
    margin: 50% auto;
    border-radius: 10px;

    .avatar {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        border-radius: 50%;
        border: 5px solid #ccc;
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .formlogin {
        position: absolute;
        width: 400px;
        height: 200px;
        left: 45%;
        right: 45%;
        transform: translate(-50%, -50%);
        margin-top: 200px;
    }

}
</style>