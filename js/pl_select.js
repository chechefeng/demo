// 批量删除
// 被点击元素 hit   是否选择元素check 多选，单选
function pl_del($this, nextNode, bol, host) {
    // bol 为true, 说明是是thead的checkbox
    if (bol) {
        if ($this.is(":checked")) {
            nextNode.addClass('checkbox_on');
        } else {
           nextNode.removeClass('checkbox_on');
        }
    } else {
        if (host.is(":checked")) {
            $this.next().removeClass('checkbox_on');
            host.next().removeClass('checkbox_on');
            host.prop('checked', false);
        } else {
            if ($this.is(":checked")) {
                $this.next().addClass('checkbox_on');
            } else {
                $this.next().removeClass('checkbox_on');
            }
        }
    }
     
}