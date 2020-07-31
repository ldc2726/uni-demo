export default {
    QueryAccountListData: { //查询账户信息列表
        url: '/ErpBasic/Account/QueryAccountListData',
        type: 'post',//默认post，可忽略不写
        header: {
            'Content-Type': 'application/json',//可省略默认
            isIgnore: true//是否过滤拦截，默认false
        }
    },
    InsertAccountData: { //添加账户
        url: '/ErpBasic/Account/InsertAccountData'
    },
    UpdateAccountData: { //修改账户
        url: '/ErpBasic/Account/UpdateAccountData'
    },
    DeleteAccount: { //删除用户数据
        url: '/ErpBasic/Account/DeleteAccount'
    }
}
