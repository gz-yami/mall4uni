// z-paging全局配置文件，注意避免更新时此文件被覆盖，若被覆盖，可在此文件中右键->点击本地历史记录，找回覆盖前的配置
export default {
    //配置分页默认pageSize为20
    'default-page-size': '20',
    // 空数据图图片
    'empty-view-img': '/static/images/icon/empty.png',
    // 空数据图img样式
    'empty-view-img-style': {
        'display': 'block',
        'width': '80rpx',
        'height': '80rpx',
        'margin': '0 auto',
        'margin-bottom': '20rpx'
    },
    // 自动显示点击返回顶部按钮
    'auto-show-back-to-top': true,
    // 返回顶部按钮图标
    'back-to-top-img': '/static/images/icon/back-to-top.png',
    // 返回顶部按钮样式
    'back-to-top-style': {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'width': '80rpx',
        'height': '80rpx',
        'border-radius': '50%',
        'background': '#fff',
        'border': '2rpx solid #ccc'
    },
    // 点击返回顶部按钮与底部的距离
    'back-to-top-bottom': '150rpx',
    // 当列表内容没有超出一页时，是否隐藏没有更多的提示
    'hide-no-more-inside': true,
    'auto-clean-list-when-reload': false
}
