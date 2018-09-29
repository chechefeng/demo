var nav =`

    <div class="sy_container">
            <!--头部-->
            <div class="sy_header">
                <div class="sy_logo">
                    <img src="../../../images_box/logo.png" alt="logo" class="sy_tx" />
                    <span class="sy_sx"></span>
                    <span class="sy_word">企业网上银行</span>
                </div>
                <div class="sy_kehu">
                    <a href="###" id="sy_sys_info">
                        <!--没有消息的图片-->
                        <!--<img src="../images_box/horn.png" alt="tip" class="sy_tx" />-->
                        <!--有消息提示的图片-->
                        <img src="../../../images_box/xiaoxitishi-red.png" alt="tip" class="sy_tx" />
                    </a>
                    <span class="sy_sx"></span>
                    <span class="sy_hao">客户号：</span>
                    <span class="sy_czy">231445144</span>
                    <span class="sy_hao">操作员号：</span>
                    <span class="sy_czy sy_czy_color">003</span>
                    <a href="###" id="touxiang">
                        <img src="../../../images_box/person.png" alt="" class="sy_tx" style="width: 30px;height: 30px;display: inline-block; border-radius: 50%;"
                        />
                    </a>
                    <div id="shangchuantouxiang">
                        <div id="headXiang">
                            <a href="javascript:;" class="file">选择您要上传的头像
                                <input type="file" name="" id="headPortrait" value="" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" onchange="preImg(this.id,'userImg');"
                                />
                            </a>
                        </div>
                        <div id="headType">
                            <p>仅支持JPG\PNG\BMP格式，</p>
                            <p>文件不大于50K</p>
                        </div>
                        <div id="headImg" style="text-align: center;">
                            <img src="" id="userImg" />
                        </div>
                        <div id="footer">
                            <button class="queding btn imgSure">确定</button>
                            <button class="quxiao btn imgCancel">取消</button>
                        </div>
                    </div>
    
                    <span class="sy_hao">小周</span>
                    <a href="###" id="tuichu">
                        <img src="../../../images_box/tuichu.png" alt="" class="sy_tx" style="width: 12px;height: 14px;display: inline-block; border-radius: 50%; margin-right: 3px; margin-left: 8px;"
                        />
                        <span class="sy_hao">退出</span>
                    </a>
                </div>
            </div>
        </div>
        <!--导航栏-->
        <div class="sy_navbar">
            <!-- 系统信息 start -->
            <div class="sy_sysmess">
                <div class="sysinfo">系统消息</div>
                <ul class="sy_sys_ul">
                    <li>
                        <a href="###" class="sy_sys_details">
                            <span class="sy_sys_content">贵宾客户增值服务</span>
                            <span class="sy_sys_time">20141213</span>
                        </a>
                    </li>
                    <li>
                        <a href="###" class="sy_sys_details">
                            <span class="sy_sys_content">贵宾客户增值服务</span>
                            <span class="sy_sys_time">20141213</span>
                        </a>
                    </li>
                    <li>
                        <a href="###" class="sy_sys_details">
                            <span class="sy_sys_content">贵宾客户增值服务</span>
                            <span class="sy_sys_time">20141213</span>
                        </a>
                    </li>
                    <li>
                        <a href="###" class="sy_sys_details">
                            <span class="sy_sys_content">贵宾客户增值服务</span>
                            <span class="sy_sys_time">20141213</span>
                        </a>
                    </li>
                    <li>
                        <a href="###" class="sy_sys_details">
                            <span class="sy_sys_content">贵宾客户增值服务</span>
                            <span class="sy_sys_time">20141213</span>
                        </a>
                    </li>
                </ul>
                <a href="../../../html/shouye_systeminfo.html" class="sy_sys_more">
                    查看全部消息>
                </a>
            </div>
        </div>
        <!-- 系统信息 end -->
        <!--导航栏-->
        <!--导航模块 begin-->
        <div class="sy_nav">
            <ul>
                <li>
                    <a href="../../index.html" title="">首页</a>
                </li>
                <li>
                    <a href="javascript:void(0);" title="">账户</a>
                    <div class="sy_bar">
                        <dl>
                            <dt onclick="javascript:window.location.href='../../账户/账户查询/zhanghuguanli_chaxun.html';return false;">账户查询</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="javascript:window.location.href='../../账户/网银流水查询/zhanghu_wangshangliushui.html';return false;">网银流水查询</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="javascript:window.location.href='###';return false;">他行账户查询</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="javascript:window.location.href='###';return false;">他行账户维护</dt>
                            <dd>
                                <a href="###">他行账户查询维护</a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="javascript:window.location.href='###';return false;">本行账户授权维护</dt>
                            <dd>
                                <a href="###">本行账户查询授权</a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="javascript:window.location.href='';return false;">电子回单</dt>
                            <dd>
                                <a href="../../账户/电子回单/zhanghu_dianzihuidandayin.html">电子回单打印</a>
                            </dd>
                            <dd>
                                <a href="../../账户/电子回单/zhanghu_huidanxiangqing.html">电子回单验证</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <a href="" title="">付款</a>
                    <div class="sy_bar">
                        <dl>
                            <dt onclick="javascript:window.location.href='../../付款/单笔转账/single_recorded_info.html'">单笔转账</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onClick="window.location.href = '../../付款/批量转账/fukuan_piliang.html';">批量转账</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>收款方管理</dt>
                            <dd>
                                <a href="../../付款/收款方管理/fukuan_shoukuanfangguanli_shoukuanfangfenzu.html">收款方分组管理</a>
                            </dd>
                            <dd>
                                <a href="../../付款/收款方管理/fukuan_shoukuanfangguanli_shoukuanfangweihu.html">收款方维护</a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onClick="window.location.href = '../../付款/款项用途维护/fukuan_kuanxiangyongtuweihu.html';">款项用途维护</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="window.location.href='../../付款/大额行号查询/daefukuan.html'">大额行号查询</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="window.location.href='../../付款/预约撤销/transation_cancel.html'">预约撤销</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="window.location.href='../../付款/代发工资/daifagongzi.html'">代发工资</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li  class="nav_now">
                    <a href="../html/存款/定期存款/cunru_dingqicunkuanE.html" title="">存款</a>
                    <div class="sy_bar depositNav">
                        <dl>
                            <dt>定期存款</dt>
                            <dd>
                                <a href="../../存款/定期存款/cunru_dingqicunkuan.html">存入定期存款</a>
                            </dd>
                            <dd>
                                <a href="../../存款/定期存款/zhiqudingqicunkuan.html">支取定期存款</a>
                            </dd>
                            <dd>
                                <a href="../../存款/定期存款/cunkuan_chaxundingqicunkuan_A.html">查询定期存款</a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>通知存款</dt>
                            <dd>
                                <a href="../../存款/通知存款/cunru_tongzhicunkuan.html">存入通知存款</a>
                            </dd>
                            <dd>
                                <a href="../../存款/通知存款/jianli_zhiqutongzhi.html">建立支取通知</a>
                            </dd>
                            <dd>
                                <a href="../../存款/通知存款/drawNotice.html">支取通知存款</a>
                            </dd>
                            <dd>
                                <a href="../../存款/通知存款/quxiao_zhiqutongzhi.html">取消支取通知</a>
                            </dd>
                            <dd>
                                <a href="../../存款/通知存款/chaxun_tongzhicunkuan.html">查询通知存款</a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <a href="javascript:;" title="">复核</a>
                    <div class="sy_bar depositNav depositNavFh" style="margin-left:190px;">
                        <dl>
                            <dt onclick="javascript:window.location.href='../../复核/交易复核/trade_R.html';return false;">
                                <a style="font-size:14px; color:#333; height: 40px;line-height: 40px;margin-bottom: 10px;text-align: center;">交易复核</a>
                            </dt>
                        </dl>
                    </div>
                </li>
                <li>
                    <a href="" title="">设置</a>
                    <div class="sy_bar">
                        <dl>
                            <dt onclick="goto('setting_quanxian')">操作员权限设置</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="goto('setting_xinxi')">操作员信息维护</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="goto('setting_change')">操作员信息变更</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="goto('setting_fuhe')">复核流程设置</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="goto('setting_xiane')">交易限额设置</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="goto('setting_guide')">系统设置向导</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="goto('fh_quanxian')">管理员复核</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                    </div>
                </li>
                <li>
                    <a href="" title="">服务中心</a>
                    <div class="sy_bar serviceNav">
                        <dl>
                            <dt onClick="window.location.href = '../../服务中心/网银操作日志查询/fuwuzhongxin_wangyingcaozuorizhi.html'">网银操作日志查询</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
                        <dl>
                            <dt onclick="window.location.href='../../服务中心/修改密码/fuwuzhongxin_xiugaimima.html'">修改用户登录密码</dt>
                            <dd>
                                <a href=""></a>
                            </dd>
                        </dl>
    
                    </div>
                </li>
    
            </ul>
    </div>





`