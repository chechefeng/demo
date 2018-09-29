    $(function(){
        $('.fuxuankuang-dis-none').bind('click',function(){
            if ($('.fuxuankuang-dis-none').is(":checked")) {
                $('.fuxuankuang-state').removeClass('fuxuankuang-weixuanzhong').addClass('fuxuankuang-xuanzhong');
                $('.shezhi_btn button').attr('disabled',false);
            }else{
                $('.fuxuankuang-state').removeClass('fuxuankuang-xuanzhong').addClass('fuxuankuang-weixuanzhong');
                $('.shezhi_btn button').attr('disabled',true);
            }
        })
        $('.fuxuankuang-dis-none1').bind('click',function(){
            if ($('.fuxuankuang-dis-none1').is(":checked")) {
                $(this).siblings('.fuxuankuang-state').removeClass('fuxuankuang-weixuanzhong').addClass('fuxuankuang-xuanzhong');
            }else{
                $(this).siblings('.fuxuankuang-state').removeClass('fuxuankuang-xuanzhong').addClass('fuxuankuang-weixuanzhong');
            }
            allSelected()
        })
        $('.fuxuankuang-dis-none2').bind('click',function(){
            if ($('.fuxuankuang-dis-none2').is(":checked")) {
                $(this).siblings('.fuxuankuang-state').removeClass('fuxuankuang-weixuanzhong').addClass('fuxuankuang-xuanzhong');
                $('.fuxuankuang-dis-none22').siblings('.fuxuankuang-state').removeClass('fuxuankuang-weixuanzhong').addClass('fuxuankuang-xuanzhong');
            }else{
                $(this).siblings('.fuxuankuang-state').removeClass('fuxuankuang-xuanzhong').addClass('fuxuankuang-weixuanzhong');
                $('.fuxuankuang-dis-none22').siblings('.fuxuankuang-state').removeClass('fuxuankuang-xuanzhong').addClass('fuxuankuang-weixuanzhong');
            }
            allSelected()
        })
        function allSelected(){
            if($('.fuxuankuang-dis-none1').siblings('.fuxuankuang-state').hasClass('fuxuankuang-xuanzhong')&&$('.fuxuankuang-dis-none2').siblings('.fuxuankuang-state').hasClass('fuxuankuang-xuanzhong')){
                
                $('.fuxuankuang-dis-none').siblings('.fuxuankuang-state').removeClass('fuxuankuang-weixuanzhong').addClass('fuxuankuang-xuanzhong');
                $('.shezhi_btn button').attr('disabled',false);
            }else if($('.fuxuankuang-dis-none1').siblings('.fuxuankuang-state').hasClass('fuxuankuang-xuanzhong')||$('.fuxuankuang-dis-none2').siblings('.fuxuankuang-state').hasClass('fuxuankuang-xuanzhong')){
                $('.fuxuankuang-dis-none').siblings('.fuxuankuang-state').removeClass('fuxuankuang-xuanzhong').addClass('fuxuankuang-weixuanzhong');
                $('.shezhi_btn button').attr('disabled',false);
            }else{
                $('.fuxuankuang-dis-none').siblings('.fuxuankuang-state').removeClass('fuxuankuang-xuanzhong').addClass('fuxuankuang-weixuanzhong');
                $('.shezhi_btn button').attr('disabled',true);
            }
        }
        /**
         * 判断复选框是否选中
         * @param {Object} checkClassName 当前复选框的类名
         * @param {Object} checkStateShow 要显示的复选框样式的类名
         */
        function isCheckState(checkClassName,checkStateShow){
            $('.'+checkClassName).click(function(){
                    if ($('.'+checkClassName).is(":checked")) {
                    $('.'+checkStateShow).removeClass('fuxuankuang-weixuanzhong');
                    $('.'+checkStateShow).addClass('fuxuankuang-xuanzhong');
                }else{
                    $('.'+checkStateShow).addClass('fuxuankuang-weixuanzhong');
                    $('.'+checkStateShow).removeClass('fuxuankuang-xuanzhong');
                }
            })
        }
    })
        
