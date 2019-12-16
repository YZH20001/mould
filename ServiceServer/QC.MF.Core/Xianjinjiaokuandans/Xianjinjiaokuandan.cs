using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace QC.MF.Xianjinjiaokuandans
{
    public class Xianjinjiaokuandan : Entity<int>
    {
        ///客户填写
        //年
        public string Nian { get; set; }
        //月
        public string Yue { get; set; }
        //日
        public string Ri { get; set; }
        //收款单位
        public string AccountName { get; set; }
        //收款账号
        public string AccountNumber { get; set; }
        //开户行
        public string OpeningBank { get; set; }
        //摘要
        public string Abstract { get; set; }
        //币种及金额（大写）
        public string Money { get; set; }
        //银行专用栏
        public string BankSpecialColumn { get; set; }
    }
}
